/*==================================================
            VisionDock v3.1
        Premium VisionOS Dock Engine
==================================================*/

"use strict";

class VisionDock {

    constructor(selector = ".vision-dock") {

        /*==========================================
                    VERSION
        ==========================================*/

        this.version="4.0.0";

        /*==========================================
                    ROOT
        ==========================================*/

        this.dock = document.querySelector(selector);

        if (!this.dock) {

            console.warn("VisionDock : Dock not found.");

            return;

        }

        this.items = [
            ...this.dock.querySelectorAll(".dock-item")
        ];

        if (this.items.length !== 5) {

            console.warn(
                "VisionDock requires exactly 5 dock items."
            );

            return;

        }

/*==========================================
            CONFIGURATION
==========================================*/
this.config = Object.freeze({

    /*==========================================
                Scheduler
    ==========================================*/

    idleTime: 4000,          // Wait 4 sec before next rotation

    /*==========================================
            Animation Timing
    ==========================================*/

    wakeDuration: 180,       // Faster wake animation

    rotateDuration: 1400,    // Rotation speed (4200 → 1400)

    settleDuration: 180,     // Faster settle animation

    /*==========================================
                Rotation
    ==========================================*/

    direction: "up",

    rotationStep: 72,

    /*==========================================
                CSS Classes
    ==========================================*/

    activeClass: "dock-active",

    nearClass: "dock-near",

    farClass: "dock-far",

    /*==========================================
                Development
    ==========================================*/

    debug: false

});


/*==================================================
        MOBILE SPEED OVERRIDE
==================================================*/

if (window.innerWidth <= 768) {

    this.config = {

        ...this.config,

        idleTime: 2200,          // Rotate more frequently

        rotateDuration: 850,     // Faster rotation

        wakeDuration: 120,

        settleDuration: 120

    };

}

/*==========================================
            ORDER
==========================================*/

this.order = [0,1,2,3,4];

/*==========================================
        SLOT CONFIGURATION
==========================================*/

this.slots = [

    {
        x:0,
        y:-110,
        scale:.82,
        opacity:.18,
        rotateX:-22,
        z:-120
    },

    {
        x:0,
        y:-55,
        scale:.94,
        opacity:.55,
        rotateX:-10,
        z:-60
    },

    {
        x:0,
        y:0,
        scale:1.18,
        opacity:1,
        rotateX:0,
        z:60
    },

    {
        x:0,
        y:55,
        scale:.94,
        opacity:.55,
        rotateX:10,
        z:-60
    },

    {
        x:0,
        y:110,
        scale:.82,
        opacity:.18,
        rotateX:22,
        z:-120
    }

];

/*==========================================
            CACHE
==========================================*/

this.cache = {

    bounds: null,

    positions: [],

    centerItem: null,

    activeBackground:
        this.dock.querySelector(".dock-active-bg")

};

        /*==========================================
                    FEATURES
        ==========================================*/

        this.features = Object.freeze({

            rotation: true,

            magnetic: true,

            tooltip: true,

            glow: true,

            scheduler: true,

            colors: true

        });

        /*==========================================
                    ENGINE STATE
        ==========================================*/

        this.state = {

            initialized: false,

            paused: false,

            rotating: false,

            hovering: false,

            currentCenter:2,

            currentRotation:0,

            wheelAngle:0,

            timer:null,

            timeline:null

        };


/*==================================================
            HOVER ENGINE
==================================================*/

this.handleMouseEnter = () => {

    this.state.hovering = true;

};

this.handleMouseLeave = () => {

    this.state.hovering = false;

    this.items.forEach((item, slot) => {

        this.applySlot(item, this.slots[slot], .25);

    });

};

/*------------------------------------------
        PER-ICON HOVER
------------------------------------------*/

this.items.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        this.items.forEach(other => {

            if (other !== item) {

                gsap.to(other, {

                    opacity: 0,

                    scale: 0.72,

                    z: -120,

                    duration: .18,

                    overwrite: true

                });

            }

        });

        gsap.to(item, {

            opacity: 1,

            scale: 1.22,

            z: 120,

            duration: .18,

            overwrite: true

        });

    });

    item.addEventListener("mouseleave", () => {

        this.items.forEach((other, slot) => {

            this.applySlot(other, this.slots[slot], .22);

        });

    });

});



        /*==========================================
                INITIALIZE
        ==========================================*/

        this.bindEvents();

        this.updateClasses();

        /* INITIAL SLOT POSITION */
        this.items.forEach((item, slot) => {

            this.applySlot(item, this.slots[slot], 0);

        });

        this.moveActiveBackground(0);

        this.updateVisualState();

        this.startScheduler();



        this.state.initialized = true;

        if (this.config.debug) {

            console.log(

                `VisionDock ${this.version} initialized.`

            );

        }

    }


        /*==================================================
                    CLASS ENGINE
    ==================================================*/

    updateClasses() {

    this.items.forEach(item => {

        item.classList.remove(

            this.config.activeClass,

            this.config.nearClass,

            this.config.farClass

        );

    });

    for (let slot = 0; slot < this.order.length; slot++) {

        const item = this.getItemBySlot(slot);

        if (slot === 2) {

            item.classList.add(this.config.activeClass);

        }

        else if (slot === 1 || slot === 3) {

            item.classList.add(this.config.nearClass);

        }

        else {

            item.classList.add(this.config.farClass);

        }

    }

}



/*==================================================
                GET SLOT ITEM
==================================================*/

getItemBySlot(slotIndex) {

    return this.items[this.order[slotIndex]];

}



/*==================================================
            MOVE ACTIVE CAPSULE
==================================================*/

moveActiveBackground(duration = 0.45) {

    if (!this.cache.activeBackground) return;

    const activeItem = this.getItemBySlot(2);

    if (!activeItem) return;

    const dockRect =
        this.dock.getBoundingClientRect();

    const itemRect =
        activeItem.getBoundingClientRect();

    const y =

        itemRect.top
        - dockRect.top
        + (itemRect.height / 2);

    gsap.to(

        this.cache.activeBackground,

        {

            top: y,

            yPercent: -50,

            duration,

            ease: "power3.inOut",

            overwrite: true

        }

    );

}
/*==================================================
                ROTATE ORDER
==================================================*/

rotateOrder() {

    if (this.config.direction === "up") {

        this.order.unshift(

            this.order.pop()

        );

    }

    else {

        this.order.push(

            this.order.shift()

        );

    }

}
applySlot(item, slot, duration = 0) {

    gsap.to(item, {

        x:slot.x,

        y:slot.y,

        z:slot.z,

        scale:slot.scale,

        opacity:slot.opacity,

        rotationX:slot.rotateX,

        rotationY:0,

        filter:`brightness(${0.75 + slot.scale * .3})`,

        duration,

        ease:"power3.inOut",

        force3D:true,

        overwrite:"auto"

    });

}


    /*==================================================
                    EVENTS
    ==================================================*/

    bindEvents() {

        this.dock.addEventListener(

            "mouseenter",

            this.handleMouseEnter,

            { passive: true }

        );

        this.dock.addEventListener(

            "mouseleave",

            this.handleMouseLeave,

            { passive: true }

        );

        window.addEventListener(

            "resize",

            () => {

                this.moveActiveBackground(0);

            },

            {

                passive:true

            }

        );

    }
/*==================================================
                GSAP ROTATION ENGINE
==================================================*/

rotate() {

    if (this.state.rotating) return;

    if (this.state.paused) return;

    if (this.state.rotating) return;


    /*----------------------------------------
            Create Master Timeline
    ----------------------------------------*/

    this.state.timeline = gsap.timeline({

        defaults: {

            ease: "power3.inOut"

        },

        onComplete: () => {

            /*--------------------------------
                    Update Order
            --------------------------------*/

           this.rotateOrder();

            this.updateClasses();

            this.moveActiveBackground();

            this.updateVisualState();

            this.state.rotating = false;

            this.state.timeline = null;
            this.state.currentRotation++;

            this.state.wheelAngle += this.config.rotationStep;

        }

    });

    /*----------------------------------------
            WAKE
    ----------------------------------------*/

    this.state.timeline.to(

        this.dock,

        {

            scale: 1.02,

            duration:
                this.config.wakeDuration / 1000

        }

    );

    /*----------------------------------------
            ROTATE ALL ITEMS
    ----------------------------------------*/

    for (let slot = 0; slot < this.order.length; slot++) {

        const item = this.getItemBySlot(slot);

        const nextSlot =

            this.config.direction === "up"

                ? (slot + 1) % 5

                : (slot + 4) % 5;

        const target = this.slots[nextSlot];

this.state.timeline.add(() => {

    this.applySlot(

        item,

        target,

        this.config.rotateDuration / 1000

    );

}, "<");





    }

    /*----------------------------------------
            SETTLE
    ----------------------------------------*/

    this.state.timeline.to(

        this.dock,

        {

            scale: 1,

            duration:
                this.config.settleDuration / 1000

        }

    );

}



/*==================================================
                UPDATE VISUAL STATE
==================================================*/

updateVisualState() {

    for (let slot = 0; slot < this.order.length; slot++) {

        const item = this.getItemBySlot(slot);

        item.classList.remove(

            "dock-center",

            "dock-near",

            "dock-far"

        );

        if (slot === 2) {

            item.classList.add("dock-center");

        }

        else if (slot === 1 || slot === 3) {

            item.classList.add("dock-near");

        }

        else {

            item.classList.add("dock-far");

        }

    }

}

    /*==================================================
                    SCHEDULER
    ==================================================*/

    startScheduler() {

        if (!this.features.scheduler) return;

        this.stopScheduler();

        const run = () => {

            if (this.state.paused) {

                this.state.timer = setTimeout(

                    run,

                    1000

                );

                return;

            }

            this.rotate();

            this.state.timer = setTimeout(

                run,

                this.config.idleTime

            );

        };

        this.state.timer = setTimeout(

            run,

            this.config.idleTime

        );

    }

    stopScheduler() {

        if (this.state.timer) {

            clearTimeout(

                this.state.timer

            );

            this.state.timer = null;

        }

    }

    /*==================================================
                    PAUSE
    ==================================================*/

pause() {

    this.state.paused = true;

    if (this.state.timeline) {

        this.state.timeline.pause();

    }

}

    

resume() {

    this.state.paused = false;

    if (this.state.timeline) {

        this.state.timeline.resume();

    }

}
    /*==================================================
                    DESTROY
    ==================================================*/

    destroy() {

        this.stopScheduler();

        this.dock.removeEventListener(

            "mouseenter",

            this.handleMouseEnter

        );

        this.dock.removeEventListener(

            "mouseleave",

            this.handleMouseLeave

        );

        if (

            this.state.timeline

        ) {

            this.state.timeline.kill();

            this.state.timeline = null;

        }

        this.state.initialized = false;

        if (this.config.debug) {

            console.log(

                "VisionDock destroyed."

            );

        }

    }

}

/*==================================================
                AUTO INITIALIZE
==================================================*/

window.addEventListener("load", () => {

    window.visionDock = new VisionDock();

});


/*==================================================
        MOBILE DOCK TOGGLE
==================================================*/

(function () {

    function initMobileDock() {

        const toggle = document.querySelector(".mobile-dock-toggle");
        const dock = document.querySelector(".vision-dock");

        if (!toggle || !dock) return;

        // Prevent duplicate listeners
        if (toggle.dataset.initialized) return;
        toggle.dataset.initialized = "true";

toggle.addEventListener("click", function () {

    const isOpen = dock.classList.contains("mobile-open");

gsap.to(toggle,{

    scaleX:isOpen ? 1 : 1.08,

    scaleY:isOpen ? 1 : 1.04,

    duration:.22,

    yoyo:true,

    repeat:1,

    ease:"power2.out"

});

    gsap.fromTo(

    toggle,

    {

        "--beam":"-130%"

    },

    {

        "--beam":"130%",

        duration:.5,

        ease:"power2.out"

    }

);

    gsap.to(toggle,{

        scale:isOpen ? 1 : 1.08,

        duration:.22,

        yoyo:true,

        repeat:1,

        ease:"power2.out"

    });

    setTimeout(()=>{

        dock.classList.toggle("mobile-open");

        toggle.classList.toggle("active");

    },180);

});

    }

    if (document.readyState === "loading") {

        document.addEventListener("DOMContentLoaded", initMobileDock);

    } else {

        initMobileDock();

    }

})();