/* =========================================================
   LENTRA MOMENTS — CONTENT CONFIGURATION
   Concept prototype — pending HR / brand approval
========================================================= */

(function () {
    "use strict";

    /* =========================
       WEBSITE CONFIGURATION
    ========================= */

    window.MOMENTS_CONFIG = {
        productName: "Lentra Moments",
        logoMode: "text-placeholder",
        logoPath: "",
        defaultTheme: "system",
        prototypeMode: true,
        homepageLimit: 8,
        archiveUrl: "memories.html",
        eventContactRoute: "",
        publicCompanyUrl: "https://lentra.ai/"
    };


    /* =========================
       HOMEPAGE MEMORY DATA
    ========================= */

    window.MOMENTS_DATA = [

        /* 01 — DUSSEHRA */
        {
            id: "moment-01",
            title: "Dussehra: Celebrating Goodness Together",
            category: "Celebrations",
            year: 2026,
            date: "19 October 2026",
            summary: "Celebrating Dussehra on 19 October 2026—a moment to embrace tradition, share festive joy, and create meaningful memories together.",
            visual: "festive",
            tag: "Dussehra Celebration",
            status: "Pending approval",
            image: "./assets/Pictures/Dussehra/Main.jpeg",
            alt: "Lentra colleagues gathered for a Dussehra celebration on 19 October 2026."
        },

        /* 02 — NAVARATRI */
        {
            id: "moment-02",
            title: "Navaratri: Nine Days of Celebration",
            category: "Celebrations",
            year: 2026,
            date: "",
            summary: "Celebrating the vibrant spirit of Navaratri through colourful traditions, festive outfits, and shared moments with colleagues. A celebration of culture, togetherness, and the joy of being part of one team.",
            visual: "festive",
            tag: "Navaratri Celebration",
            status: "Pending approval",
            image: "./assets/Pictures/navratriDays/main.jpeg",
            alt: "Lentra colleagues celebrating Navaratri together in colourful traditional outfits."
        },

        /* 03 — LENTRA ANNIVERSARY: 7 YEARS */
        {
            id: "moment-03",
            title: "7 Years of Lentra: A Journey of Innovation",
            category: "Celebrations",
            year: 2026,
            date: "",
            summary: "Celebrating 7 glorious years of Lentra! A milestone built on innovation, teamwork, and the dedication of the people who make the journey meaningful. Here's to the memories we've created, the progress we've made, and the exciting future ahead.",
            visual: "festive",
            tag: "7th Anniversary",
            status: "Pending approval",
            image: "./assets/Pictures/AnniversaryCeleb/Main.jpeg",
            alt: "Lentra colleagues celebrating the company's 7th anniversary together."
        },
    /* 04 — TWINNING */
      {
          id: "moment-04",
          title: "Twinning: Great Minds Dress Alike",
          category: "Team Moments",
          year: 2026,
          summary: "Two looks, one team spirit! A fun twinning moment celebrating the connections, laughter, and little things that bring colleagues closer together.",
          visual: "team",
          tag: "Twinning",
          status: "Pending approval",
          image: "./assets/Pictures/TwinDay4Sept/Main.jpeg",
          alt: "Colleagues taking part in a twinning day celebration."
      },

      /* 05 — BLOOD DONATION CAMP */
      {
          id: "moment-05",
          title: "Blood Donation Camp: Small Acts, Big Impact",
          category: "Wellbeing",
          year: 2026,
          summary: "A moment dedicated to care, compassion, and community. The blood donation camp reflects how small acts of kindness can make a meaningful difference in someone's life.",
          visual: "wellbeing",
          tag: "Blood Donation Camp",
          status: "Pending approval",
          image: "./assets/Pictures/Blood Donation/Main.jpeg",
          alt: "Colleagues participating in a blood donation camp."
      },

      /* 06 — REFRESH CHILDHOOD MEMORIES */
      {
          id: "moment-06",
          title: "Refresh Childhood Memories",
          category: "Team Moments",
          year: 2026,
          summary: "A playful throwback to childhood memories, bringing back smiles, nostalgia, and the joy of sharing lighter moments with colleagues.",
          visual: "festive",
          tag: "Childhood Memories",
          status: "Pending approval",
          image: "./assets/Pictures/ChildhoodDay/Sneha/Main.jpeg",
          alt: "Childhood-themed memory from the team celebration."
      },

       /* 07 — GANESH CHATURTHI */
        {
            id: "moment-07",
            title: "Ganesh Chaturthi: Moments of Togetherness",
            category: "Celebrations",
            year: 2026,
            summary: "Celebrating Ganesh Chaturthi with colourful decorations, festive traditions, and shared moments. A joyful occasion that brings colleagues together through culture, positivity, and community spirit.",
            visual: "festive",
            tag: "Ganesh Chaturthi",
            status: "Pending approval",
            image: "./assets/Pictures/GaneshChaturthi/Main.png",
            alt: "A collage of photographs from the Ganesh Chaturthi celebration."
        },

        /* 08 — TEAM ACHIEVEMENT */
        {
            id: "moment-08",
            title: "Team Achievement: Success Together",
            category: "Milestones",
            year: 2026,
            summary: "Celebrating the power of teamwork, shared dedication, and collective progress. Every achievement reflects the effort and collaboration of the people behind it.",
            visual: "team",
            tag: "Team Achievement",
            status: "Pending approval",
            image: "./assets/Pictures/TeamAchievement/Main.jpeg",
            alt: "Team members celebrating a shared achievement together."
        },

        /* 09 — WELLBEING */
        {
            id: "moment-09",
            title: "Pause, Reset, Reconnect",
            category: "Wellbeing",
            year: 2024,
            summary: "A sample wellbeing memory awaiting verified event details and approved photography.",
            visual: "pause",
            tag: "Sample memory",
            status: "Pending approval",
            image: null,
            alt: "Calm blue and yellow abstract shapes representing wellbeing."
        },

        /* 10 — MILESTONES */
        {
            id: "moment-10",
            title: "One Chapter, Many Contributors",
            category: "Milestones",
            year: 2024,
            summary: "A sample milestone story celebrating the contributions that make shared progress possible.",
            visual: "chapter",
            tag: "Sample memory",
            status: "Pending approval",
            image: null,
            alt: "Layered abstract panels representing a shared milestone."
        },

        /* 11 — CREATIVITY */
        {
            id: "moment-11",
            title: "Making Space for Creativity",
            category: "Team Moments",
            year: 2024,
            summary: "A placeholder for a creative activity or shared-interest event, subject to confirmation.",
            visual: "creative",
            tag: "Sample memory",
            status: "Pending approval",
            image: null,
            alt: "Geometric colour shapes representing creativity."
        },

        /* 12 — LEARNING */
        {
            id: "moment-12",
            title: "The Next Idea Starts Here",
            category: "Learning",
            year: 2024,
            summary: "A sample memory representing experimentation, curiosity, and the beginning of a new idea.",
            visual: "idea",
            tag: "Sample memory",
            status: "Pending approval",
            image: null,
            alt: "Abstract blue and red illustration representing a new idea."
        }

    ];


    /* =========================
       EDITORIAL QUOTES
    ========================= */

    window.MOMENTS_QUOTES = [
        "Progress is built together. Meaning is found in the moments we share.",
        "A good idea can move a team. A shared experience can bring it closer.",
        "Every milestone has many hands behind it—and many stories within it.",
        "Curiosity opens doors. Collaboration helps us walk through them."
    ];

})();