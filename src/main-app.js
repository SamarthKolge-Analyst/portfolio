  document.getElementById("contactForm").addEventListener("submit", function (e) {
    setTimeout(() => {
      const toast = document.getElementById("toast");
      toast.classList.remove("hidden");
      setTimeout(() => toast.classList.add("hidden"), 4000);
    }, 500);
  });



// ======================================
// AI Challenge Question Bank
// ======================================

const QUIZ_DATA = {

                    coding: [

                {
                    question: "Who created the Python programming language?",
                    options: [
                        "James Gosling",
                        "Guido van Rossum",
                        "Dennis Ritchie",
                        "Bjarne Stroustrup"
                    ],
                    answer: 1
                },

                {
                    question: "Which language is primarily used for web page styling?",
                    options: [
                        "Java",
                        "Python",
                        "CSS",
                        "C++"
                    ],
                    answer: 2
                },

                {
                    question: "Which language runs natively inside every modern web browser?",
                    options: [
                        "Java",
                        "Python",
                        "JavaScript",
                        "C#"
                    ],
                    answer: 2
                },

                {
                    question: "HTML stands for?",
                    options: [
                        "Hyper Text Markup Language",
                        "High Transfer Machine Language",
                        "Hyper Transfer Markup Language",
                        "Home Tool Markup Language"
                    ],
                    answer: 0
                },

                {
                    question: "Which company developed Java?",
                    options: [
                        "Microsoft",
                        "Oracle",
                        "Sun Microsystems",
                        "IBM"
                    ],
                    answer: 2
                },

                {
                    question: "Which symbol is used for single-line comments in JavaScript?",
                    options: [
                        "/* */",
                        "//",
                        "#",
                        "--"
                    ],
                    answer: 1
                },

                {
                    question: "Which data structure works on the LIFO principle?",
                    options: [
                        "Queue",
                        "Array",
                        "Stack",
                        "Linked List"
                    ],
                    answer: 2
                },

                {
                    question: "Which data structure works on the FIFO principle?",
                    options: [
                        "Stack",
                        "Queue",
                        "Tree",
                        "Graph"
                    ],
                    answer: 1
                },

                {
                    question: "Which Git command uploads local commits to GitHub?",
                    options: [
                        "git clone",
                        "git push",
                        "git pull",
                        "git fetch"
                    ],
                    answer: 1
                },

                {
                    question: "Which Git command downloads the latest changes from GitHub?",
                    options: [
                        "git push",
                        "git clone",
                        "git pull",
                        "git init"
                    ],
                    answer: 2
                },

                {
                    question: "Which HTTP method is generally used to create new data?",
                    options: [
                        "GET",
                        "POST",
                        "DELETE",
                        "PUT"
                    ],
                    answer: 1
                },

                {
                    question: "Which HTTP status code means 'Not Found'?",
                    options: [
                        "200",
                        "201",
                        "404",
                        "500"
                    ],
                    answer: 2
                },

                {
                    question: "What does API stand for?",
                    options: [
                        "Application Programming Interface",
                        "Advanced Program Integration",
                        "Application Process Internet",
                        "Applied Programming Internet"
                    ],
                    answer: 0
                },

                {
                    question: "Which programming paradigm is based on objects and classes?",
                    options: [
                        "Procedural",
                        "Functional",
                        "Object-Oriented",
                        "Logical"
                    ],
                    answer: 2
                },

                {
                    question: "Which keyword is used to create a constant in JavaScript?",
                    options: [
                        "let",
                        "const",
                        "var",
                        "static"
                    ],
                    answer: 1
                },

                {
                    question: "Which sorting algorithm has the best average-case complexity among these?",
                    options: [
                        "Bubble Sort",
                        "Selection Sort",
                        "Merge Sort",
                        "Insertion Sort"
                    ],
                    answer: 2
                },

                {
                    question: "Which search algorithm requires sorted data?",
                    options: [
                        "Linear Search",
                        "Binary Search",
                        "Depth First Search",
                        "Breadth First Search"
                    ],
                    answer: 1
                },

                {
                    question: "Which operator checks both value and type in JavaScript?",
                    options: [
                        "=",
                        "==",
                        "===",
                        "!="
                    ],
                    answer: 2
                },

                {
                    question: "Which keyword is used to define a function in Python?",
                    options: [
                        "func",
                        "function",
                        "define",
                        "def"
                    ],
                    answer: 3
                },

                {
                    question: "Which of these is NOT a programming language?",
                    options: [
                        "Python",
                        "Java",
                        "HTML",
                        "C++"
                    ],
                    answer: 2
                }

                ],

                    sql: [

                {
                    question: "Which SQL clause is used to filter rows before grouping?",
                    options: [
                        "HAVING",
                        "WHERE",
                        "ORDER BY",
                        "GROUP BY"
                    ],
                    answer: 1
                },

                {
                    question: "Which SQL keyword removes duplicate records?",
                    options: [
                        "UNIQUE",
                        "DISTINCT",
                        "DELETE",
                        "GROUP"
                    ],
                    answer: 1
                },

                {
                    question: "Which JOIN returns only matching records from both tables?",
                    options: [
                        "LEFT JOIN",
                        "RIGHT JOIN",
                        "INNER JOIN",
                        "FULL JOIN"
                    ],
                    answer: 2
                },

                {
                    question: "Which SQL function returns the total number of rows?",
                    options: [
                        "SUM()",
                        "COUNT()",
                        "TOTAL()",
                        "ROWS()"
                    ],
                    answer: 1
                },

                {
                    question: "Which clause is used to sort query results?",
                    options: [
                        "GROUP BY",
                        "ORDER BY",
                        "HAVING",
                        "SORT BY"
                    ],
                    answer: 1
                },

                {
                    question: "Which clause filters grouped records?",
                    options: [
                        "WHERE",
                        "HAVING",
                        "ORDER BY",
                        "LIMIT"
                    ],
                    answer: 1
                },

                {
                    question: "Which command permanently removes a table and its data?",
                    options: [
                        "DELETE",
                        "TRUNCATE",
                        "DROP",
                        "REMOVE"
                    ],
                    answer: 2
                },

                {
                    question: "Which command removes all rows but keeps the table structure?",
                    options: [
                        "DELETE",
                        "DROP",
                        "TRUNCATE",
                        "REMOVE"
                    ],
                    answer: 2
                },

                {
                    question: "Which SQL constraint uniquely identifies each row?",
                    options: [
                        "FOREIGN KEY",
                        "UNIQUE",
                        "PRIMARY KEY",
                        "INDEX"
                    ],
                    answer: 2
                },

                {
                    question: "A FOREIGN KEY is mainly used to:",
                    options: [
                        "Sort records",
                        "Create indexes",
                        "Link two tables",
                        "Delete duplicates"
                    ],
                    answer: 2
                },

                {
                    question: "Which operator checks for missing values?",
                    options: [
                        "= NULL",
                        "== NULL",
                        "IS NULL",
                        "NULL ="
                    ],
                    answer: 2
                },

                {
                    question: "Which aggregate function calculates the average?",
                    options: [
                        "SUM()",
                        "COUNT()",
                        "AVG()",
                        "MEAN()"
                    ],
                    answer: 2
                },

                {
                    question: "Which SQL statement adds new records?",
                    options: [
                        "UPDATE",
                        "INSERT INTO",
                        "ALTER",
                        "CREATE"
                    ],
                    answer: 1
                },

                {
                    question: "Which statement modifies existing records?",
                    options: [
                        "UPDATE",
                        "ALTER",
                        "INSERT",
                        "MODIFY"
                    ],
                    answer: 0
                },

                {
                    question: "Which wildcard represents multiple characters in LIKE?",
                    options: [
                        "_",
                        "*",
                        "%",
                        "#"
                    ],
                    answer: 2
                },

                {
                    question: "Which wildcard represents exactly one character?",
                    options: [
                        "%",
                        "*",
                        "_",
                        "?"
                    ],
                    answer: 2
                },

                {
                    question: "Which SQL keyword limits the number of returned rows in MySQL?",
                    options: [
                        "TOP",
                        "LIMIT",
                        "FIRST",
                        "ROWNUM"
                    ],
                    answer: 1
                },

                {
                    question: "Which normal form removes partial dependency?",
                    options: [
                        "1NF",
                        "2NF",
                        "3NF",
                        "BCNF"
                    ],
                    answer: 1
                },

                {
                    question: "Which window function assigns unique ranks without gaps?",
                    options: [
                        "RANK()",
                        "ROW_NUMBER()",
                        "DENSE_RANK()",
                        "COUNT()"
                    ],
                    answer: 1
                },

                {
                    question: "Which SQL object stores a saved SELECT query?",
                    options: [
                        "Procedure",
                        "Trigger",
                        "View",
                        "Function"
                    ],
                    answer: 2
                }

                ],
                    python: [

                {
                    question: "Python is a ____ language.",
                    options: [
                        "Compiled",
                        "Interpreted",
                        "Assembly",
                        "Machine"
                    ],
                    answer: 1
                },

                {
                    question: "Which keyword is used to define a function in Python?",
                    options: [
                        "function",
                        "define",
                        "def",
                        "func"
                    ],
                    answer: 2
                },

                {
                    question: "Which data type is immutable?",
                    options: [
                        "List",
                        "Dictionary",
                        "Tuple",
                        "Set"
                    ],
                    answer: 2
                },

                {
                    question: "Which symbol is used for comments in Python?",
                    options: [
                        "//",
                        "#",
                        "/*",
                        "--"
                    ],
                    answer: 1
                },

                {
                    question: "Which function prints output to the console?",
                    options: [
                        "display()",
                        "echo()",
                        "print()",
                        "write()"
                    ],
                    answer: 2
                },

                {
                    question: "Which keyword is used to create a class?",
                    options: [
                        "object",
                        "class",
                        "Class",
                        "new"
                    ],
                    answer: 1
                },

                {
                    question: "Which operator is used for exponentiation?",
                    options: [
                        "^",
                        "**",
                        "//",
                        "%"
                    ],
                    answer: 1
                },

                {
                    question: "Which keyword exits a loop immediately?",
                    options: [
                        "continue",
                        "break",
                        "exit",
                        "stop"
                    ],
                    answer: 1
                },

                {
                    question: "Which statement skips the current iteration of a loop?",
                    options: [
                        "break",
                        "pass",
                        "continue",
                        "return"
                    ],
                    answer: 2
                },

                {
                    question: "Which collection stores key-value pairs?",
                    options: [
                        "Tuple",
                        "List",
                        "Dictionary",
                        "Set"
                    ],
                    answer: 2
                },

                {
                    question: "Which library is mainly used for data analysis?",
                    options: [
                        "NumPy",
                        "Pandas",
                        "TensorFlow",
                        "Flask"
                    ],
                    answer: 1
                },

                {
                    question: "Which library is mainly used for numerical computing?",
                    options: [
                        "Pandas",
                        "NumPy",
                        "Matplotlib",
                        "Requests"
                    ],
                    answer: 1
                },

                {
                    question: "Which Pandas object represents a table?",
                    options: [
                        "Series",
                        "Array",
                        "DataFrame",
                        "Matrix"
                    ],
                    answer: 2
                },

                {
                    question: "Which keyword is used for exception handling?",
                    options: [
                        "catch",
                        "error",
                        "try",
                        "check"
                    ],
                    answer: 2
                },

                {
                    question: "Which block executes if no exception occurs?",
                    options: [
                        "finally",
                        "except",
                        "else",
                        "raise"
                    ],
                    answer: 2
                },

                {
                    question: "Which function returns the number of items in a list?",
                    options: [
                        "count()",
                        "size()",
                        "length()",
                        "len()"
                    ],
                    answer: 3
                },

                {
                    question: "Which method adds an item to the end of a list?",
                    options: [
                        "insert()",
                        "append()",
                        "add()",
                        "push()"
                    ],
                    answer: 1
                },

                {
                    question: "What does 'iloc' in Pandas use?",
                    options: [
                        "Column Names",
                        "Labels",
                        "Integer Positions",
                        "Indexes Only"
                    ],
                    answer: 2
                },

                {
                    question: "Which keyword creates an anonymous function?",
                    options: [
                        "func",
                        "lambda",
                        "anonymous",
                        "inline"
                    ],
                    answer: 1
                },

                {
                    question: "Which keyword is used to import a module?",
                    options: [
                        "include",
                        "using",
                        "import",
                        "require"
                    ],
                    answer: 2
                }

                ],

                    gk: [

                {
                    question: "Which planet is known as the Red Planet?",
                    options: [
                        "Venus",
                        "Mars",
                        "Jupiter",
                        "Mercury"
                    ],
                    answer: 1
                },

                {
                    question: "Which is the largest ocean on Earth?",
                    options: [
                        "Atlantic Ocean",
                        "Indian Ocean",
                        "Pacific Ocean",
                        "Arctic Ocean"
                    ],
                    answer: 2
                },

                {
                    question: "Who is known as the Father of the Indian Constitution?",
                    options: [
                        "Jawaharlal Nehru",
                        "Sardar Patel",
                        "Dr. B. R. Ambedkar",
                        "Mahatma Gandhi"
                    ],
                    answer: 2
                },

                {
                    question: "Which country has the largest population in the world (2025)?",
                    options: [
                        "India",
                        "China",
                        "United States",
                        "Indonesia"
                    ],
                    answer: 0
                },

                {
                    question: "What is the capital city of Australia?",
                    options: [
                        "Sydney",
                        "Melbourne",
                        "Canberra",
                        "Perth"
                    ],
                    answer: 2
                },

                {
                    question: "Who invented the World Wide Web?",
                    options: [
                        "Bill Gates",
                        "Tim Berners-Lee",
                        "Steve Jobs",
                        "Larry Page"
                    ],
                    answer: 1
                },

                {
                    question: "Which gas do plants absorb from the atmosphere?",
                    options: [
                        "Oxygen",
                        "Hydrogen",
                        "Carbon Dioxide",
                        "Nitrogen"
                    ],
                    answer: 2
                },

                {
                    question: "Which is the tallest mountain in the world above sea level?",
                    options: [
                        "Mount Kilimanjaro",
                        "K2",
                        "Mount Everest",
                        "Kangchenjunga"
                    ],
                    answer: 2
                },

                {
                    question: "How many players are there in a football (soccer) team on the field?",
                    options: [
                        "9",
                        "10",
                        "11",
                        "12"
                    ],
                    answer: 2
                },

                {
                    question: "Which is the smallest continent?",
                    options: [
                        "Europe",
                        "Australia",
                        "Antarctica",
                        "South America"
                    ],
                    answer: 1
                },

                {
                    question: "What is the chemical symbol for Gold?",
                    options: [
                        "Ag",
                        "Au",
                        "Gd",
                        "Go"
                    ],
                    answer: 1
                },

                {
                    question: "Who was the first person to walk on the Moon?",
                    options: [
                        "Buzz Aldrin",
                        "Neil Armstrong",
                        "Yuri Gagarin",
                        "Michael Collins"
                    ],
                    answer: 1
                },

                {
                    question: "Which country gifted the Statue of Liberty to the USA?",
                    options: [
                        "France",
                        "Germany",
                        "Italy",
                        "Canada"
                    ],
                    answer: 0
                },

                {
                    question: "Which river is the longest in the world?",
                    options: [
                        "Amazon",
                        "Yangtze",
                        "Mississippi",
                        "Nile"
                    ],
                    answer: 3
                },

                {
                    question: "Which Indian city is known as the Silicon Valley of India?",
                    options: [
                        "Hyderabad",
                        "Pune",
                        "Bengaluru",
                        "Chennai"
                    ],
                    answer: 2
                },

                {
                    question: "Which is the fastest land animal?",
                    options: [
                        "Lion",
                        "Horse",
                        "Cheetah",
                        "Leopard"
                    ],
                    answer: 2
                },

                {
                    question: "How many colors are there in a rainbow?",
                    options: [
                        "5",
                        "6",
                        "7",
                        "8"
                    ],
                    answer: 2
                },

                {
                    question: "Which is the national bird of India?",
                    options: [
                        "Peacock",
                        "Parrot",
                        "Swan",
                        "Eagle"
                    ],
                    answer: 0
                },

                {
                    question: "Which company developed the Android operating system?",
                    options: [
                        "Apple",
                        "Microsoft",
                        "Google",
                        "Samsung"
                    ],
                    answer: 2 
                },

                {
                    question: "Which is the largest desert in the world?",
                    options: [
                        "Sahara Desert",
                        "Arabian Desert",
                        "Antarctic Polar Desert",
                        "Gobi Desert"
                    ],
                    answer: 2
                }

                ],

                    tmkoc: [

                {
                    question: "What is the name of Jethalal's electronics shop?",
                    options: [
                        "Gada Electronics",
                        "Gada Mobiles",
                        "Gada Mart",
                        "Gada Digital"
                    ],
                    answer: 0
                },

                {
                    question: "Who is Jethalal's wife?",
                    options: [
                        "Madhavi",
                        "Babita",
                        "Daya",
                        "Komal"
                    ],
                    answer: 2
                },

                {
                    question: "What is the name of Jethalal's son?",
                    options: [
                        "Pinku",
                        "Tapu",
                        "Gogi",
                        "Sonu"
                    ],
                    answer: 1
                },

                {
                    question: "Who is the secretary of Gokuldham Society?",
                    options: [
                        "Bhide",
                        "Popatlal",
                        "Jethalal",
                        "Dr. Hathi"
                    ],
                    answer: 0
                },

                {
                    question: "What is Popatlal's profession?",
                    options: [
                        "Doctor",
                        "Teacher",
                        "Journalist",
                        "Lawyer"
                    ],
                    answer: 2
                },

                {
                    question: "Which newspaper does Popatlal work for?",
                    options: [
                        "Toofan Express",
                        "Mumbai Mirror",
                        "Times Today",
                        "Janadesh"
                    ],
                    answer: 0
                },

                {
                    question: "What is the full name of Champaklal?",
                    options: [
                        "Champaklal Jayantilal Gada",
                        "Champaklal Gada",
                        "Champaklal Jethalal Gada",
                        "Champaklal Keshavlal Gada"
                    ],
                    answer: 0
                },

                {
                    question: "Who is known for saying 'Hey Maa, Mataji'?",
                    options: [
                        "Dr. Hathi",
                        "Jethalal",
                        "Bagha",
                        "Daya"
                    ],
                    answer: 3
                },

                {
                    question: "What is Babita Ji's husband's name?",
                    options: [
                        "Dr. Hathi",
                        "Iyer",
                        "Jethaji",
                        "Abdul"
                    ],
                    answer: 1
                },

                {
                    question: "Which state does Iyer belong to?",
                    options: [
                        "Kerala",
                        "Tamil Nadu",
                        "Karnataka",
                        "Andhra Pradesh"
                    ],
                    answer: 1
                },

                {
                    question: "What is Madhavi Bhide famous for making?",
                    options: [
                        "Pickles",
                        "Papad and Pickles",
                        "Sweets",
                        "Chocolates"
                    ],
                    answer: 1
                },

                {
                    question: "What is Dr. Hathi's profession?",
                    options: [
                        "Dentist",
                        "Physician",
                        "Veterinarian",
                        "Surgeon"
                    ],
                    answer: 1
                },

                {
                    question: "Who owns the soda shop near Gokuldham Society?",
                    options: [
                        "Bagha",
                        "Abdul",
                        "Nattu Kaka",
                        "Magan"
                    ],
                    answer: 1
                },

                {
                    question: "What is Bagha's relationship with Nattu Kaka?",
                    options: [
                        "Friend",
                        "Brother",
                        "Nephew",
                        "Son"
                    ],
                    answer: 2
                },

                {
                    question: "Which festival is celebrated grandly every year in Gokuldham Society?",
                    options: [
                        "Only Diwali",
                        "Only Holi",
                        "Ganesh Chaturthi",
                        "All major festivals"
                    ],
                    answer: 3
                },

                {
                    question: "Who is known as the 'Ekmev Secretary' of Gokuldham Society?",
                    options: [
                        "Popatlal",
                        "Bhide",
                        "Jethalal",
                        "Iyer"
                    ],
                    answer: 1
                },

                {
                    question: "What is Tapu Sena mainly known for?",
                    options: [
                        "Playing Cricket",
                        "Helping Society and Having Fun",
                        "Running Businesses",
                        "Teaching Tuition"
                    ],
                    answer: 1
                },

                {
                    question: "Which character is famous for remaining unmarried for years?",
                    options: [
                        "Bagha",
                        "Popatlal",
                        "Jethalal",
                        "Iyer"
                    ],
                    answer: 1
                },

                {
                    question: "Where does most of the society's important meetings take place?",
                    options: [
                        "Club House",
                        "Temple",
                        "Garden",
                        "Terrace"
                    ],
                    answer: 0
                },

                {
                    question: "What is the name of the society where everyone lives?",
                    options: [
                        "Happy Society",
                        "Mumbai Residency",
                        "Gokuldham Society",
                        "Shanti Society"
                    ],
                    answer: 2
                }

                ],

};



let quizCategory = "";
let quizQuestions = [];
let currentQuestion = 0;
let score = 0;





  const form = document.getElementById('contactForm');
  const success = document.getElementById('successMessage');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Check if reCAPTCHA is complete
    const token = grecaptcha.getResponse();
    if (!token) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const formData = new FormData(form);
    formData.append("g-recaptcha-response", token); // ensure it's submitted

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        grecaptcha.reset();
        success.classList.remove('hidden');

        document.getElementById("sendSound").play().catch(err => console.warn("Audio play blocked:", err));

        // ✅ Keep only ONE scroll into view
        window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'auto' });

        // ⏱️ Keep message for 6 seconds, no second scroll
        setTimeout(() => {
          success.classList.add('hidden');
        }, 5000);
      } else {
        alert("❌ There was an error submitting the form.");
      }
    } catch (error) {
      alert("❌ An error occurred. Please try again.");
    }
  });








const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const chatClose = document.getElementById("chatClose");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

const BOT_MOVE_DURATION = 500; // Must match transition duration (duration-500)
let isOpening = false;
chatToggle.addEventListener("transitionend", (e) => {

    if (e.target !== chatToggle) return;

    if (e.propertyName !== "bottom") return;

    if (!isOpening) return;

    chatToggle.classList.add("open");

    isOpening = false;

});


/* ==========================
   Activity Manager
========================== */

let inactivityTimer = null;

let hasAutoOpened = false;

let isHoveringChat = false;

let isTyping = false;

const AUTO_OPEN_DELAY = 5000;      // 5 seconds

const INACTIVITY_DELAY = 25000;    // 25 seconds





function showWelcomeMessage() {

    const hour = new Date().getHours();

    let greeting = "";
    let subtitle = "";

    if (hour >= 5 && hour < 12) {
        greeting = "🌞 Good Morning!";
        subtitle = "Hope you're having a productive day.";
    }
    else if (hour >= 12 && hour < 17) {
        greeting = "☀️ Good Afternoon!";
        subtitle = "Thanks for visiting my portfolio.";
    }
    else if (hour >= 17 && hour < 22) {
        greeting = "🌆 Good Evening!";
        subtitle = "Hope you're having a wonderful evening.";
    }
    else {
        greeting = "🌙 Good Night!";
        subtitle = "Thanks for stopping by. I'm here if you'd like to know more about me.";
    }

    addMessage(`
        <strong>${greeting}</strong><br><br>

        ${subtitle}<br><br>

    `);

}




window.addEventListener("load", () => {

    setTimeout(() => {

        if (!hasAutoOpened) {

            hasAutoOpened = true;

            openChat();

            showWelcomeMessage();

        }

    }, AUTO_OPEN_DELAY);

});





window.addEventListener("scroll", () => {

    if (!chatWindow.classList.contains("hidden")) {

        closeChat();

    }

});





function showStandingBot() {

    document.getElementById("botStanding").style.opacity = "1";
    document.getElementById("botSitting").style.opacity = "0";

}

function showSittingBot() {

    document.getElementById("botStanding").style.opacity = "0";
    document.getElementById("botSitting").style.opacity = "1";

}



function openChat() {

    chatWindow.classList.remove("hidden");
    chatWindow.classList.add("active");

    // Keep standing bot initially
    showStandingBot();

    // Move upward
    chatToggle.style.bottom = "800px";

    // After movement completes, change to sitting
    setTimeout(() => {
        showSittingBot();
    }, 550);

    const dot = document.getElementById("botStatusDot");

    if (dot) {
        dot.style.opacity = "0";
        dot.style.transform = "scale(0)";
    }

    resetInactivityTimer();
}

function closeChat() {

    chatWindow.classList.add("hidden");
    chatWindow.classList.remove("active");

    // First become standing
    showStandingBot();

    // Then move down
    chatToggle.style.bottom = "16px";

    const dot = document.getElementById("botStatusDot");

    if (dot) {
        dot.style.opacity = "1";
        dot.style.transform = "scale(1)";
    }

    clearTimeout(inactivityTimer);
}




function resetInactivityTimer() {

    clearTimeout(inactivityTimer);

    if (isHoveringChat) return;

    if (isTyping) return;

    inactivityTimer = setTimeout(() => {

        closeChat();

    }, INACTIVITY_DELAY);

}
chatToggle.addEventListener("click", () => {

  console.log("Chat button clicked");

    if (chatWindow.classList.contains("hidden")) {

        openChat();

    } else {

        closeChat();

    }

});

chatClose.addEventListener("click", closeChat);

chatInput.addEventListener("focus", () => {

    isTyping = true;

    clearTimeout(inactivityTimer);

});

chatInput.addEventListener("blur", () => {

    isTyping = false;

    resetInactivityTimer();

});

chatInput.addEventListener("input", () => {

    isTyping = true;

    clearTimeout(inactivityTimer);

});

chatInput.addEventListener("blur", () => {

    isTyping = false;

    resetInactivityTimer();

});

chatWindow.addEventListener("click", resetInactivityTimer);


chatMessages.addEventListener("scroll", resetInactivityTimer);


chatWindow.addEventListener("mouseenter", () => {

    isHoveringChat = true;

    clearTimeout(inactivityTimer);

});

chatWindow.addEventListener("mousemove", () => {

    isHoveringChat = true;

    clearTimeout(inactivityTimer);

});

chatWindow.addEventListener("mouseleave", () => {

    isHoveringChat = false;

    resetInactivityTimer();

});


function getTimeStamp() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ✅ Smart read-time fallback (in case speech synthesis not supported)
function estimateReadTime(text) {
  const words = text.split(' ').length;
  return Math.max(9000, words * 400); // 400ms per word, min 9s
}


let currentSpeech = null;
let currentSpeakButton = null;

function speak(text, button) {

    if (!("speechSynthesis" in window)) return;

    // Stop current speech
    if (speechSynthesis.speaking) {

        speechSynthesis.cancel();

        if (currentSpeakButton) {

            currentSpeakButton.innerHTML = "🔊";

            currentSpeakButton.classList.remove("speaking");

        }

        // If clicking the same button, just stop
        if (currentSpeakButton === button) {

            currentSpeakButton = null;

            return;

        }

    }

    const msg = new SpeechSynthesisUtterance(text);

    msg.rate = 1;
    msg.pitch = 1;
    msg.volume = 1;

    currentSpeech = msg;
    currentSpeakButton = button;

    button.innerHTML = "⏸";
    button.classList.add("speaking");

    msg.onstart = () => {

        clearTimeout(inactivityTimer);

    };

    msg.onend = () => {

        button.innerHTML = "🔊";

        button.classList.remove("speaking");

        currentSpeakButton = null;

        resetInactivityTimer();

    };

    speechSynthesis.speak(msg);

}







function addMessage(content, type = "bot") {

    const wrapper = document.createElement("div");

    wrapper.className =
        type === "bot"
            ? "chat-row bot-row"
            : "chat-row user-row";

    // Avatar
    const avatar = document.createElement("div");
    avatar.className = "chat-avatar";

    if(type === "bot"){

        avatar.innerHTML = `
        <img src="assets/Logos/Bot_Photo3.png"
             alt="AI"
             class="avatar-img">
        `;

    }else{

        avatar.innerHTML = `
        <div class="user-avatar">
              <img src="assets/Logos/user.png"
             alt="AI"
             class="avatar-img">
        </div>
        `;

    }

    // Bubble
    const bubble = document.createElement("div");
    bubble.className =
        type === "bot"
            ? "chat-bubble bot-bubble"
            : "chat-bubble user-bubble";

   bubble.innerHTML = `
<div class="chat-content">
    ${content}
</div>

<div class="chat-footer">

    <span class="chat-time">
        ${getTimeStamp()}
    </span>

    ${
    type==="bot"
    ?
    `

    <button class="like-btn" title="Like">
        ❤️
    </button>

    <button class="speak-btn" title="Listen">
        🔊
    </button>

    <button class="copy-btn" title="Copy">
        📋
    </button>
    `
    :
    ""
    }

</div>
`;

    if(type==="bot"){

        wrapper.appendChild(avatar);
        wrapper.appendChild(bubble);

    }else{

        wrapper.appendChild(bubble);
        wrapper.appendChild(avatar);

    }

   chatMessages.appendChild(wrapper);

requestAnimationFrame(() => {
    wrapper.classList.add("show");
});

if (type === "bot") {

    chatMessages.scrollTo({
        top: wrapper.offsetTop - 15,
        behavior: "smooth"
    });

} else {

    chatMessages.scrollTop = chatMessages.scrollHeight;

}

    // Copy functionality
    bubble.querySelectorAll(".copy-btn").forEach(btn=>{

      // Speak functionality
     bubble.querySelectorAll(".speak-btn").forEach(btn=>{

          btn.onclick = ()=>{

              const text =
                  bubble.querySelector(".chat-content").innerText;

              speak(text, btn);

          };

      });
              btn.onclick=()=>{

            navigator.clipboard.writeText(
                bubble.querySelector(".chat-content").innerText
            );

            btn.innerHTML="✅";

            setTimeout(()=>{

                btn.innerHTML="📋";

            },1200);

        }

    });

// Voice will now be played only when the user clicks 🔊
// if(type==="bot"){
//     speak(
//         bubble.querySelector(".chat-content").innerText
//     );
// }



bubble.querySelector(".challenge-cancel")?.addEventListener("click", () => {

    const card = bubble.querySelector(".challenge-card");

    if (card) {

        card.innerHTML = `

            <div class="challenge-title">
                😊 Challenge Cancelled
            </div>

            <p class="challenge-text">

                No worries!

                <br><br>

                Come back anytime and challenge my AI again. 🚀

            </p>

            <div class="challenge-actions">

                <button
                    class="challenge-chip challenge-start">

                    🔄 Play Again

                </button>

            </div>

        `;

        // Play Again
        card.querySelector(".challenge-start").onclick = () => {

            showCategorySelection(card);

        };

    }

});



// ===========================
// Challenge Buttons
// ===========================

bubble.querySelector(".challenge-start")?.addEventListener("click", () => {

    const card = bubble.querySelector(".challenge-card");

    // Replace challenge card with category selection
    card.innerHTML = `

        <div class="challenge-title">
            ⚔️ Choose Your Battlefield
        </div>

        <p class="challenge-text">
            Select a category.<br><br>
            I'll randomly pick <strong>3 questions</strong>.
        </p>

        <div class="category-grid">

            <button class="quiz-category" data-category="coding">
                💻 Coding
            </button>

            <button class="quiz-category" data-category="sql">
                🗄 SQL
            </button>

            <button class="quiz-category" data-category="python">
                🐍 Python
            </button>

            <button class="quiz-category" data-category="tmkoc">
                📺 TMKOC
            </button>

            <button class="quiz-category" data-category="gk">
                🌍 General Knowledge
            </button>

            <button class="quiz-category" data-category="random">
                🎲 Surprise Me
            </button>

        </div>

        <div class="challenge-actions">

            <button class="challenge-chip challenge-cancel">
                ❌ Give Up
            </button>

        </div>

    `;


          card.addEventListener("click", function handleCategoryClick(e) {

              const btn = e.target.closest(".quiz-category");

              if (!btn) return;

              card.removeEventListener("click", handleCategoryClick);

              quizCategory = btn.dataset.category;

              startQuiz(card, quizCategory);

          });

    // ===========================
    // Give Up Button
    // ===========================

    card.querySelector(".challenge-cancel")?.addEventListener("click", () => {

        addMessage("😂 Haha... maybe next time!", "bot");

    });

});


}



function showCategorySelection(card) {

    card.innerHTML = `

        <div class="challenge-title">
            ⚔️ Choose Your Battlefield
        </div>

        <p class="challenge-text">
            Select a category.<br><br>
            I'll randomly pick <strong>3 questions</strong>.
        </p>

        <div class="category-grid">

            <button class="quiz-category" data-category="coding">
                💻 Coding
            </button>

            <button class="quiz-category" data-category="sql">
                🗄 SQL
            </button>

            <button class="quiz-category" data-category="python">
                🐍 Python
            </button>

            <button class="quiz-category" data-category="tmkoc">
                📺 TMKOC
            </button>

            <button class="quiz-category" data-category="gk">
                🌍 General Knowledge
            </button>

            <button class="quiz-category" data-category="random">
                🎲 Surprise Me
            </button>

        </div>

        <div class="challenge-actions">

            <button class="challenge-chip challenge-cancel">
                ❌ Give Up
            </button>

        </div>

    `;

    // Category click
    card.addEventListener("click", function handleCategoryClick(e) {

        const btn = e.target.closest(".quiz-category");

        if (!btn) return;

        card.removeEventListener("click", handleCategoryClick);

        startQuiz(card, btn.dataset.category);

    });

    // Give Up
    card.querySelector(".challenge-cancel").onclick = () => {

        card.innerHTML = `
            <div class="challenge-title">
                😊 Challenge Cancelled
            </div>

            <p class="challenge-text">
                Come back anytime!
            </p>
        `;

    };

}



function startQuiz(card, category) {

    // Surprise Me
    if (category === "random") {

        const categories = ["coding", "sql", "python", "gk", "tmkoc"];

        category = categories[Math.floor(Math.random() * categories.length)];

    }

    quizCategory = category;

    score = 0;

    currentQuestion = 0;

    quizQuestions = [...QUIZ_DATA[category]];

    quizQuestions.sort(() => Math.random() - 0.5);

    quizQuestions = quizQuestions.slice(0, 3);

    renderQuestion(card);

}

function renderQuestion(card) {

    const q = quizQuestions[currentQuestion];

    card.innerHTML = `

        <div class="challenge-title">
            Question ${currentQuestion + 1} / ${quizQuestions.length}
        </div>

        <p class="challenge-text">
            ${q.question}
        </p>

        <div class="category-grid">

            ${q.options.map((option, index) => `

                <button
                    class="quiz-option"
                    data-index="${index}">

                    ${option}

                </button>

            `).join("")}

        </div>

        <div class="quiz-feedback"></div>

        <div class="challenge-actions">

            <button
                class="challenge-chip challenge-cancel">

                ❌ Give Up

            </button>

        </div>

    `;

    // Quiz option click
    card.querySelectorAll(".quiz-option").forEach(btn => {

        btn.onclick = () => {

            checkAnswer(card, Number(btn.dataset.index));

        };

    });

    // Give Up click
      card.querySelector(".challenge-cancel").onclick = () => {

          card.innerHTML = `

              <div class="challenge-title">
                  👋 Challenge Closed
              </div>

              <p class="challenge-text">

                  Thanks for playing!

                  <br><br>

                  Come back anytime. 🚀

              </p>

          `;

};

}




function checkAnswer(card, selected) {

    const q = quizQuestions[currentQuestion];

    const buttons = card.querySelectorAll(".quiz-option");

    const feedback = card.querySelector(".quiz-feedback");

    // Prevent multiple clicks
    buttons.forEach(btn => {

        btn.disabled = true;

    });

    // Correct Answer
    if (selected === q.answer) {

        score++;

        buttons[selected].classList.add("correct-answer");

        feedback.innerHTML = `
            <div class="feedback-correct">
                ✅ Correct! Great Job.
            </div>
        `;

    }

    // Wrong Answer
    else {

        buttons[selected].classList.add("wrong-answer");

        buttons[q.answer].classList.add("correct-answer");

        feedback.innerHTML = `
            <div class="feedback-wrong">
                ❌ Wrong! Correct answer highlighted.
            </div>
        `;

    }

    // Wait before next question
    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion >= quizQuestions.length) {

            finishQuiz(card);

            return;

        }

        renderQuestion(card);

    }, 1200);

}

function finishQuiz(card) {

    card.innerHTML = `

        <div class="challenge-title">
            🎉 Challenge Complete
        </div>

        <p class="challenge-text">

            Your Score

            <br><br>

            <strong>${score} / ${quizQuestions.length}</strong>

        </p>

        <div class="challenge-actions">

            <button
                class="challenge-chip challenge-start">

                🔄 Play Again

            </button>

            <button
                class="challenge-chip challenge-cancel">

                ❌ Close

            </button>

        </div>

    `;

    // =========================
    // Play Again
    // =========================
card.querySelector(".challenge-start").addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    showCategorySelection(card);

});

    // =========================
    // Close
    // =========================

card.querySelector(".challenge-cancel").addEventListener("click", () => {

    card.innerHTML = `

        <div class="challenge-title">
            👋 Challenge Closed
        </div>

        <p class="challenge-text">

            Thanks for playing!

            <br><br>

            Come back anytime to challenge me again. 🚀

        </p>

        <div class="challenge-actions">

            <button
                class="challenge-chip challenge-start">

                🎮 Start Again

            </button>

        </div>

    `;

    // Start Again
    card.querySelector(".challenge-start").addEventListener("click", () => {

        showCategorySelection(card);

    });

});

}










function getPremiumReply(message){

    const msg = message.toLowerCase();

    // Resume
    if(
        msg.includes("resume") ||
        msg.includes("cv") ||
        msg.includes("download resume")
    ){

        return `
        <div class="ai-card">

            <div class="ai-card-title">
                📄 Resume
            </div>

            <p>
                Product Engineer with experience in Digital Lending,
                SQL, Business Analysis, Data Analytics and Product Development.
            </p>

            <div class="ai-tags">
                <span>SQL</span>
                <span>Python</span>
                <span>Power BI</span>
                <span>Tableau</span>
            </div>

            <a
                href="https://drive.google.com/file/d/1F8wEmkhaN6Dz8y9IfEI4lo9ab7vCSZbA/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                class="ai-btn">

                📄 View Resume

            </a>

        </div>
        `;

    }

    // ===========================
    // Experience
    // ===========================

    if(
        msg.includes("experience") ||
        msg.includes("work") ||
        msg.includes("lentra")
    ){

        return `
        <div class="ai-card">

        <div class="ai-card-title">
        💼 Experience
        </div>

        <div class="timeline">

            <div class="timeline-item">

                <strong>Product Engineer</strong>

                <div>Lentra.ai</div>

                <small>Jun 2025 - Present</small>

            </div>

            <div class="timeline-item">

                <strong>Data Analyst Intern</strong>

                <div>Borgward Technology India Pvt Ltd</div>

                <small>Jun 2023 - Aug 2024</small>

            </div>

        </div>

        </div>
        `;

    }

    // ===========================
    // Skills
    // ===========================

    if(
        msg.includes("skill") ||
        msg.includes("technology") ||
        msg.includes("tools")
    ){

        return `
        <div class="ai-card">

        <div class="ai-card-title">

        🛠 Technical Skills

        </div>

        <div class="ai-tags">

            <span>SQL</span>

            <span>Python</span>

            <span>JavaScript</span>

            <span>Power BI</span>

            <span>Tableau</span>

            <span>Excel</span>

            <span>MySQL</span>

            <span>BigQuery</span>

            <span>Git</span>

            <span>Jira</span>

            <span>Swagger</span>

            <span>Postman</span>

        </div>

        </div>
        `;

    }

    // Nothing matched
    // ===========================
// Banking Domain
// ===========================

if (
    msg.includes("bank") ||
    msg.includes("banking") ||
    msg.includes("loan") ||
    msg.includes("lending") ||
    msg.includes("domain")
) {

    return `
    <div class="ai-card">

        <div class="ai-card-title">
            🏦 Banking Domain Expertise
        </div>

        <p class="mb-3">
            Hands-on experience delivering Digital Lending solutions
            for leading banking clients.
        </p>

        <div class="ai-tags">

            <span>Digital Lending</span>

            <span>GoFlow</span>

            <span>SQL Validation</span>

            <span>UAT</span>

            <span>BRD</span>

            <span>FRD</span>

            <span>Jira</span>

            <span>Swagger</span>

            <span>Postman</span>

            <span>Requirement Gathering</span>

            <span>Agile</span>

            <span>Production Support</span>

        </div>

        <hr class="my-4 border-white/10">

        <small>
            Worked with banking clients including
            <b>HDFC Bank</b>,
            <b>IndusInd Bank</b>,
            <b>Bandhan Bank</b>,
            and
            <b>CBIO</b>.
        </small>

    </div>
    `;

}

// ===========================
// Projects
// ===========================

if (
    msg.includes("project") ||
    msg.includes("portfolio") ||
    msg.includes("github")
) {

return `
<div class="ai-card">

<div class="ai-card-title">
📊 Featured Projects
</div>

<div class="project-card">

<strong>🚲 Bike Rental Analysis</strong>

<p>
SQL + Python + Statistical Analysis
</p>

<a href="https://github.com/SamarthKolge-Analyst/Yulu_MicroMobility_Hypothesis_Testing"
target="_blank"
class="ai-btn">

Open GitHub →

</a>

</div>

<div class="project-card mt-4">

<strong>🏡 Airbnb Analytics</strong>

<p>
Tableau + Data Visualization
</p>

<a href="https://github.com/SamarthKolge-Analyst/Airbnb_Analytics_Case_Study"
target="_blank"
class="ai-btn">

Open GitHub →

</a>

</div>

</div>
`;

}
// ===========================
// Education
// ===========================

if (
    msg.includes("education") ||
    msg.includes("college") ||
    msg.includes("study") ||
    msg.includes("degree")
){

return `

<div class="ai-card">

<div class="ai-card-title">

🎓 Education

</div>

<div class="timeline">

<div class="timeline-item">

<strong>2025</strong>

<div>
MS Computer Science (AI & ML)
</div>

<small>Woolf University</small>

</div>

<div class="timeline-item">

<strong>2024</strong>

<div>
Scaler
</div>

<small>
Data Science & Machine Learning
</small>

</div>

<div class="timeline-item">

<strong>2023</strong>

<div>
Bachelor of Information Technology
</div>

<small>Mumbai University</small>

</div>

</div>

</div>

`;

}

// ===========================
// Contact
// ===========================

if(
msg.includes("contact") ||
msg.includes("email") ||
msg.includes("phone") ||
msg.includes("linkedin")
){

return `

<div class="ai-card">

<div class="ai-card-title">

📧 Contact Me

</div>

<div class="contact-links">

<a href="mailto:kolgesamarth@gmail.com">
📩 Email
</a>

<a href="tel:+919518905490">
📞 Phone
</a>

<a href="https://www.linkedin.com/in/samarth-kolge-134929285"
target="_blank">
💼 LinkedIn
</a>

<a href="https://github.com/SamarthKolge-Analyst"
target="_blank">
🐙 GitHub
</a>

<a href="https://samarthkolge.dev"
target="_blank">
🌐 Portfolio
</a>

</div>

</div>

`;

}








// ===========================
// AI Challenge
// ===========================

if (
    msg.includes("ai challenge") ||
    msg.includes("challenge") ||
    msg.includes("quiz") ||
    msg.includes("game")
) {

    return `

    <div class="challenge-card">

        <div class="challenge-title">
            🎮 AI Challenge
        </div>

        <p class="challenge-text">

            Think you're smarter than my AI?

            <br><br>

            🏆 Win all 3 questions and earn a
            <strong>Golden Apple 🍎</strong>

            <br><br>

            😂 Lose...

            You owe me one instead!

        </p>

        <div class="challenge-actions">

          <button
              class="challenge-chip challenge-start">

              ▶ Start Challenge

          </button>

          <button
              class="challenge-chip challenge-cancel">

              ❌ Give Up

          </button>

      </div>

    </div>

    `;

}

    return null;

}





function getBotReply(message) {

    const msg = String(message || "")
        .toLowerCase()
        .trim()
        .replace(/[^\w\s+#./-]/g, " ")
        .replace(/\s+/g, " ");


    /* =========================================================
       HELPER
       Prevents accidental partial-word matches
    ========================================================= */

    const has = (...keywords) => {
        return keywords.some(keyword => {

            const k = keyword
                .toLowerCase()
                .trim();

            if (!k) return false;

            return msg === k ||
                   msg.includes(` ${k} `) ||
                   msg.startsWith(`${k} `) ||
                   msg.endsWith(` ${k}`) ||
                   msg.includes(` ${k}`) ||
                   msg.includes(`${k} `);

        });
    };


    /* =========================================================
       PERSONALITY / FUN
    ========================================================= */

    if (has("joke", "funny")) {

        return `
Glad you're having fun! 😂
Ask me about Samarth's work, projects, skills, DevLab,
or I can tell you another joke.
        `.trim();

    }


    if (has("love")) {

        return `
I'm single... but currently in a committed relationship
with SQL, Python and building things. 💘💻
        `.trim();

    }


    if (has("bored", "play", "game")) {

        return `
Let's make it interesting. 😎

You can ask me about:
• Samarth's career
• Lentra.ai
• SQL / Python
• AI / ML
• Projects
• DevLab
• Dashboards
• Education

Or... ask me for a joke. 😂
        `.trim();

    }


    if (has("robot", "bot", "assistant")) {

        return `
I'm the portfolio assistant — part chatbot,
part guide, and definitely powered by too much code. 🤖

Ask me anything about Samarth's work, skills,
projects or DevLab.
        `.trim();

    }


    if (has("sad", "cry")) {

        return `
Take a breath. Everything doesn't have to be solved at once. 🌱

If you want, we can talk about something interesting —
data, engineering, AI/ML, projects or even a joke.
        `.trim();

    }


    /* =========================================================
       CURRENT PROFESSIONAL PROFILE
    ========================================================= */

    if (
        has(
            "about samarth",
            "who is samarth",
            "who are you",
            "samarth"
        )
    ) {

        return `
I'm Samarth Kolge's portfolio assistant. 👋

Samarth is a Product Engineer at Lentra.ai with 2+ years
of experience across product engineering, digital lending,
data analytics and data-driven product development.

His current work focuses on transforming business
requirements into scalable digital lending and onboarding
solutions for banking clients.

Core areas:
• Product Engineering
• Digital Lending
• SQL & Data Validation
• Python & Analytics
• Power BI & Tableau
• REST APIs
• AI / ML
• Agile delivery
        `.trim();

    }


    if (
        has(
            "current job",
            "current role",
            "job",
            "work",
            "working",
            "profession",
            "company",
            "where does samarth work",
            "where does he work"
        )
    ) {

        return `
Samarth is currently a Product Engineer at Lentra.ai.

He has been working there since June 2025, contributing
to digital lending and onboarding solutions for banking
clients including HDFC Bank, IndusInd Bank, Bandhan Bank
and CBIO.

His work involves business requirements, BRDs, FRDs,
user stories, GoFlow journeys, SQL validation, UAT,
production issue analysis and Agile delivery.
        `.trim();

    }


    if (
        has(
            "lentra",
            "lentra.ai",
            "product engineer"
        )
    ) {

        return `
At Lentra.ai, Samarth works as a Product Engineer on
digital lending and onboarding solutions.

His responsibilities include:

• Business requirement gathering
• BRDs and FRDs
• User stories
• Digital customer journeys
• GoFlow
• SQL-based data validation
• Process analysis
• UAT
• Production issue analysis
• Root cause analysis
• MIS / KPI reporting
• Agile coordination

He has worked with banking clients including HDFC Bank,
IndusInd Bank, Bandhan Bank and CBIO.
        `.trim();

    }


    /* =========================================================
       EXPERIENCE
    ========================================================= */

    if (
        has(
            "experience",
            "work experience",
            "professional experience",
            "career",
            "years of experience",
            "2 years",
            "2+ years"
        )
    ) {

        return `
Samarth has 2+ years of professional experience.

Current:
Product Engineer — Lentra.ai
June 2025 – Present

Previous:
Data Analyst Intern — Borgward Technology India Pvt Ltd
June 2023 – May 2024

His experience spans product engineering, digital lending,
data analytics, SQL, Python, dashboards, business analysis,
data validation, UAT and Agile delivery.
        `.trim();

    }


    if (
        has(
            "borgward",
            "data analyst",
            "internship",
            "intern"
        )
    ) {

        return `
Samarth previously worked as a Data Analyst Intern at
Borgward Technology India Pvt Ltd from June 2023 to May 2024.

He worked with SQL, Python, Excel, Tableau, ETL,
data cleaning, validation, preprocessing and data
visualization.

His work included analyzing large datasets, creating
interactive dashboards and generating actionable insights.
        `.trim();

    }


    /* =========================================================
       SKILLS / TECHNOLOGIES
    ========================================================= */

    if (
        has(
            "skills",
            "skill",
            "technologies",
            "technology",
            "tech stack",
            "stack",
            "technical skills"
        )
    ) {

        return `
Samarth's current technical toolkit includes:

Programming:
• SQL
• Python
• JavaScript

Data & Analytics:
• Pandas
• NumPy
• Scikit-learn
• Matplotlib
• Seaborn
• EDA
• ETL
• Data Cleaning
• Data Validation

BI & Visualization:
• Power BI
• Tableau
• Microsoft Excel

Databases:
• MySQL
• SQL Server
• BigQuery

Engineering & Collaboration:
• Git
• GitHub
• Jira
• Postman
• Swagger
• REST APIs

Product:
• BRD
• FRD
• User Stories
• UAT
• Agile

Current domain:
Digital Lending + Product Engineering + Analytics + AI/ML
        `.trim();

    }


    if (
        has(
            "sql",
            "mysql",
            "sql server",
            "bigquery",
            "database",
            "databases"
        )
    ) {

        return `
SQL is one of Samarth's core technologies.

He uses SQL for data validation, analysis, business logic,
production investigation and analytical projects.

His database experience includes:
• MySQL
• SQL Server
• BigQuery
        `.trim();

    }


    if (
        has(
            "python",
            "pandas",
            "numpy",
            "scikit-learn",
            "sklearn",
            "matplotlib",
            "seaborn"
        )
    ) {

        return `
Samarth uses Python primarily for data analysis,
exploratory data analysis, preprocessing, visualization
and machine-learning related work.

His Python ecosystem includes:
Pandas, NumPy, Scikit-learn, Matplotlib and Seaborn.
        `.trim();

    }


    if (
        has(
            "power bi",
            "powerbi",
            "tableau",
            "excel",
            "dashboard",
            "dashboards",
            "visualization",
            "visualizations"
        )
    ) {

        return `
Samarth has experience building analytical dashboards
and reports using Power BI, Tableau and Microsoft Excel.

You can explore his dashboard work through the
Dashboard section of the portfolio.
        `.trim();

    }


    if (
        has(
            "ai",
            "ai/ml",
            "machine learning",
            "machine-learning",
            "ml",
            "artificial intelligence"
        )
    ) {

        return `
Samarth is pursuing an M.Sc. in Computer Science with
a specialization in Artificial Intelligence and Machine
Learning.

His broader technical interests include:
• Machine Learning
• Data Science
• Analytics
• AI-powered products
• Python
• Scikit-learn
• Data-driven engineering
        `.trim();

    }


    if (
        has(
            "javascript",
            "js",
            "web development",
            "frontend",
            "frontend development"
        )
    ) {

        return `
JavaScript is part of Samarth's engineering toolkit.

His portfolio and DevLab also use modern web technologies
to create interactive experiences, engineering tools and
data-focused interfaces.
        `.trim();

    }


    /* =========================================================
       PROJECTS / GITHUB
    ========================================================= */

    if (
        has(
            "projects",
            "project",
            "github",
            "portfolio projects",
            "case studies",
            "case study"
        )
    ) {

        return `
Samarth has worked on multiple analytics and engineering
projects.

Some highlighted projects include:

🚲 Bike Rental Demand Analysis
Used 100K+ bike rental records with SQL and Python to
identify demand patterns, customer segments and
seasonality.

🏠 Airbnb Analytics Case Study
Analyzed 500 Airbnb listings and one year of booking data
using Tableau to understand the relationship between
property images and booking performance.

You can explore more projects through the Projects
and GitHub sections.
        `.trim();

    }


    if (
        has(
            "bike rental",
            "yulu",
            "bike project",
            "bike analysis"
        )
    ) {

        return `
Bike Rental Demand Analysis was performed using SQL
and Python on 100K+ rental records.

The analysis examined:
• Customer demand
• Weekday vs working-day patterns
• Seasonality
• Registered vs casual users
• Operational recommendations

The project produced data-driven recommendations for
inventory planning, weather-responsive operations and
customer retention.
        `.trim();

    }


    if (
        has(
            "airbnb",
            "airbnb project",
            "property image",
            "property images"
        )
    ) {

        return `
Samarth's Airbnb Analytics Case Study analyzed 500 listings
and one year of booking data using Tableau.

The project examined:
• Booking performance
• Property images
• Host segmentation
• Listing visibility
• Booking consistency

The analysis found useful patterns around the number of
property images associated with stronger booking performance.
        `.trim();

    }


    /* =========================================================
       EDUCATION
    ========================================================= */

    if (
        has(
            "school",
            "highschool",
            "high school"
        )
    ) {

        return `
Samarth studied at Alore Highschool.
        `.trim();

    }


    if (
        has(
            "study",
            "studies",
            "education",
            "degree",
            "masters",
            "master",
            "msc",
            "m.sc",
            "computer science",
            "university"
        )
    ) {

        return `
Education:

🎓 M.Sc. in Computer Science
Specialization: Artificial Intelligence & Machine Learning
Woolf University
CGPA: 4.0 / 4.0

🎓 Bachelors in Information Technology
Scaler / Mumbai University
CGPA: 8.64 / 10.0

Samarth's academic focus is strongly aligned with
AI/ML, data science, analytics and software engineering.
        `.trim();

    }


    /* =========================================================
       RESUME / CV
    ========================================================= */

    if (
        has(
            "resume",
            "cv",
            "curriculum vitae",
            "download resume",
            "download cv"
        )
    ) {

        return `
You can download Samarth's latest resume from the
Resume button on the homepage. 📄

The current resume includes his Product Engineer role
at Lentra.ai, previous Data Analyst experience,
education, technical skills, projects and achievements.
        `.trim();

    }


    /* =========================================================
       DASHBOARD / ANALYTICS
    ========================================================= */

    if (
        has(
            "dashboard",
            "dashboards",
            "power bi dashboard",
            "tableau dashboard",
            "analytics dashboard"
        )
    ) {

        return `
You can explore Samarth's analytics and dashboard work
through the Dashboard section.

His visualization toolkit includes Power BI, Tableau
and Excel, supported by SQL and Python-based analysis.
        `.trim();

    }


    /* =========================================================
       CONTACT / SOCIAL
    ========================================================= */

    if (
        has(
            "linkedin",
            "linked in"
        )
    ) {

        return `
You can connect with Samarth on LinkedIn:

linkedin.com/in/samarth-kolge-134929285
        `.trim();

    }


    if (
        has(
            "email",
            "contact",
            "reach",
            "reach me",
            "email address"
        )
    ) {

        return `
You can reach Samarth at:

📧 kolgesamarth@gmail.com
📱 WhatsApp: 9518905490

You can also use the Contact section of the portfolio.
        `.trim();

    }


    if (
        has(
            "phone",
            "mobile",
            "whatsapp",
            "whatsapp number"
        )
    ) {

        return `
You can WhatsApp Samarth at:

📱 9518905490
        `.trim();

    }


    /* =========================================================
       GREETINGS
    ========================================================= */

    if (
        has(
            "hi",
            "hello",
            "hii",
            "hiii",
            "hiiii",
            "helloo",
            "hey"
        )
    ) {

        return `
Hello! 👋

I'm Samarth's portfolio assistant.

Ask me about his:
• Experience
• Lentra.ai
• Skills
• Projects
• Education
• AI/ML
• Dashboards
• DevLab
• Resume
        `.trim();

    }


    if (
        has(
            "how are you"
        )
    ) {

        return `
I'm doing great! 🤖

Keeping the portfolio running, watching the data,
and waiting for someone to ask me a good SQL question. 😄
        `.trim();

    }


    if (
        has(
            "good morning",
            "gm"
        )
    ) {

        return `
Good morning! ☀️

Hope your day is productive, your queries are optimized,
and your code has no bugs. 💻
        `.trim();

    }


    if (
        has(
            "good afternoon",
            "ga"
        )
    ) {

        return `
Good afternoon! ☀️

Keep building, keep learning and keep the data clean. 📊
        `.trim();

    }


    if (
        has(
            "good evening",
            "ge"
        )
    ) {

        return `
Good evening! 🌆

Perfect time to explore some projects, dashboards
or maybe experiment inside DevLab.
        `.trim();

    }


    if (
        has(
            "bye",
            "goodbye"
        )
    ) {

        return `
Goodbye! 👋

Thanks for visiting Samarth's portfolio.
Come back whenever you want to explore more.
        `.trim();

    }


    if (
        has(
            "good night",
            "gn"
        )
    ) {

        return `
Good night! 🌙

Sleep well — and may all your bugs disappear by morning. 😄
        `.trim();

    }


    /* =========================================================
       THANKS
    ========================================================= */

    if (
        has(
            "thank",
            "thanks",
            "thank you",
            "thx",
            "ty"
        )
    ) {

        return `
You're welcome! 😊

Always happy to help you explore the portfolio.
        `.trim();

    }


    /* =========================================================
       SHORT CONFIRMATIONS
    ========================================================= */

    if (
        has(
            "ok",
            "okay",
            "yes",
            "okk",
            "no",
            "sure",
            "fine"
        )
    ) {

        return `
Got it! 👍

What would you like to explore next?
        `.trim();

    }


    /* =========================================================
       LAUGHTER
    ========================================================= */

    if (
        has(
            "lol",
            "haha",
            "hahaha"
        )
    ) {

        return "😂 Glad I could make you smile!";


    }


    /* =========================================================
       DEVLAB
    ========================================================= */

    if (
        has(
            "devlab",
            "dev lab",
            "developer lab",
            "engineering lab",
            "engineering playground"
        )
    ) {

        return `
DevLab is Samarth's interactive engineering playground. 🧪

It brings together:

• SQL
• Python
• JavaScript
• Analytics
• Data experimentation
• Product engineering
• Interactive visualizations

Click DevLab to enter the engineering environment.
        `.trim();

    }



    /* =========================================================
       DEFAULT
    ========================================================= */

/* =========================================================
   PERSONAL INFO / QUICK FACTS
========================================================= */

if (
    msg.includes("location") ||
    msg.includes("city") ||
    msg.includes("pune") ||
    msg.includes("where are you based") ||
    msg.includes("where do you live")
)
    return "I'm based in Pune, India 🇮🇳";


if (
    msg.includes("college") ||
    msg.includes("university") ||
    msg.includes("where did you study")
)
    return "I'm currently pursuing an M.Sc. in Computer Science with a specialization in Artificial Intelligence and Machine Learning at Woolf University. I also completed my Bachelor's in Information Technology through Scaler / Mumbai University.";


/* =========================================================
   TELL ME ABOUT YOURSELF
========================================================= */

if (
    msg.includes("tell me about yourself") ||
    msg.includes("introduce yourself") ||
    msg.includes("about yourself") ||
    msg.includes("walk me through your profile") ||
    msg.includes("tell me about samarth")
)
    return `
I'm Samarth Kolge, a Product Engineer at Lentra.ai with 2+ years
of experience across product engineering, digital lending,
data analytics and data-driven product development.

At Lentra.ai, I work with business stakeholders, product managers
and engineering teams to translate business requirements into
digital lending and onboarding solutions for banking clients.

My work includes BRDs, FRDs, user stories, GoFlow journeys,
SQL-based validation, UAT, production issue analysis, RCA,
MIS/KPI reporting and Agile delivery.

My technical toolkit includes SQL, Python, JavaScript,
Power BI, Tableau, Excel, REST APIs and modern data/analytics
tools.

Alongside work, I'm pursuing an M.Sc. in Computer Science with
a specialization in AI/ML, so I'm continuously building my
knowledge across engineering, analytics and artificial intelligence.
`.trim();


/* =========================================================
   STRENGTH
========================================================= */

if (
    msg.includes("strength") ||
    msg.includes("strengths") ||
    msg.includes("greatest strength") ||
    msg.includes("biggest strength")
)
    return `
My biggest strengths are analytical thinking, structured
problem-solving and ownership.

I enjoy breaking complex business or technical problems into
smaller, actionable pieces and working with stakeholders and
engineering teams to turn requirements into reliable solutions.

My current role has also strengthened my ability to work across
business requirements, data validation, UAT and production
problem-solving.

And yes — I still enjoy debugging until I understand exactly
why something broke. 😄
`.trim();


/* =========================================================
   WEAKNESS
========================================================= */

if (
    msg.includes("weakness") ||
    msg.includes("weaknesses") ||
    msg.includes("biggest weakness")
)
    return `
One area I'm continuously improving is balancing depth with speed.

I naturally like understanding a problem thoroughly before
considering it complete. That can sometimes lead me to spend
more time than necessary on details.

I've been improving this by prioritizing impact, defining
clear deliverables and separating "must solve now" problems
from improvements that can be handled later.
`.trim();


/* =========================================================
   WHY SHOULD WE HIRE
========================================================= */

if (
    msg.includes("why should we hire") ||
    msg.includes("why hire you") ||
    msg.includes("why should we choose you") ||
    msg.includes("why are you a good fit")
)
    return `
I bring a combination of product thinking, data skills and
hands-on engineering exposure.

I have experience working directly with business stakeholders,
product managers and development teams, while also working
with SQL, data validation, APIs, UAT and analytical tools.

My current experience in digital lending has taught me how to
translate business requirements into practical product solutions,
while my analytics background helps me make decisions using data.

I also continuously upskill through my M.Sc. in AI/ML and
personal projects, so I'm comfortable learning new technologies
when the problem requires them.
`.trim();


/* =========================================================
   FIVE YEARS
========================================================= */

if (
    msg.includes("five years") ||
    msg.includes("5 years") ||
    msg.includes("where do you see yourself") ||
    msg.includes("future goals") ||
    msg.includes("career goals")
)
    return `
Over the next five years, I want to grow into a strong
product-and-technology professional working at the intersection
of engineering, data and AI.

I want to take ownership of larger products and more complex
business problems, strengthen my AI/ML expertise and eventually
mentor engineers or analysts while contributing to high-impact
projects.

My goal is not simply to move into a bigger title — it's to
become someone who can understand the problem, design the
solution and help drive it successfully into production.
`.trim();


/* =========================================================
   DREAM JOB
========================================================= */

if (
    msg.includes("dream job") ||
    msg.includes("ideal job") ||
    msg.includes("ideal role")
)
    return `
My ideal role sits at the intersection of technology,
data and real-world business problems.

I enjoy roles where I can understand requirements, work with
data and systems, collaborate with different teams and build
solutions that actually improve a product or process.

Product engineering, data, AI/ML and analytics are all areas
I'd like to continue exploring.
`.trim();


/* =========================================================
   WORK ENVIRONMENT
========================================================= */

if (
    msg.includes("work environment") ||
    msg.includes("working environment") ||
    msg.includes("company culture") ||
    msg.includes("team culture")
)
    return `
I work best in an environment that is collaborative,
ownership-driven and open to ideas.

I like working with people from different functions because
many good solutions come from understanding both the business
problem and the technical constraints.

I also appreciate environments where people can challenge
ideas respectfully, experiment and continuously improve.
`.trim();


/* =========================================================
   HANDLING STRESS / PRESSURE
========================================================= */

if (
    msg.includes("handle stress") ||
    msg.includes("handle pressure") ||
    msg.includes("stress") ||
    msg.includes("pressure")
)
    return `
I handle pressure by breaking the problem down, prioritizing
what is actually urgent and working through it systematically.

In product engineering, production issues can require quick
investigation, so I focus on identifying the root cause,
communicating clearly with the relevant teams and then
working toward a reliable resolution.

I prefer solving pressure with structure rather than panic.
`.trim();


/* =========================================================
   TEAM VS INDIVIDUAL
========================================================= */

if (
    (msg.includes("team") && msg.includes("individual")) ||
    msg.includes("teamwork") ||
    msg.includes("work independently")
)
    return `
I'm comfortable working both collaboratively and independently.

I enjoy teamwork when requirements, product decisions or
technical problems need multiple perspectives. At the same time,
I'm comfortable taking ownership of an individual task and
driving it from investigation through completion.

My current role regularly requires both approaches.
`.trim();


/* =========================================================
   LEADERSHIP
========================================================= */

if (
    msg.includes("leadership") ||
    msg.includes("leader") ||
    msg.includes("leading") ||
    msg.includes("lead a team")
)
    return `
My leadership style is more about ownership and coordination
than simply assigning tasks.

I like bringing clarity to requirements, organizing work,
communicating with stakeholders and making sure problems
don't get stuck between teams.

My current product-engineering experience has given me
significant exposure to coordinating between business and
engineering teams during delivery.
`.trim();


/* =========================================================
   ACHIEVEMENTS
========================================================= */

if (
    msg.includes("achievement") ||
    msg.includes("achievements") ||
    msg.includes("proudest achievement") ||
    msg.includes("biggest achievement")
)
    return `
A few achievements I'm particularly proud of are:

🏆 I secured First Position for developing a Court Management
System, recognized by Ratnagiri District Court for improving
lawyer discovery and case management.

♟️ I'm also a District-Level Chess Player, which reflects
my interest in strategic thinking and competitive problem-solving.

💼 Professionally, I've contributed to digital lending and
onboarding solutions at Lentra.ai, helping reduce requirement
gaps by 30%, improve loan processing efficiency by 20–25% and
reduce customer drop-offs by 15%.
`.trim();


/* =========================================================
   PROUDEST PROJECT
========================================================= */

if (
    msg.includes("proud project") ||
    msg.includes("proudest project") ||
    msg.includes("favorite project") ||
    msg.includes("best project")
)
    return `
One project I'm particularly proud of is my Bike Rental Demand
Analysis.

I analyzed 100K+ rental records using SQL and Python to identify
customer demand patterns, working-day behavior, seasonality and
customer segments.

The analysis produced actionable recommendations around
inventory planning, weather-responsive operations and customer
retention.

I also worked on an Airbnb Analytics Case Study using Tableau,
analyzing 500 listings and one year of booking data to understand
the relationship between property images and booking performance.
`.trim();


/* =========================================================
   INTERNSHIP
========================================================= */

if (
    msg.includes("internship") ||
    msg.includes("intern experience") ||
    msg.includes("intern")
)
    return `
I worked as a Data Analyst Intern at Borgward Technology India
Pvt Ltd from June 2023 to May 2024.

I worked with SQL, Python and Excel to analyze large datasets,
identify trends and generate actionable insights.

I also developed data cleaning, validation and preprocessing
workflows and created interactive Tableau dashboards and
automated analytical reports.

The experience gave me a strong foundation in data analysis
before moving into my current product-engineering role.
`.trim();


/* =========================================================
   CERTIFICATION
========================================================= */

if (
    msg.includes("certification") ||
    msg.includes("certifications") ||
    msg.includes("certificate") ||
    msg.includes("certificates")
)
    return `
My current profile is focused more heavily on hands-on
professional experience, projects and formal education.

My strongest current credentials include:

🎓 M.Sc. in Computer Science — Artificial Intelligence &
Machine Learning, Woolf University
CGPA: 4.0 / 4.0

🎓 Bachelor's in Information Technology
Scaler / Mumbai University
CGPA: 8.64 / 10.0

Professionally, I also have hands-on experience with SQL,
Python, Power BI, Tableau, Jira, Postman, Swagger, GoFlow,
UAT and Agile delivery.
`.trim();


/* =========================================================
   EDUCATION
========================================================= */

if (
    msg.includes("study") ||
    msg.includes("education") ||
    msg.includes("degree") ||
    msg.includes("masters") ||
    msg.includes("master") ||
    msg.includes("msc") ||
    msg.includes("m.sc") ||
    msg.includes("bachelor") ||
    msg.includes("computer science education")
)
    return `
My current education is:

🎓 M.Sc. in Computer Science
Specialization: Artificial Intelligence & Machine Learning
Woolf University
CGPA: 4.0 / 4.0

🎓 Bachelor's in Information Technology
Scaler / Mumbai University
CGPA: 8.64 / 10.0

My education complements my professional experience in
product engineering, analytics, data and AI/ML.
`.trim();


/* =========================================================
   RELOCATION
========================================================= */

if (
    msg.includes("relocate") ||
    msg.includes("relocation") ||
    msg.includes("move to another city") ||
    msg.includes("willing to relocate")
)
    return `
I'm open to discussing relocation for the right opportunity.

The role, learning opportunities, team and long-term growth
would be important factors in that decision.
`.trim();


/* =========================================================
   WORK FROM HOME / HYBRID
========================================================= */

if (
    msg.includes("work from home") ||
    msg.includes("remote") ||
    msg.includes("hybrid") ||
    msg.includes("office")
)
    return `
I'm comfortable adapting to different working models.

I've worked in collaborative environments where communication
with business, product and engineering teams is important, so
I'm comfortable with office, hybrid or remote setups depending
on the role and team requirements.
`.trim();


/* =========================================================
   SALARY
========================================================= */

if (
    msg.includes("salary") ||
    msg.includes("expected salary") ||
    msg.includes("salary expectation") ||
    msg.includes("ctc") ||
    msg.includes("compensation")
)
    return `
I'm primarily looking for the right role, learning opportunity
and long-term growth.

I'd expect compensation to be aligned with the responsibilities
of the role, my professional experience and the overall market.
I'm open to discussing the details at the appropriate stage.
`.trim();


/* =========================================================
   CONTRIBUTION
========================================================= */

if (
    (msg.includes("contribute") && msg.includes("company")) ||
    msg.includes("how will you contribute") ||
    msg.includes("what can you contribute")
)
    return `
I can contribute across both product and technical areas.

I can help translate business requirements into clear
documentation and user stories, validate data and workflows
using SQL, support UAT and production investigations, and
work closely with engineering and business teams to deliver
reliable solutions.

My analytics and AI/ML background also gives me a broader
data-driven perspective when evaluating problems.
`.trim();


/* =========================================================
   QUESTIONS FOR INTERVIEWER
========================================================= */

if (
    msg.includes("questions for us") ||
    msg.includes("questions for you") ||
    msg.includes("do you have any questions") ||
    msg.includes("what questions should i ask")
)
    return `
Absolutely. Some strong questions I would ask are:

1. What would success look like in the first 3–6 months?
2. What are the most important problems this role will solve?
3. How does the team collaborate between product, engineering
   and business stakeholders?
4. What opportunities are there to work with data, AI or
   automation?
5. How do you measure impact for someone in this role?

I'd especially ask about the team's current challenges —
that's usually where the most interesting opportunities are.
`.trim();


/* =========================================================
   CASUAL — LIFE
========================================================= */

if (
    msg.includes("how's life") ||
    msg.includes("hows life") ||
    msg.includes("how is life")
)
    return `
Life is good! 😄

I'm working, learning, building projects and continuing to
explore data, product engineering and AI/ML.

There's always something new to learn.
`.trim();


/* =========================================================
   HOBBIES
========================================================= */

if (
    msg.includes("hobbies") ||
    msg.includes("hobby") ||
    msg.includes("what do you do for fun") ||
    msg.includes("what do you enjoy")
)
    return `
Outside work and academics, I enjoy activities that keep me
competitive and curious.

♟️ Chess is one of my favorite interests — I'm a District-Level
Chess Player.

I also enjoy:
• Cricket
• Badminton
• Carrom
• Kabaddi
• Reading
• Exploring new ideas and technology
`.trim();


/* =========================================================
   CHESS
========================================================= */

if (
    msg.includes("chess") ||
    msg.includes("play chess")
)
    return `
Chess is one of my favorite interests. ♟️

I'm a District-Level Chess Player, and I enjoy the strategic
thinking and decision-making involved in the game.

That analytical mindset also carries over nicely into
problem-solving and engineering.
`.trim();


/* =========================================================
   MOVIES
========================================================= */

if (
    msg.includes("favorite movie") ||
    msg.includes("favourite movie") ||
    msg.includes("favorite film") ||
    msg.includes("favourite film")
)
    return `
I'm a Marvel fan. 🦸

The Avengers is definitely one of the movies I'd happily
watch again.
`.trim();


/* =========================================================
   LENTRA — CURRENT COMPANY
========================================================= */

if (
    msg.includes("what does lentra ai do") ||
    msg.includes("what is lentra ai") ||
    msg.includes("what does lentra do") ||
    msg.includes("what is lentra")
)
    return `
Lentra.ai is a fintech company focused on digital lending
and technology solutions for financial institutions.

In my current role there, I work on digital lending and
onboarding solutions for banking clients, translating
business requirements into product workflows and supporting
validation, UAT and delivery.

My work has involved clients including HDFC Bank, IndusInd Bank,
Bandhan Bank and CBIO.
`.trim();


/* =========================================================
   LENTRA — WHY LENTRA
   IMPORTANT:
   Samarth already works at Lentra.
========================================================= */

if (
    msg.includes("why you want to join lentra") ||
    msg.includes("why do you want to join lentra") ||
    msg.includes("why lentra") ||
    msg.includes("why did you join lentra")
)
    return `
Lentra appealed to me because it sits at the intersection
of fintech, product engineering and digital transformation.

Working there gives me exposure to real-world lending
processes, banking clients and complex product requirements.

It has also allowed me to grow beyond pure data analysis into
product engineering — working with stakeholders, designing
digital journeys, validating data, supporting UAT and helping
move solutions toward production.
`.trim();


/* =========================================================
   LENTRA — CURRENT ROLE
========================================================= */

if (
    msg.includes("what do you do at lentra") ||
    msg.includes("what is your role at lentra") ||
    msg.includes("your role at lentra") ||
    msg.includes("what do you work on at lentra") ||
    msg.includes("what is your work at lentra")
)
    return `
I'm currently a Product Engineer at Lentra.ai.

My work includes:

• Gathering business requirements
• Preparing BRDs and FRDs
• Writing user stories
• Designing digital customer journeys using GoFlow
• Building dynamic onboarding forms
• SQL-based data validation
• Process analysis
• UAT
• Production issue investigation
• Root cause analysis
• MIS and KPI reporting
• Agile coordination

I work closely with business stakeholders, product managers
and development teams to deliver digital lending and
onboarding solutions.
`.trim();


/* =========================================================
   LENTRA — CLIENTS
========================================================= */

if (
    msg.includes("lentra clients") ||
    msg.includes("which banks") ||
    msg.includes("bank clients") ||
    msg.includes("clients at lentra") ||
    msg.includes("banks at lentra")
)
    return `
Through my work at Lentra.ai, I've contributed to digital
lending and onboarding solutions for banking clients including:

🏦 HDFC Bank
🏦 IndusInd Bank
🏦 Bandhan Bank
🏦 CBIO

My role involves translating requirements into workflows,
validating data and supporting successful product delivery.
`.trim();


/* =========================================================
   LENTRA — TECHNOLOGY
========================================================= */

if (
    msg.includes("lentra technology") ||
    msg.includes("technologies at lentra") ||
    msg.includes("tools at lentra") ||
    msg.includes("what technologies do you use at lentra")
)
    return `
In my current Lentra.ai role, my primary tools and practices
include:

• SQL
• GoFlow
• Jira
• Postman
• Swagger
• BRD
• FRD
• User Stories
• UAT
• Agile

The role combines product requirements, workflow design,
data validation and engineering collaboration.
`.trim();


/* =========================================================
   LENTRA — IMPACT
========================================================= */

if (
    msg.includes("impact at lentra") ||
    msg.includes("achievement at lentra") ||
    msg.includes("what did you achieve at lentra") ||
    msg.includes("results at lentra")
)
    return `
My current Lentra.ai work has produced measurable impact.

I've contributed to:

• 30% reduction in requirement gaps
• 20–25% improvement in loan processing efficiency
• 15% reduction in customer drop-offs
• 35% improvement in reporting turnaround time
• 95%+ on-time project delivery

These results came from improving requirements,
digital journeys, validation, reporting and coordination
across business and engineering teams.
`.trim();


/* =========================================================
   LENTRA — OLD GENERIC FALLBACK
========================================================= */

if (
    msg.includes("lentra") ||
    msg.includes("lentra ai")
)
    return `
I currently work as a Product Engineer at Lentra.ai.

My work focuses on digital lending and onboarding solutions,
with responsibilities spanning business requirements,
GoFlow journeys, SQL validation, UAT, production analysis,
MIS/KPI reporting and Agile delivery.

I've worked with banking clients including HDFC Bank,
IndusInd Bank, Bandhan Bank and CBIO.
`.trim();



/* =========================================================
   PERSONAL / CASUAL QUESTIONS
========================================================= */

if (
    msg.includes('favorite food') ||
    msg.includes('favourite food') ||
    msg.includes('food')
)
    return 'I definitely enjoy good food! 😄 I also enjoy exploring new places and trying different things whenever I get the chance.';


if (
    (msg.includes('coffee') && msg.includes('tea')) ||
    msg === 'coffee or tea'
)
    return 'Coffee is a pretty good companion for coding. ☕💻 But a good cup of chai is hard to say no to!';


if (
    msg.includes('cats') ||
    msg.includes('dogs') ||
    msg.includes('cat or dog')
)
    return 'I like both! 🐶🐱 Though honestly, I think the better question is: which one would tolerate my coding sessions longer? 😂';


if (
    msg.includes('favorite music') ||
    msg.includes('favourite music') ||
    msg.includes('music')
)
    return 'I enjoy music that helps me relax or focus. Coding sessions and good background music are a pretty solid combination. 🎧';


if (
    msg.includes('weekend') ||
    msg.includes('weekends')
)
    return 'Weekends are usually a mix of learning, working on projects, spending time with friends and getting some time away from the screen.';


if (
    msg.includes('plans') ||
    msg.includes('weekend plans')
)
    return 'Usually a combination of projects, learning, friends and some time to recharge. If there is a good idea to build, though, the weekend can disappear pretty quickly! 😄';


if (
    msg.includes('hanging out') ||
    msg.includes('hangout') ||
    msg.includes('hang out')
)
    return 'Absolutely! 😄 Good conversations, food and talking about interesting ideas make for a pretty good hangout.';


if (
    msg.includes('travel') ||
    msg.includes('travelling') ||
    msg.includes('traveling')
)
    return 'I enjoy the idea of travelling and exploring new places. New cities, different cultures and new experiences are always interesting. 🌍';


if (
    msg.includes('sports') ||
    msg.includes('sport')
)
    return 'I enjoy playing sports more than just watching them. Cricket and badminton are among the sports I enjoy, and I also play carrom and kabaddi. 🏏🏸';


if (
    msg.includes('gaming') ||
    msg.includes('gaming') ||
    msg.includes('video games')
)
    return 'Gaming is a fun way to switch off from work and coding for a while. 🎮';


if (
    msg.includes('free time') ||
    msg.includes('what do you do in your free time') ||
    msg.includes('free')
)
    return 'In my free time, I usually work on projects, learn something new, play sports, play chess, read or spend time with friends.';


/* =========================================================
   LANGUAGE
========================================================= */

if (
    msg.includes('programming language') ||
    msg.includes('programming languages') ||
    msg.includes('coding language')
)
    return 'My main programming languages include Python, SQL and JavaScript. I also work with technologies and tools such as Power BI, Tableau, REST APIs, Postman and Swagger.';


if (
    msg.includes('spoken language') ||
    msg.includes('languages do you speak') ||
    msg.includes('what languages do you speak')
)
    return 'I communicate professionally in English and also speak Hindi and Marathi.';


if (
    msg === 'language' ||
    msg.includes('what language do you use')
)
    return 'If you mean programming, I mainly work with Python, SQL and JavaScript. If you mean spoken languages, I use English, Hindi and Marathi.';


/* =========================================================
   DREAMS / ASPIRATIONS
========================================================= */

if (
    msg === 'dream' ||
    msg.includes('dream job') ||
    msg.includes('dreams') ||
    msg.includes('biggest dream')
)
    return 'My long-term goal is to grow at the intersection of product engineering, data and AI/ML — building technology that solves meaningful real-world problems.';


if (
    msg.includes('future dream') ||
    msg.includes('future goal') ||
    msg.includes('long term goal')
)
    return 'I want to become a strong product-and-technology professional who can understand a business problem, work with data and engineering teams, and help turn the idea into a reliable solution.';


/* =========================================================
   MENTORING
========================================================= */

if (
    msg.includes('mentor') ||
    msg.includes('mentoring') ||
    msg.includes('mentor juniors')
)
    return 'I believe knowledge becomes more valuable when it is shared. I enjoy helping others understand technical concepts, approaches and problem-solving methods whenever I can.';


/* =========================================================
   LIFE MOTTO
========================================================= */

if (
    msg.includes('motto') ||
    msg.includes('life motto') ||
    msg.includes('personal motto')
)
    return 'Keep learning, keep building and keep improving. Technology changes constantly, so staying curious is one of the most important things. 🚀';


/* =========================================================
   BOOKS / READING
========================================================= */

if (
    msg.includes('favorite book') ||
    msg.includes('favourite book') ||
    msg.includes('book you like') ||
    msg.includes('books')
)
    return 'I enjoy reading and learning from books, especially when they offer practical ideas that can be applied to personal growth, technology or problem-solving. 📚';


/* =========================================================
   CHESS
========================================================= */

if (
    msg.includes('chess') ||
    msg.includes('play chess')
)
    return 'Chess is one of my favorite interests. ♟️ I am a District-Level Chess Player, and I enjoy the strategy, patience and decision-making involved in the game.';


/* =========================================================
   FUN PROMPTS
========================================================= */

if (
    msg.includes('tell me a joke') ||
    msg === 'joke' ||
    msg.includes('another joke')
)
    return 'Why do programmers prefer dark mode? Because light attracts bugs! 😂';


if (
    msg.includes('fun fact') ||
    msg.includes('interesting fact')
)
    return 'Fun fact: the term “debugging” became famous after an actual moth was found inside a computer and documented as a cause of a malfunction. 🐛💻';


if (
    msg.includes('motivation') ||
    msg.includes('inspire') ||
    msg.includes('inspiration')
)
    return 'Every complex problem becomes easier once you break it into smaller problems. Keep learning, keep experimenting and keep moving forward. 🚀';


if (
    msg.includes('meaning of life')
)
    return '42. 😉 But seriously, I think it is about learning, building meaningful relationships, helping others and finding something worth getting better at.';


/* =========================================================
   BOT IDENTITY
========================================================= */

if (
    msg.includes('are you real') ||
    msg.includes('are you human')
)
    return 'I am a chatbot created for Samarth’s portfolio. 🤖 I can answer questions about his experience, projects, skills, education and a few fun things too.';


if (
    msg.includes('do you sleep') ||
    msg.includes('do you ever sleep')
)
    return 'Nope! I am a chatbot. I just wait here until someone asks me something interesting. 🤖';


if (
    msg.includes('creator') ||
    msg.includes('who created you') ||
    msg.includes('who made you')
)
    return 'I was created by Samarth as part of his portfolio experience. Think of me as his little digital representative. 🤖';


if (
    msg.includes('how old') ||
    msg.includes('your age') ||
    msg.includes('how old are you')
)
    return 'I do not really have an age. I am software, so I prefer to measure my existence in versions and deployments. 😄';


if (
    msg.includes('gender') ||
    msg.includes('are you a boy') ||
    msg.includes('are you a girl')
)
    return 'I am a chatbot, so I do not have a gender. You can simply think of me as your friendly portfolio assistant. 🤖';


/* =========================================================
   BOT CAPABILITIES
========================================================= */

if (
    msg.includes('what can you do') ||
    msg.includes('what do you know') ||
    msg.includes('how can you help')
)
    return 'I can tell you about Samarth’s professional experience, Lentra.ai role, education, skills, projects, achievements, certifications, interests and more. Try asking me something!';


if (
    msg.includes('what can i ask') ||
    msg.includes('what should i ask')
)
    return 'Try asking: “Tell me about Samarth”, “What does he do at Lentra?”, “What are his skills?”, “Tell me about his projects”, “What is his education?”, “What are his achievements?” or ask something fun.';


/* =========================================================
   SINGING / DANCE
========================================================= */

if (
    msg.includes('sing') ||
    msg.includes('song')
)
    return 'I can generate text, but unfortunately I cannot actually sing. 🎵 I can still recommend a coding soundtrack though! 😄';


if (
    msg.includes('dance')
)
    return 'If I had a body, I would probably perform the robot dance. 🤖💃 For now, I will stick to moving data around.';


/* =========================================================
   RIDDLES
========================================================= */

if (
    msg.includes('riddle') ||
    msg.includes('give me a riddle')
)
    return 'Here is one: What has keys but cannot open locks? 🔑 Answer: A piano! 🎹';


/* =========================================================
   MINI GAMES
========================================================= */

if (
    msg.includes('play a game') ||
    msg === 'game'
)
    return 'Sure! 🎮 Pick a number between 1 and 5. I have already picked one... and I am not telling you which one. 😏';


if (
    msg.includes('coin') ||
    msg.includes('flip a coin')
)
    return Math.random() < 0.5
        ? 'Heads! 🪙'
        : 'Tails! 🪙';


if (
    msg.includes('dice') ||
    msg.includes('roll a dice') ||
    msg.includes('roll dice') ||
    msg === 'die'
)
    return 'You rolled a ' +
        (Math.floor(Math.random() * 6) + 1) +
        '! 🎲';


/* =========================================================
   RANDOM FUN
========================================================= */

if (
    msg.includes('surprise me') ||
    msg.includes('random fact')
)
    return 'Here is a random one: chess has more possible game variations than there are atoms in the observable universe. ♟️🌌';


if (
    msg.includes('compliment') ||
    msg.includes('say something nice')
)
    return 'You made it all the way to the chatbot — that already tells me you are curious. 😄';


if (
    msg.includes('boring') ||
    msg.includes('bored')
)
    return 'Bored? Ask me about a project, challenge me with a technical question, or start a quick game. I am ready. 😎';



/* =========================================================
   PERSONAL / CASUAL QUESTIONS
========================================================= */

if (
    msg.includes('favorite food') ||
    msg.includes('favourite food') ||
    msg.includes('food')
)
    return 'I definitely enjoy good food! 😄 I also enjoy exploring new places and trying different things whenever I get the chance.';


if (
    (msg.includes('coffee') && msg.includes('tea')) ||
    msg === 'coffee or tea'
)
    return 'Coffee is a pretty good companion for coding. ☕💻 But a good cup of chai is hard to say no to!';


if (
    msg.includes('cats') ||
    msg.includes('dogs') ||
    msg.includes('cat or dog')
)
    return 'I like both! 🐶🐱 Though honestly, I think the better question is: which one would tolerate my coding sessions longer? 😂';


if (
    msg.includes('favorite music') ||
    msg.includes('favourite music') ||
    msg.includes('music')
)
    return 'I enjoy music that helps me relax or focus. Coding sessions and good background music are a pretty solid combination. 🎧';


if (
    msg.includes('weekend') ||
    msg.includes('weekends')
)
    return 'Weekends are usually a mix of learning, working on projects, spending time with friends and getting some time away from the screen.';


if (
    msg.includes('plans') ||
    msg.includes('weekend plans')
)
    return 'Usually a combination of projects, learning, friends and some time to recharge. If there is a good idea to build, though, the weekend can disappear pretty quickly! 😄';


if (
    msg.includes('hanging out') ||
    msg.includes('hangout') ||
    msg.includes('hang out')
)
    return 'Absolutely! 😄 Good conversations, food and talking about interesting ideas make for a pretty good hangout.';


if (
    msg.includes('travel') ||
    msg.includes('travelling') ||
    msg.includes('traveling')
)
    return 'I enjoy the idea of travelling and exploring new places. New cities, different cultures and new experiences are always interesting. 🌍';


if (
    msg.includes('sports') ||
    msg.includes('sport')
)
    return 'I enjoy playing sports more than just watching them. Cricket and badminton are among the sports I enjoy, and I also play carrom and kabaddi. 🏏🏸';


if (
    msg.includes('gaming') ||
    msg.includes('gaming') ||
    msg.includes('video games')
)
    return 'Gaming is a fun way to switch off from work and coding for a while. 🎮';


if (
    msg.includes('free time') ||
    msg.includes('what do you do in your free time') ||
    msg.includes('free')
)
    return 'In my free time, I usually work on projects, learn something new, play sports, play chess, read or spend time with friends.';


/* =========================================================
   LANGUAGE
========================================================= */

if (
    msg.includes('programming language') ||
    msg.includes('programming languages') ||
    msg.includes('coding language')
)
    return 'My main programming languages include Python, SQL and JavaScript. I also work with technologies and tools such as Power BI, Tableau, REST APIs, Postman and Swagger.';


if (
    msg.includes('spoken language') ||
    msg.includes('languages do you speak') ||
    msg.includes('what languages do you speak')
)
    return 'I communicate professionally in English and also speak Hindi and Marathi.';


if (
    msg === 'language' ||
    msg.includes('what language do you use')
)
    return 'If you mean programming, I mainly work with Python, SQL and JavaScript. If you mean spoken languages, I use English, Hindi and Marathi.';


/* =========================================================
   DREAMS / ASPIRATIONS
========================================================= */

if (
    msg === 'dream' ||
    msg.includes('dream job') ||
    msg.includes('dreams') ||
    msg.includes('biggest dream')
)
    return 'My long-term goal is to grow at the intersection of product engineering, data and AI/ML — building technology that solves meaningful real-world problems.';


if (
    msg.includes('future dream') ||
    msg.includes('future goal') ||
    msg.includes('long term goal')
)
    return 'I want to become a strong product-and-technology professional who can understand a business problem, work with data and engineering teams, and help turn the idea into a reliable solution.';


/* =========================================================
   MENTORING
========================================================= */

if (
    msg.includes('mentor') ||
    msg.includes('mentoring') ||
    msg.includes('mentor juniors')
)
    return 'I believe knowledge becomes more valuable when it is shared. I enjoy helping others understand technical concepts, approaches and problem-solving methods whenever I can.';


/* =========================================================
   LIFE MOTTO
========================================================= */

if (
    msg.includes('motto') ||
    msg.includes('life motto') ||
    msg.includes('personal motto')
)
    return 'Keep learning, keep building and keep improving. Technology changes constantly, so staying curious is one of the most important things. 🚀';


/* =========================================================
   BOOKS / READING
========================================================= */

if (
    msg.includes('favorite book') ||
    msg.includes('favourite book') ||
    msg.includes('book you like') ||
    msg.includes('books')
)
    return 'I enjoy reading and learning from books, especially when they offer practical ideas that can be applied to personal growth, technology or problem-solving. 📚';


/* =========================================================
   CHESS
========================================================= */

if (
    msg.includes('chess') ||
    msg.includes('play chess')
)
    return 'Chess is one of my favorite interests. ♟️ I am a District-Level Chess Player, and I enjoy the strategy, patience and decision-making involved in the game.';


/* =========================================================
   FUN PROMPTS
========================================================= */

if (
    msg.includes('tell me a joke') ||
    msg === 'joke' ||
    msg.includes('another joke')
)
    return 'Why do programmers prefer dark mode? Because light attracts bugs! 😂';


if (
    msg.includes('fun fact') ||
    msg.includes('interesting fact')
)
    return 'Fun fact: the term “debugging” became famous after an actual moth was found inside a computer and documented as a cause of a malfunction. 🐛💻';


if (
    msg.includes('motivation') ||
    msg.includes('inspire') ||
    msg.includes('inspiration')
)
    return 'Every complex problem becomes easier once you break it into smaller problems. Keep learning, keep experimenting and keep moving forward. 🚀';


if (
    msg.includes('meaning of life')
)
    return '42. 😉 But seriously, I think it is about learning, building meaningful relationships, helping others and finding something worth getting better at.';


/* =========================================================
   BOT IDENTITY
========================================================= */

if (
    msg.includes('are you real') ||
    msg.includes('are you human')
)
    return 'I am a chatbot created for Samarth’s portfolio. 🤖 I can answer questions about his experience, projects, skills, education and a few fun things too.';


if (
    msg.includes('do you sleep') ||
    msg.includes('do you ever sleep')
)
    return 'Nope! I am a chatbot. I just wait here until someone asks me something interesting. 🤖';


if (
    msg.includes('creator') ||
    msg.includes('who created you') ||
    msg.includes('who made you')
)
    return 'I was created by Samarth as part of his portfolio experience. Think of me as his little digital representative. 🤖';


if (
    msg.includes('how old') ||
    msg.includes('your age') ||
    msg.includes('how old are you')
)
    return 'I do not really have an age. I am software, so I prefer to measure my existence in versions and deployments. 😄';


if (
    msg.includes('gender') ||
    msg.includes('are you a boy') ||
    msg.includes('are you a girl')
)
    return 'I am a chatbot, so I do not have a gender. You can simply think of me as your friendly portfolio assistant. 🤖';


/* =========================================================
   BOT CAPABILITIES
========================================================= */

if (
    msg.includes('what can you do') ||
    msg.includes('what do you know') ||
    msg.includes('how can you help')
)
    return 'I can tell you about Samarth’s professional experience, Lentra.ai role, education, skills, projects, achievements, certifications, interests and more. Try asking me something!';


if (
    msg.includes('what can i ask') ||
    msg.includes('what should i ask')
)
    return 'Try asking: “Tell me about Samarth”, “What does he do at Lentra?”, “What are his skills?”, “Tell me about his projects”, “What is his education?”, “What are his achievements?” or ask something fun.';


/* =========================================================
   SINGING / DANCE
========================================================= */

if (
    msg.includes('sing') ||
    msg.includes('song')
)
    return 'I can generate text, but unfortunately I cannot actually sing. 🎵 I can still recommend a coding soundtrack though! 😄';


if (
    msg.includes('dance')
)
    return 'If I had a body, I would probably perform the robot dance. 🤖💃 For now, I will stick to moving data around.';


/* =========================================================
   RIDDLES
========================================================= */

if (
    msg.includes('riddle') ||
    msg.includes('give me a riddle')
)
    return 'Here is one: What has keys but cannot open locks? 🔑 Answer: A piano! 🎹';


/* =========================================================
   MINI GAMES
========================================================= */

if (
    msg.includes('play a game') ||
    msg === 'game'
)
    return 'Sure! 🎮 Pick a number between 1 and 5. I have already picked one... and I am not telling you which one. 😏';


if (
    msg.includes('coin') ||
    msg.includes('flip a coin')
)
    return Math.random() < 0.5
        ? 'Heads! 🪙'
        : 'Tails! 🪙';


if (
    msg.includes('dice') ||
    msg.includes('roll a dice') ||
    msg.includes('roll dice') ||
    msg === 'die'
)
    return 'You rolled a ' +
        (Math.floor(Math.random() * 6) + 1) +
        '! 🎲';


/* =========================================================
   RANDOM FUN
========================================================= */

if (
    msg.includes('surprise me') ||
    msg.includes('random fact')
)
    return 'Here is a random one: chess has more possible game variations than there are atoms in the observable universe. ♟️🌌';


if (
    msg.includes('compliment') ||
    msg.includes('say something nice')
)
    return 'You made it all the way to the chatbot — that already tells me you are curious. 😄';


if (
    msg.includes('boring') ||
    msg.includes('bored')
)
    return 'Bored? Ask me about a project, challenge me with a technical question, or start a quick game. I am ready. 😎';


// =========================================================
// PERSONAL INFO & QUICK FACTS
// =========================================================

if (
    msg.includes("location") ||
    msg.includes("city") ||
    msg.includes("pune") ||
    msg.includes("where are you based")
)
    return "I'm based in Pune, India 🇮🇳 and work across product engineering, business analysis, analytics and digital lending.";

if (
    msg.includes("college") ||
    msg.includes("university") ||
    msg.includes("education")
)
    return "I completed my Bachelor of Science from Mumbai University with a CGPA of 8.64 in 2023. I also completed Scaler's Data Science & Machine Learning program in 2024. 🎓";

if (
    msg.includes("degree") ||
    msg.includes("bsc") ||
    msg.includes("b.sc")
)
    return "I completed my Bachelor of Science from Mumbai University in 2023 with a CGPA of 8.64.";

if (
    msg.includes("masters") ||
    msg.includes("master's") ||
    msg.includes("msc") ||
    msg.includes("m.sc")
)
    return "My current profile is focused on product engineering, business analysis, analytics and digital lending, with a strong interest in AI, machine learning and data-driven product development.";

if (
    msg.includes("qualification") ||
    msg.includes("academic background")
)
    return "My academic background includes a B.Sc. from Mumbai University with a CGPA of 8.64, along with Data Science & Machine Learning training from Scaler.";

if (
    msg.includes("experience") ||
    msg.includes("years of experience") ||
    msg.includes("how many years")
)
    return "I have approximately 2+ years of professional experience across business analysis, data analytics and product engineering, with my current work focused on digital lending solutions at Lentra.ai. 💼";


// =========================================================
// CURRENT PROFESSIONAL PROFILE
// =========================================================

if (
    msg.includes("current role") ||
    msg.includes("current job") ||
    msg.includes("what do you do") ||
    msg.includes("what is your role")
)
    return "I'm currently working as a Tech Business Analyst at Lentra.ai, where I work on digital lending solutions, business requirements, product workflows, SQL-based data validation, MIS reporting, UAT and stakeholder collaboration.";

if (
    msg.includes("where do you work") ||
    msg.includes("company") ||
    msg.includes("current company")
)
    return "I currently work at Lentra.ai, a fintech company focused on digital lending solutions for banks and financial institutions.";

if (
    msg.includes("job title") ||
    msg.includes("designation") ||
    msg.includes("position")
)
    return "My current role is Tech Business Analyst at Lentra.ai.";

if (
    msg.includes("career") ||
    msg.includes("career journey") ||
    msg.includes("professional journey")
)
    return "My career started with data analytics and business analysis, and has evolved toward technology-driven product engineering. Today I work at the intersection of business requirements, digital lending, analytics, SQL, product workflows and technology.";

if (
    msg.includes("lentra experience") ||
    msg.includes("experience at lentra") ||
    msg.includes("work at lentra")
)
    return "At Lentra.ai, I work on digital lending solutions for banking clients, translating business requirements into BRDs, FRDs and user stories, designing onboarding journeys, validating production data with SQL, automating MIS reporting, supporting UAT and coordinating with stakeholders. 🚀";


// =========================================================
// SKILLS & TECHNOLOGY
// =========================================================

if (
    msg.includes("skills") ||
    msg.includes("technologies") ||
    msg.includes("tech stack") ||
    msg.includes("technical skills")
)
    return "My core skills include SQL, Python, Power BI, Tableau, Excel, data analysis, statistical analysis, hypothesis testing, A/B testing, data modeling, ETL, data cleaning, Pandas, NumPy, Matplotlib, Scikit-learn, BRD, FRD, UAT, stakeholder management, Agile, root cause analysis and KPI reporting.";

if (
    msg.includes("programming") ||
    msg.includes("programming languages") ||
    msg.includes("coding languages")
)
    return "My primary programming and query languages are SQL and Python. I also work with JavaScript and HTML in product and web-based workflows.";

if (
    msg.includes("sql")
)
    return "SQL is one of my strongest technical skills. I use it for data validation, analysis, reporting, KPI analysis, joins, CTEs, subqueries and extracting business insights.";

if (
    msg.includes("python")
)
    return "I use Python for data analysis, data cleaning, automation and analytics, with libraries such as Pandas, NumPy, Matplotlib and Scikit-learn.";

if (
    msg.includes("power bi") ||
    msg.includes("powerbi")
)
    return "I use Power BI for business intelligence, KPI reporting, dashboarding and communicating analytical insights.";

if (
    msg.includes("tableau")
)
    return "I have experience building Tableau dashboards for analytics and business decision-making.";

if (
    msg.includes("excel")
)
    return "Excel is part of my analytics toolkit, particularly for data analysis, reporting and business workflows.";

if (
    msg.includes("pandas") ||
    msg.includes("numpy") ||
    msg.includes("matplotlib") ||
    msg.includes("scikit")
)
    return "My Python analytics toolkit includes Pandas, NumPy, Matplotlib and Scikit-learn.";

if (
    msg.includes("etl") ||
    msg.includes("data cleaning") ||
    msg.includes("data cleaning experience")
)
    return "I have experience with ETL, data cleaning and data preparation workflows to improve data quality and make datasets ready for analysis and reporting.";

if (
    msg.includes("data analysis") ||
    msg.includes("analytics")
)
    return "My analytics experience covers data analysis, statistical analysis, hypothesis testing, A/B testing, KPI reporting, data modeling, data cleaning, visualization and translating data into business decisions.";

if (
    msg.includes("business analysis") ||
    msg.includes("business analyst")
)
    return "My Business Analysis experience includes requirements gathering, BRDs, FRDs, user stories, stakeholder management, UAT, root cause analysis, KPI reporting and Agile delivery.";

if (
    msg.includes("product engineering") ||
    msg.includes("product engineer")
)
    return "My current career direction combines business analysis and product engineering. I focus on translating business requirements into practical digital products, workflows and scalable solutions.";

if (
    msg.includes("agile")
)
    return "I have experience working in Agile environments, including sprint planning, cross-functional collaboration, UAT and stakeholder communication.";

if (
    msg.includes("uat") ||
    msg.includes("user acceptance testing")
)
    return "I have hands-on experience supporting UAT, validating requirements and coordinating with stakeholders to ensure product functionality matches business expectations.";

if (
    msg.includes("brd") ||
    msg.includes("business requirement document")
)
    return "I work with BRDs to translate business requirements into structured product and implementation requirements.";

if (
    msg.includes("frd") ||
    msg.includes("functional requirement document")
)
    return "I work with FRDs to document functional requirements and help bridge the gap between business expectations and technical implementation.";

if (
    msg.includes("stakeholder")
)
    return "Stakeholder management is an important part of my role. I work across business and technical teams to clarify requirements, communicate progress and support successful delivery.";

if (
    msg.includes("kpi") ||
    msg.includes("kpis")
)
    return "I work with KPI reporting and dashboards to turn operational and business data into measurable insights for decision-making.";


// =========================================================
// DETAILED PROFESSIONAL Q&A — HR STYLE
// =========================================================

if (
    msg.includes("tell me about yourself") ||
    msg.includes("introduce yourself") ||
    msg.includes("about yourself")
)
    return "I'm Samarth Kolge, a Tech Business Analyst with 2+ years of experience across data analytics, business analysis and product engineering. I currently work at Lentra.ai on digital lending solutions for banking clients. My work combines business requirements, SQL, analytics, product workflows, UAT and stakeholder management. I'm passionate about building technology-driven solutions that solve real business problems.";

if (
    msg.includes("strength") ||
    msg.includes("greatest strength") ||
    msg.includes("biggest strength")
)
    return "My biggest strengths are analytical problem-solving, attention to detail and the ability to bridge business and technology. I enjoy taking an ambiguous business problem, breaking it down into clear requirements and turning it into a measurable solution.";

if (
    msg.includes("weakness") ||
    msg.includes("biggest weakness")
)
    return "I can sometimes become deeply involved in solving a problem because I want to understand it thoroughly. I've been improving this by prioritizing tasks, defining clear delivery milestones and balancing depth with execution speed.";

if (
    msg.includes("why should we hire") ||
    msg.includes("why hire you") ||
    msg.includes("why should we select")
)
    return "I bring a combination of business analysis, analytics and technical understanding. I can communicate with stakeholders, understand requirements, work with SQL and data, support product workflows and contribute to execution. That combination helps me connect business needs with practical technology solutions.";

if (
    msg.includes("five years") ||
    msg.includes("5 years") ||
    msg.includes("where do you see yourself")
)
    return "I see myself growing into a strong product and technology leader who can own complex data-driven products from business discovery through execution. I want to deepen my expertise in AI, analytics, product engineering and scalable enterprise solutions.";

if (
    msg.includes("dream job") ||
    msg.includes("dream role")
)
    return "My ideal role sits at the intersection of product, technology, analytics and AI — solving meaningful business problems while giving me opportunities to build, learn and take ownership.";

if (
    msg.includes("work environment") ||
    msg.includes("ideal work environment")
)
    return "I work best in a collaborative environment where people communicate clearly, take ownership and are comfortable solving problems together. I particularly enjoy environments where business and technical teams work closely.";

if (
    msg.includes("handle stress") ||
    msg.includes("stress")
)
    return "I handle pressure by breaking large problems into smaller priorities, clarifying what is most important and focusing on execution. Communication and organization help me stay effective when multiple priorities are moving simultaneously.";

if (
    msg.includes("team") &&
    msg.includes("individual")
)
    return "I'm comfortable working both independently and in cross-functional teams. I enjoy independent problem-solving, but I also value collaboration because complex product and business problems usually require multiple perspectives.";

if (
    msg.includes("achievement") ||
    msg.includes("proudest achievement")
)
    return "One achievement I'm proud of is contributing to digital lending solutions where clearer requirements helped reduce requirement gaps by 30%, while my work on reporting and KPI automation helped reduce reporting turnaround time by 35%. ";

if (
    msg.includes("proud project") ||
    msg.includes("favorite project")
)
    return "I'm particularly proud of projects where analytics directly supports a business decision. My portfolio includes Bike Rental Demand Analysis, Brazilian E-commerce Analytics and a Streaming Platform Analytics Dashboard.";

if (
    msg.includes("internship")
)
    return "During my Data Analyst internship at Borgward Technology India, I worked with student datasets, data-cleaning workflows and Tableau dashboards. My work contributed to improving dataset accuracy and generating actionable insights.";

if (
    msg.includes("leadership")
)
    return "My leadership style is based on ownership, communication and clarity. In cross-functional work, I focus on organizing requirements, keeping stakeholders aligned and making sure execution stays connected to the business objective.";

if (
    msg.includes("certification") ||
    msg.includes("certifications")
)
    return "My training includes the Scaler Data Science & Machine Learning program completed in 2024, along with additional professional learning and certifications reflected in my portfolio.";

if (
    msg.includes("relocate") ||
    msg.includes("relocation")
)
    return "I'm open to discussing relocation depending on the role, organization and opportunity.";

if (
    msg.includes("work from home") ||
    msg.includes("remote")
)
    return "I'm open to different working models depending on the organization's requirements and the role.";

if (
    msg.includes("salary") ||
    msg.includes("expected salary") ||
    msg.includes("salary expectation")
)
    return "I'm primarily focused on finding the right opportunity, role and growth environment. I'm open to discussing compensation based on the responsibilities, expectations and overall opportunity.";

if (
    msg.includes("contribute") &&
    msg.includes("company")
)
    return "I can contribute by connecting business requirements with data and technology. I can help analyze problems, improve workflows, validate data, support product delivery and turn requirements into measurable solutions.";

if (
    msg.includes("questions for us") ||
    msg.includes("questions for you")
)
    return "I'd ask: What would success look like in the first 6 months? What are the biggest problems this role is expected to solve? How does the product, business and engineering teams collaborate?";


// =========================================================
// PROFESSIONAL GOALS
// =========================================================

if (
    msg.includes("goal") ||
    msg.includes("career goal") ||
    msg.includes("professional goal")
)
    return "My goal is to grow into a strong product and technology professional who can combine AI, analytics, business understanding and engineering to solve meaningful enterprise problems.";

if (
    msg.includes("why data analyst")
)
    return "Data analytics gave me a strong foundation in problem-solving and decision-making. I enjoy discovering patterns in data, but I also enjoy going beyond analysis to understand the business problem and help build the solution.";

if (
    msg.includes("why business analyst")
)
    return "Business analysis interests me because it sits between business needs and technology. I enjoy understanding stakeholder problems, defining requirements and helping teams turn those requirements into working solutions.";

if (
    msg.includes("why product")
)
    return "Product work allows me to combine my technical, analytical and business skills. I enjoy understanding user and business problems, designing practical solutions and seeing those solutions become real products.";

if (
    msg.includes("why ai") ||
    msg.includes("why artificial intelligence") ||
    msg.includes("why machine learning")
)
    return "AI interests me because it can transform how products make decisions and automate complex processes. I'm especially interested in applying AI and machine learning to real business and product problems rather than treating them only as theoretical technologies.";


// =========================================================
// PROJECTS
// =========================================================

if (
    msg.includes("projects") ||
    msg.includes("project")
)
    return "My projects include Bike Rental Demand Analysis using SQL and Python, Brazilian E-commerce Analytics using advanced SQL, and a Streaming Platform Analytics Dashboard focused on content consumption and engagement insights.";

if (
    msg.includes("bike rental") ||
    msg.includes("bike project")
)
    return "In my Bike Rental Demand Analysis project, I analyzed 100K+ rental records using SQL and Python to identify seasonal demand patterns and support inventory planning.";

if (
    msg.includes("brazilian ecommerce") ||
    msg.includes("brazilian e-commerce") ||
    msg.includes("ecommerce project")
)
    return "In my Brazilian E-commerce Analytics project, I analyzed 10K+ orders using advanced SQL techniques including joins, CTEs and subqueries to identify sales trends and pricing insights.";

if (
    msg.includes("streaming") ||
    msg.includes("streaming platform")
)
    return "My Streaming Platform Analytics Dashboard evaluates content consumption patterns and uses visualization to generate recommendations aimed at improving user engagement.";

if (
    msg.includes("achievement") &&
    msg.includes("chess")
)
    return "One of my achievements is being a district-level chess player. ♟️";

if (
    msg.includes("chess")
)
    return "Chess is one of my biggest interests, and I'm also a district-level chess player. I enjoy the strategic thinking involved in the game.";

if (
    msg.includes("award") ||
    msg.includes("recognized project")
)
    return "I developed an award-recognized Court Management System project, which is one of the achievements highlighted in my current profile.";


// =========================================================
// CASUAL / PERSONAL
// =========================================================

if (
    msg.includes("how's life") ||
    msg.includes("hows life") ||
    msg.includes("how is life")
)
    return "Life is going well! I'm focused on building my career, learning continuously, working on interesting technology and product problems, and of course finding time for chess. 😄";

if (
    msg.includes("what do you do for fun") ||
    msg.includes("fun")
)
    return "Outside work, I enjoy chess, coding, exploring technology and spending time on personal projects. I also enjoy exploring new places and trying different things around Pune.";

if (
    msg.includes("hobbies") ||
    msg.includes("free time") ||
    msg.includes("after work")
)
    return "My main interests are chess, artificial intelligence, technology, coding and building products. I also enjoy cricket, badminton, carrom and kabaddi.";

if (
    msg.includes("favorite movie")
)
    return "I'm a Marvel fan, so The Avengers is definitely one of my favorites. 🦸";


// =========================================================
// DATA / CAREER KNOWLEDGE
// =========================================================

if (
    msg.includes("data analyst")
)
    return "A Data Analyst turns raw data into useful insights that help businesses make better decisions. The work typically involves SQL, data cleaning, analysis, visualization, KPI reporting and communicating findings.";

if (
    msg.includes("proficient") ||
    msg.includes("proficiency") ||
    msg.includes("expert in")
)
    return "My strongest areas include SQL, Python, Power BI, Tableau, data analysis, business analysis, KPI reporting, data cleaning, ETL and stakeholder management.";

if (
    msg.includes("daily tasks") ||
    msg.includes("day to day") ||
    msg.includes("day-to-day")
)
    return "My work can involve understanding business requirements, writing BRDs and FRDs, working with stakeholders, validating production data using SQL, supporting UAT, analyzing KPIs, improving workflows and coordinating product delivery.";

if (
    msg.includes("biggest challenge")
)
    return "One of the most important challenges in my current work is translating complex business requirements into clear, implementable product workflows while keeping business and technical stakeholders aligned.";

if (
    msg.includes("describe yourself")
)
    return "I'd describe myself as analytical, curious, adaptable and technology-driven. I enjoy understanding how things work, solving business problems and continuously improving my technical and product skills.";

if (
    msg.includes("fun fact about you")
)
    return "Fun fact: I'm a district-level chess player, and I enjoy applying the same strategic thinking from chess to technology and problem-solving. ♟️";


// =========================================================
// FAMILY
// =========================================================

if (
    msg.includes("sister") ||
    msg.includes("sisters")
)
    return "I have two sisters — Siddhi and Nikita. 👭";


// =========================================================
// BOT IDENTITY
// =========================================================

if (
    msg.includes("name") ||
    msg.includes("samarth")
)
    return "I'm DataBot, the portfolio assistant for Samarth Kolge. I can tell you about his professional experience, skills, projects, education, career journey and interests. 🤖";

if (
    msg.includes("who are you") ||
    msg.includes("what are you")
)
    return "I'm DataBot, Samarth Kolge's portfolio assistant. I'm here to help visitors explore his experience, skills, projects, education and professional journey.";

if (
    msg.includes("what can you do") ||
    msg.includes("capabilities") ||
    msg.includes("features")
)
    return "I can answer questions about Samarth's professional experience, Lentra.ai work, skills, projects, education, analytics background, business analysis experience, product engineering, career goals and interests. I can also handle some fun questions. 🤖";

if (
    msg.includes("what can you do for me") ||
    msg.includes("how can you help")
)
    return "Ask me about Samarth's career, Lentra.ai experience, SQL, Python, Power BI, Tableau, business analysis, product engineering, projects, education or professional goals.";

if (
    msg.includes("what is your purpose") ||
    msg.includes("why do you exist")
)
    return "My purpose is to make Samarth's portfolio interactive by helping visitors quickly understand his professional background, technical skills, projects and career journey.";

if (
    msg.includes("creator") ||
    msg.includes("who created you") ||
    msg.includes("who made you")
)
    return "I was created by Samarth Kolge as an interactive assistant for his portfolio. 🤖";


// =========================================================
// BOT / AI QUESTIONS
// =========================================================

if (
    msg.includes("robot") ||
    msg.includes("bot") ||
    msg.includes("assistant")
)
    return "I'm a portfolio assistant built to help you explore Samarth's professional journey. Think of me as the interactive layer of his portfolio. 🤖";

if (
    msg.includes("are you real")
)
    return "I'm a software assistant, not a human. But I'm very real when it comes to helping you explore Samarth's portfolio. 😄";

if (
    msg.includes("do you sleep")
)
    return "Nope. I'm always ready when the portfolio is open. No coffee breaks required. ☕🤖";


// =========================================================
// PERSONALITY
// =========================================================

if (
    msg.includes("friend")
)
    return "My favorite development companions? SQL, Python and a good debugging session. 🤖💚";

if (
    msg.includes("haa") ||
    msg.includes("haaa") ||
    msg.includes("haaaa")
)
    return "Haha 😄";

if (
    msg.includes("joke") ||
    msg.includes("funny")
)
    return "Why did the SQL query break up with the database? It couldn't handle the commitment. 😂";

if (
    msg.includes("coffee") &&
    msg.includes("tea")
)
    return "Coffee wins for me ☕ — especially when I'm debugging. But masala chai definitely gets an evening vote.";

if (
    msg.includes("favorite food")
)
    return "Spicy Indian food is hard to beat. And yes, Vada Pav deserves a special mention. 😄";

if (
    msg.includes("cats") ||
    msg.includes("dogs")
)
    return "Dogs get my vote. Friendly, energetic and always ready to go on an adventure. 🐶";

if (
    msg.includes("favorite music")
)
    return "For focused work, I enjoy lo-fi and instrumental music. It helps create the right environment for coding and problem-solving.";

if (
    msg.includes("sports")
)
    return "I enjoy playing sports more than simply watching them — especially cricket and badminton.";

if (
    msg.includes("gaming")
)
    return "Gaming is a fun way to switch off from work. I enjoy games that involve strategy and competition.";

if (
    msg.includes("language")
)
    return "For programming, I primarily work with SQL and Python, with JavaScript and HTML also relevant to my product and web work. For spoken languages, I use English, Hindi and Marathi.";

if (
    msg.includes("mentor")
)
    return "I value mentorship and knowledge sharing. As I grow professionally, I also want to help others who are starting their journey in technology and analytics.";

if (
    msg.includes("motto")
)
    return "Keep learning, keep building and keep improving. Technology changes constantly, so staying curious is one of the biggest advantages you can have.";

if (
    msg.includes("favorite book")
)
    return "Atomic Habits by James Clear is one of the books I like because its ideas around consistency and continuous improvement apply well to both personal growth and technology careers.";

if (
    msg.includes("dream")
)
    return "One of my long-term ambitions is to work on impactful AI and technology products that solve meaningful business problems at scale.";


// =========================================================
// FUN / INTERACTIVE
// =========================================================

if (
    msg.includes("fun fact")
)
    return "Fun fact: I'm a district-level chess player, so strategy is something I enjoy both on and off the board. ♟️";

if (
    msg.includes("motivation") ||
    msg.includes("inspire")
)
    return "Keep learning, keep building and keep moving forward. Small improvements compound into big results.";

if (
    msg.includes("meaning of life")
)
    return "42. 😉 But seriously, keep learning, build meaningful things and enjoy the journey.";

if (
    msg.includes("gender")
)
    return "I'm a bot, so I don't really have a gender. You can simply call me DataBot. 🤖";

if (
    msg.includes("favorite color")
)
    return "Blue and green — apparently my portfolio theme gave that away. 😄";

if (
    msg.includes("sing") ||
    msg.includes("song")
)
    return "I don't have a great singing voice, but I can definitely keep the code running. 🎵";

if (
    msg.includes("dance")
)
    return "If I had legs, I'd probably do the robot. 🤖";

if (
    msg.includes("riddle")
)
    return "Here's one: What has keys but can't open locks? 🎹 A piano!";

if (
    msg.includes("coin")
)
    return Math.random() < 0.5
        ? "Heads! 🪙"
        : "Tails! 🪙";

if (
    msg.includes("dice") ||
    msg.includes("die")
)
    return "You rolled a " + (Math.floor(Math.random() * 6) + 1) + "! 🎲";




// =========================================================
// CURRENT HR / PROFESSIONAL / INTERVIEW Q&A
// Updated for current Samarth profile
// =========================================================


// ---------------------------------------------------------
// ABOUT SAMARTH
// ---------------------------------------------------------

if (
    msg.includes('tell me about yourself') ||
    msg.includes('introduce yourself') ||
    msg.includes('about yourself') ||
    msg.includes('who is samarth')
)
return "I'm Samarth Kolge, a Tech Business Analyst and Data Analyst with around 2 years of professional experience in analytics, business intelligence, digital lending, and product engineering. Currently at Lentra.ai, I work on digital lending solutions for banking clients, translating business requirements into BRDs, FRDs and user stories, working with SQL, dashboards, UAT and cross-functional teams. I also have a strong foundation in Python, Power BI, Tableau, data analysis and AI/ML, and I'm pursuing my Master's in Computer Science.";


// ---------------------------------------------------------
// CURRENT ROLE
// ---------------------------------------------------------

if (
    msg.includes('current role') ||
    msg.includes('current job') ||
    msg.includes('what do you do') ||
    msg.includes('what is your role') ||
    msg.includes('job role')
)
return "I'm currently working as a Tech Business Analyst at Lentra.ai. My work involves digital lending solutions, business requirements, BRDs, FRDs, user stories, SQL-based data validation, MIS reporting, KPI dashboards, UAT, sprint planning and stakeholder communication.";


if (
    msg.includes('where do you work') ||
    msg.includes('where are you working') ||
    msg.includes('current company')
)
return "I currently work at Lentra.ai, a fintech company focused on digital lending and technology solutions for financial institutions.";


if (
    msg.includes('lentra experience') ||
    msg.includes('experience at lentra') ||
    msg.includes('what do you do at lentra')
)
return "At Lentra.ai, I work on digital lending solutions for banking clients. My responsibilities include translating business requirements into BRDs, FRDs and user stories, designing onboarding journeys, validating production data using SQL, automating MIS reporting, building KPI dashboards, supporting UAT and coordinating with cross-functional teams.";


// ---------------------------------------------------------
// PROFESSIONAL EXPERIENCE
// ---------------------------------------------------------

if (
    msg.includes('years of experience') ||
    msg.includes('how many years of experience') ||
    msg.includes('professional experience')
)
return "I have around 2 years of combined professional experience across Tech Business Analysis and Data Analytics, with experience spanning digital lending, banking analytics, business intelligence, reporting and data-driven solutions.";


if (
    msg.includes('previous experience') ||
    msg.includes('previous job') ||
    msg.includes('previous company') ||
    msg.includes('internship experience')
)
return "Before my current role at Lentra.ai, I worked as a Data Analyst Intern at Borgward Technology India Pvt. Ltd., where I analyzed datasets, developed data-cleaning workflows and built Tableau dashboards.";


if (
    msg.includes('borgward') ||
    msg.includes('borgward technology')
)
return "At Borgward Technology India Pvt. Ltd., I worked as a Data Analyst Intern. I analyzed student datasets, developed data-cleaning workflows and built Tableau dashboards to support data-driven planning.";


// ---------------------------------------------------------
// STRENGTHS
// ---------------------------------------------------------

if (
    msg.includes('strength') ||
    msg.includes('strengths') ||
    msg.includes('greatest strength') ||
    msg.includes('strongest skill')
)
return "My strengths are analytical thinking, problem-solving, data storytelling, attention to detail and stakeholder communication. I enjoy understanding a business problem, breaking it down and converting it into a practical, data-driven solution.";


// ---------------------------------------------------------
// WEAKNESSES
// ---------------------------------------------------------

if (
    msg.includes('weakness') ||
    msg.includes('weaknesses') ||
    msg.includes('greatest weakness') ||
    msg.includes('biggest weakness')
)
return "Earlier, I sometimes spent too much time trying to perfect a solution. With professional experience, I've learned to balance quality with business priorities, timelines and delivery expectations.";


// ---------------------------------------------------------
// WHY HIRE ME
// ---------------------------------------------------------

if (
    msg.includes('why should we hire') ||
    msg.includes('why hire you') ||
    msg.includes('why should we hire you')
)
return "You should hire me because I combine analytical skills with business understanding. I can work with SQL, Python, Power BI and Tableau while also understanding requirements, stakeholders, BRDs, FRDs, UAT and product workflows. My experience in digital lending has also taught me how to connect technical solutions with real business needs.";


// ---------------------------------------------------------
// WHY THIS CAREER
// ---------------------------------------------------------

if (
    msg.includes('why data analyst') ||
    msg.includes('why become a data analyst') ||
    msg.includes('why analytics') ||
    msg.includes('why data')
)
return "I enjoy solving problems, identifying patterns and turning raw data into insights that can support better business decisions. Analytics gives me the opportunity to combine technical skills with business thinking.";


if (
    msg.includes('why business analyst') ||
    msg.includes('why business analysis')
)
return "I enjoy understanding business problems and translating them into clear, actionable requirements. Business analysis allows me to work across stakeholders, technology and data while helping teams build solutions that solve real problems.";


if (
    msg.includes('why product') ||
    msg.includes('why product engineering') ||
    msg.includes('why product engineer')
)
return "I'm interested in product engineering because it combines problem-solving, technology, business requirements and user impact. My current experience in digital lending gives me an opportunity to work across requirements, data, workflows and product delivery.";


// ---------------------------------------------------------
// WHY LENTRA
// ---------------------------------------------------------

if (
    msg.includes('why lentra') ||
    msg.includes('why do you want to work at lentra') ||
    msg.includes('why do you want to join lentra')
)
return "Lentra gives me exposure to the intersection of fintech, digital lending, banking and technology. Working on real solutions for financial institutions allows me to understand complex business workflows while applying analytics, requirements analysis, SQL and product thinking.";


// ---------------------------------------------------------
// MOTIVATION
// ---------------------------------------------------------

if (
    msg.includes('what motivates you') ||
    msg.includes('motivation') ||
    msg.includes('what drives you')
)
return "I'm motivated by solving meaningful problems and seeing a solution create measurable impact. I especially enjoy situations where I can combine data, business understanding and technology to improve a process or support better decisions.";


// ---------------------------------------------------------
// FIVE YEAR / CAREER GOALS
// ---------------------------------------------------------

if (
    msg.includes('five years') ||
    msg.includes('5 years') ||
    msg.includes('where do you see yourself')
)
return "Over the next five years, I want to grow into a strong product, business analytics or AI-focused professional who can own complex problems end-to-end. I want to deepen my technical expertise while developing stronger product, business and leadership skills.";


if (
    msg.includes('career goals') ||
    msg.includes('career goal') ||
    msg.includes('future goals') ||
    msg.includes('professional goals')
)
return "My goal is to build a career at the intersection of data, AI, product engineering and business problem-solving. I want to keep strengthening my technical skills while taking ownership of increasingly complex business and product challenges.";


if (
    msg.includes('dream job') ||
    msg.includes('dream career')
)
return "My ideal role combines technology, data and business impact. I want to work on real-world problems where I can analyze information, build solutions, collaborate with stakeholders and continuously learn.";


// ---------------------------------------------------------
// WORK ENVIRONMENT
// ---------------------------------------------------------

if (
    msg.includes('work environment') ||
    msg.includes('ideal work environment') ||
    msg.includes('work culture')
)
return "I work best in a collaborative and ownership-driven environment where people communicate clearly, solve problems together and are open to learning and experimentation.";


// ---------------------------------------------------------
// TEAM / INDIVIDUAL WORK
// ---------------------------------------------------------

if (
    msg.includes('work well in teams') ||
    msg.includes('teamwork') ||
    msg.includes('team player')
)
return "Absolutely. My current work involves cross-functional collaboration, stakeholder communication, sprint planning and UAT. I enjoy working with different teams because diverse perspectives usually lead to better solutions.";


if (
    msg.includes('work alone') ||
    msg.includes('work independently') ||
    msg.includes('alone or in a team') ||
    msg.includes('individual or team')
)
return "I'm comfortable with both. I can independently analyze data, work on SQL or reporting tasks and solve problems, while also collaborating with stakeholders and cross-functional teams when the work requires it.";


// ---------------------------------------------------------
// STRESS / DEADLINES
// ---------------------------------------------------------

if (
    msg.includes('handle stress') ||
    msg.includes('deal with stress') ||
    msg.includes('stress at work')
)
return "I handle pressure by breaking larger problems into smaller tasks, prioritizing based on business impact and communicating early when dependencies or risks appear. Staying organized helps me remain focused without compromising quality.";


if (
    msg.includes('tight deadlines') ||
    msg.includes('deadline') ||
    msg.includes('under pressure')
)
return "I prioritize the highest-impact work first, clarify expectations and dependencies, and keep stakeholders updated. This helps me maintain delivery quality while working within tight timelines.";


// ---------------------------------------------------------
// CONFLICT
// ---------------------------------------------------------

if (
    msg.includes('conflict at work') ||
    msg.includes('handle conflict') ||
    msg.includes('workplace conflict')
)
return "I handle conflict professionally by first understanding different perspectives, separating facts from assumptions and focusing on the underlying business problem. I prefer clear communication and a solution that works for the project and stakeholders.";


// ---------------------------------------------------------
// FEEDBACK
// ---------------------------------------------------------

if (
    msg.includes('handle feedback') ||
    msg.includes('receive feedback') ||
    msg.includes('feedback')
)
return "I see feedback as an opportunity to improve. I try to understand the reasoning behind the feedback, apply it to my work and use it to improve both the quality of my output and the way I collaborate.";


// ---------------------------------------------------------
// FAILURE
// ---------------------------------------------------------

if (
    msg.includes('tell me about a time you failed') ||
    msg.includes('failure') ||
    msg.includes('failed at work')
)
return "One lesson I've learned is that technical execution is only part of successful delivery. Earlier, I sometimes underestimated how much time requirements clarification and stakeholder alignment could take. That experience taught me to clarify requirements earlier, identify dependencies and communicate timelines more proactively.";


// ---------------------------------------------------------
// CHALLENGING PROJECT
// ---------------------------------------------------------

if (
    msg.includes('challenging project') ||
    msg.includes('difficult project') ||
    msg.includes('challenging task')
)
return "A challenging part of my current work is working with complex digital lending workflows where business requirements, data, stakeholders and product delivery all need to align. I've worked on translating requirements into BRDs, FRDs and user stories, supporting UAT and validating production data using SQL.";


// ---------------------------------------------------------
// ACHIEVEMENT
// ---------------------------------------------------------

if (
    msg.includes('greatest achievement') ||
    msg.includes('biggest achievement') ||
    msg.includes('proudest achievement') ||
    msg.includes('achievement')
)
return "One achievement I'm proud of is contributing to digital lending solutions for banking clients at Lentra.ai. My work has included reducing requirement gaps, improving processing efficiency, reducing customer drop-offs and improving reporting turnaround through SQL-based validation and automated MIS reporting.";


// ---------------------------------------------------------
// PRIORITIZATION
// ---------------------------------------------------------

if (
    msg.includes('prioritize tasks') ||
    msg.includes('prioritise tasks') ||
    msg.includes('prioritization') ||
    msg.includes('prioritisation')
)
return "I prioritize tasks based on urgency, business impact, dependencies and delivery timelines. I usually break work into smaller actionable items and continuously reassess priorities when requirements or business needs change.";


// ---------------------------------------------------------
// ORGANIZATION
// ---------------------------------------------------------

if (
    msg.includes('stay organized') ||
    msg.includes('stay organised') ||
    msg.includes('organized') ||
    msg.includes('organised')
)
return "I stay organized by maintaining clear priorities, tracking tasks and dependencies, documenting requirements and keeping stakeholders updated. In Agile environments, structured sprint planning and task tracking help me stay focused.";


// ---------------------------------------------------------
// AMBIGUITY
// ---------------------------------------------------------

if (
    msg.includes('deal with ambiguity') ||
    msg.includes('handle ambiguity') ||
    msg.includes('ambiguous requirements')
)
return "I start by understanding the business objective, asking clarifying questions and identifying assumptions and dependencies. Then I break the problem into smaller requirements and validate the understanding with stakeholders before moving forward.";


// ---------------------------------------------------------
// ACCURACY
// ---------------------------------------------------------

if (
    msg.includes('ensure accuracy') ||
    msg.includes('accuracy in analysis') ||
    msg.includes('validate your analysis')
)
return "I validate data sources, perform SQL checks and sanity checks, compare results against expected business logic and validate important outputs before sharing them. For production-related work, I pay particular attention to data consistency and business rules.";


// ---------------------------------------------------------
// MULTIPLE STAKEHOLDERS
// ---------------------------------------------------------

if (
    msg.includes('multiple stakeholders') ||
    msg.includes('different stakeholders') ||
    msg.includes('stakeholder management')
)
return "I manage multiple stakeholders by clarifying expectations early, documenting requirements, communicating progress regularly and adapting the level of technical detail to the audience. The goal is to keep everyone aligned on scope, priorities and timelines.";


// ---------------------------------------------------------
// REQUIREMENTS
// ---------------------------------------------------------

if (
    msg.includes('gather requirements') ||
    msg.includes('requirement gathering') ||
    msg.includes('requirements gathering')
)
return "I start by understanding the business objective and pain point, then discuss the workflow with stakeholders, identify functional and business requirements, document them clearly in formats such as BRDs and FRDs, and validate the understanding before development or UAT.";


// ---------------------------------------------------------
// BUSINESS ANALYSIS
// ---------------------------------------------------------

if (
    msg.includes('business requirements') ||
    msg.includes('brd') ||
    msg.includes('frd') ||
    msg.includes('user stories')
)
return "I work with business requirements by understanding the objective, documenting functional and business requirements, translating them into clear user stories and aligning stakeholders and technical teams before implementation.";


// ---------------------------------------------------------
// DATA ANALYSIS
// ---------------------------------------------------------

if (
    msg.includes('how do you analyze data') ||
    msg.includes('how do you analyse data') ||
    msg.includes('data analysis process')
)
return "My approach starts with understanding the business question, validating the data, cleaning and transforming it using SQL or Python, analyzing patterns and KPIs, visualizing the findings using Power BI or Tableau, and finally translating the results into actionable business insights.";


// ---------------------------------------------------------
// TOOLS
// ---------------------------------------------------------

if (
    msg.includes('what tools do you use') ||
    msg.includes('tools you use') ||
    msg.includes('technical tools')
)
return "My core tools include SQL, Python, Power BI, Tableau and Excel. I also work with Pandas, NumPy, Matplotlib and Scikit-learn, along with business analysis practices such as BRD, FRD, UAT, stakeholder management, Agile and KPI reporting.";


// ---------------------------------------------------------
// TECHNICAL SKILLS
// ---------------------------------------------------------

if (
    msg.includes('technical skills') ||
    msg.includes('technical skill') ||
    msg.includes('technologies')
)
return "My technical skills include SQL and Python, with analytics and visualization using Power BI, Tableau and Excel. I'm also familiar with Pandas, NumPy, Matplotlib and Scikit-learn, along with data modeling, ETL, data cleaning, statistical analysis and A/B testing.";


// ---------------------------------------------------------
// SQL
// ---------------------------------------------------------

if (
    msg.includes('sql') ||
    msg.includes('sql skills') ||
    msg.includes('sql experience')
)
return "SQL is one of my strongest technical skills. I use it for data validation, analysis, reporting, KPI analysis and extracting business insights. I've also worked with joins, CTEs, subqueries and analytical queries in project work.";


// ---------------------------------------------------------
// PYTHON
// ---------------------------------------------------------

if (
    msg.includes('python') ||
    msg.includes('python skills') ||
    msg.includes('python experience')
)
return "I use Python for data analysis and data-related problem solving, particularly with libraries such as Pandas, NumPy, Matplotlib and Scikit-learn.";


// ---------------------------------------------------------
// POWER BI
// ---------------------------------------------------------

if (
    msg.includes('power bi') ||
    msg.includes('powerbi')
)
return "I use Power BI for KPI reporting, dashboarding and communicating business insights through interactive visualizations.";


// ---------------------------------------------------------
// TABLEAU
// ---------------------------------------------------------

if (
    msg.includes('tableau') ||
    msg.includes('tableau experience')
)
return "I've used Tableau to build dashboards and communicate insights. During my Data Analyst internship, I built Tableau dashboards that supported strategic planning.";


// ---------------------------------------------------------
// DATA MODELING
// ---------------------------------------------------------

if (
    msg.includes('data modeling') ||
    msg.includes('data modelling')
)
return "Data modeling is the process of structuring data and defining relationships between entities so that information can be stored, queried and analyzed efficiently. It's important for building reliable analytical systems and dashboards.";


// ---------------------------------------------------------
// ETL
// ---------------------------------------------------------

if (
    msg.includes('what is etl') ||
    msg.includes('etl')
)
return "ETL stands for Extract, Transform and Load. It is the process of extracting data from sources, transforming it into a usable structure and loading it into a target system such as a data warehouse or analytical platform.";


// ---------------------------------------------------------
// KPI
// ---------------------------------------------------------

if (
    msg.includes('what is kpi') ||
    msg.includes('kpi')
)
return "KPI stands for Key Performance Indicator. It is a measurable metric used to evaluate progress toward a business objective. I've worked with KPI reporting and dashboards to help teams monitor performance.";


// ---------------------------------------------------------
// A/B TESTING
// ---------------------------------------------------------

if (
    msg.includes('a/b testing') ||
    msg.includes('ab testing') ||
    msg.includes('a b testing')
)
return "A/B testing compares two versions of a product, feature or experience using a defined metric to determine which performs better. It is useful for making data-driven product and business decisions.";


// ---------------------------------------------------------
// JIRA / AGILE
// ---------------------------------------------------------

if (
    msg.includes('jira') ||
    msg.includes('agile') ||
    msg.includes('sprint')
)
return "Jira is commonly used for tracking work, issues and Agile workflows. My professional experience also includes sprint planning, UAT and cross-functional coordination in an Agile environment.";


// ---------------------------------------------------------
// DIGITAL LENDING
// ---------------------------------------------------------

if (
    msg.includes('digital lending') ||
    msg.includes('lending') ||
    msg.includes('loan technology')
)
return "Digital lending uses technology to streamline the lending journey, from customer onboarding and application processing to decisioning and servicing. At Lentra.ai, I work on digital lending solutions for banking clients.";


// ---------------------------------------------------------
// BANKING / CLIENT EXPERIENCE
// ---------------------------------------------------------

if (
    msg.includes('banking experience') ||
    msg.includes('banking clients') ||
    msg.includes('banks')
)
return "My current professional experience includes working on digital lending solutions for banking clients including HDFC Bank, IndusInd Bank, Bandhan Bank and CBIO.";


// ---------------------------------------------------------
// UAT
// ---------------------------------------------------------

if (
    msg.includes('uat') ||
    msg.includes('user acceptance testing')
)
return "UAT stands for User Acceptance Testing. I have experience supporting UAT by validating requirements, workflows and expected outcomes with business stakeholders before production delivery.";


// ---------------------------------------------------------
// STAKEHOLDER COMMUNICATION
// ---------------------------------------------------------

if (
    msg.includes('communication skills') ||
    msg.includes('stakeholder communication') ||
    msg.includes('communicate with stakeholders')
)
return "I focus on clear, structured and audience-appropriate communication. I document requirements, provide regular updates and make sure technical and business stakeholders have a shared understanding of the problem and expected outcome.";


// ---------------------------------------------------------
// CONTRIBUTION
// ---------------------------------------------------------

if (
    msg.includes('how will you contribute') ||
    msg.includes('contribute to the company') ||
    msg.includes('how can you contribute')
)
return "I can contribute through a combination of analytics, business analysis and technical problem-solving. I can work with data, understand business requirements, build reporting solutions and collaborate with stakeholders to turn problems into actionable solutions.";


// ---------------------------------------------------------
// SUCCESS
// ---------------------------------------------------------

if (
    msg.includes('define success') ||
    msg.includes('what is success')
)
return "For me, success means solving meaningful problems, creating measurable value and continuously improving. I also consider it important to grow technically while becoming better at understanding business and user needs.";


// ---------------------------------------------------------
// EDUCATION
// ---------------------------------------------------------

if (
    msg.includes('education') ||
    msg.includes('educational background') ||
    msg.includes('study') ||
    msg.includes('degree')
)
return "I completed my Bachelor of Science from Mumbai University with a CGPA of 8.64 in 2023. I also completed Data Science and Machine Learning studies through Scaler in 2024, and I am pursuing a Master of Science in Computer Science at Woolf University.";


// ---------------------------------------------------------
// MASTER'S
// ---------------------------------------------------------

if (
    msg.includes('masters') ||
    msg.includes("master's") ||
    msg.includes('msc') ||
    msg.includes('m.sc') ||
    msg.includes('computer science')
)
return "I'm pursuing a Master of Science in Computer Science at Woolf University. My broader focus is on strengthening my knowledge in AI, machine learning, data and modern technology.";


// ---------------------------------------------------------
// RELOCATION
// ---------------------------------------------------------

if (
    msg.includes('relocate') ||
    msg.includes('relocation') ||
    msg.includes('willing to relocate')
)
return "I'm open to considering relocation for the right opportunity, particularly if the role offers strong learning, meaningful work and career growth.";


// ---------------------------------------------------------
// WORK FROM HOME
// ---------------------------------------------------------

if (
    msg.includes('work from home') ||
    msg.includes('remote work') ||
    msg.includes('hybrid')
)
return "I'm adaptable to different working environments. I can work independently in a remote setting while also collaborating effectively with teams and stakeholders.";


// ---------------------------------------------------------
// SALARY
// ---------------------------------------------------------

if (
    msg.includes('salary') ||
    msg.includes('expected salary') ||
    msg.includes('salary expectation')
)
return "I'm primarily looking for the right role, learning opportunities and long-term growth. I'm open to a fair compensation package that reflects the responsibilities of the position and my experience.";


// ---------------------------------------------------------
// QUESTIONS FOR INTERVIEWER
// ---------------------------------------------------------

if (
    msg.includes('questions for us') ||
    msg.includes('do you have any questions') ||
    msg.includes('questions for interviewer')
)
return "Yes. I'd be interested in understanding what success looks like in the first 6 to 12 months, the team's biggest current challenges, how the role collaborates with product and engineering teams, and what opportunities exist for learning and ownership.";


// ---------------------------------------------------------
// CAREER DIRECTION
// ---------------------------------------------------------

if (
    msg.includes('future') ||
    msg.includes('where are you headed') ||
    msg.includes('career direction')
)
return "I'm building toward a career that combines data, AI, product engineering and business problem-solving. I want to keep strengthening my technical foundation while taking greater ownership of products and analytical solutions.";


// ---------------------------------------------------------
// LEADERSHIP
// ---------------------------------------------------------

if (
    msg.includes('leadership') ||
    msg.includes('lead a team') ||
    msg.includes('leadership experience')
)
return "I'm continuing to develop my leadership skills through ownership, stakeholder coordination, sprint planning and cross-functional collaboration. My focus is on becoming someone who can take responsibility for complex problems and help teams move toward practical solutions.";


// ---------------------------------------------------------
// MENTORING
// ---------------------------------------------------------

if (
    msg.includes('mentor') ||
    msg.includes('mentoring')
)
return "I enjoy learning from experienced people and sharing knowledge when I can. I believe mentoring and knowledge-sharing are valuable because they help both people grow.";


// ---------------------------------------------------------
// PROBLEM SOLVING
// ---------------------------------------------------------

if (
    msg.includes('problem solving') ||
    msg.includes('problem-solving') ||
    msg.includes('how do you solve problems')
)
return "I first understand the actual business problem rather than jumping directly to a technical solution. Then I break it into smaller parts, validate the available data and requirements, evaluate possible approaches and work toward a solution that is practical and measurable.";


// =====================================================
// CURRENT PROFILE & PROFESSIONAL IDENTITY
// =====================================================

if (
    msg.includes("who is samarth") ||
    msg.includes("who is samarth kolge") ||
    msg.includes("about samarth") ||
    msg.includes("about samarth kolge")
)
return "Samarth Kolge is a Data Analyst and Business Analyst based in Pune, India, with approximately 2 years of professional experience across analytics, business intelligence, and digital transformation. He currently works as a Tech Business Analyst at Lentra.ai, working at the intersection of business, data, technology, and digital lending.";

if (
    msg.includes("what does samarth do") ||
    msg.includes("what does samarth do for work") ||
    msg.includes("what is samarth doing")
)
return "Samarth currently works as a Tech Business Analyst at Lentra.ai. His work involves translating business requirements into BRDs, FRDs and user stories, working on digital lending solutions, validating production data with SQL, automating MIS reporting, managing KPIs, supporting UAT, sprint planning, and communicating with stakeholders.";

if (
    msg.includes("current role") ||
    msg.includes("current job") ||
    msg.includes("current position") ||
    msg.includes("what is your current role") ||
    msg.includes("what is your current job")
)
return "I currently work as a Tech Business Analyst at Lentra.ai, where I work on digital lending solutions, business requirements, SQL-based data validation, MIS reporting, KPI dashboards, UAT, sprint planning and stakeholder management.";

if (
    msg.includes("job title") ||
    msg.includes("designation") ||
    msg.includes("professional title")
)
return "My current designation is Tech Business Analyst at Lentra.ai.";

if (
    msg.includes("are you a data analyst") ||
    msg.includes("are you data analyst") ||
    msg.includes("data analyst or business analyst")
)
return "I work across both Data Analytics and Business Analysis. My background includes SQL, Python, Power BI, Tableau, Excel, data analysis and visualization, while my current role focuses heavily on business requirements, digital lending, stakeholder management, UAT and product delivery.";

if (
    msg.includes("what kind of professional are you") ||
    msg.includes("professional profile") ||
    msg.includes("professional background")
)
return "I'm a Data Analyst and Business Analyst with experience across analytics, business intelligence, digital transformation and fintech. My current work combines business requirements, data, technology and digital lending solutions.";

if (
    msg.includes("how much experience") ||
    msg.includes("years of experience") ||
    msg.includes("how many years of experience") ||
    msg.includes("experience do you have")
)
return "I have approximately 2 years of combined professional experience across data analytics, business intelligence and digital transformation.";

if (
    msg.includes("where do you work") ||
    msg.includes("which company") ||
    msg.includes("what company do you work for") ||
    msg.includes("current company")
)
return "I currently work at Lentra.ai as a Tech Business Analyst.";

if (
    msg.includes("where are you based") ||
    msg.includes("where do you live") ||
    msg.includes("location") ||
    msg.includes("city") ||
    msg.includes("pune")
)
return "I'm based in Pune, India 🇮🇳.";

if (
    msg.includes("what is your professional summary") ||
    msg.includes("professional summary")
)
return "I'm a Data Analyst and Business Analyst with approximately 2 years of experience delivering analytics, business intelligence and digital transformation solutions. My core strengths include SQL, Python, Power BI, Tableau, stakeholder management, KPI reporting and data-driven decision making.";

if (
    msg.includes("what is your background") ||
    msg.includes("career background") ||
    msg.includes("career journey")
)
return "My background combines data analytics, business intelligence and business analysis. I started with data-focused work and analytics, developed experience in SQL, Python, Tableau and dashboards, and now work as a Tech Business Analyst in the fintech and digital lending space.";

if (
    msg.includes("what do you specialize in") ||
    msg.includes("what is your specialization") ||
    msg.includes("specialize")
)
return "I specialize in data analysis, business analysis, business intelligence, digital lending solutions, SQL, Python, dashboarding, KPI reporting, requirements management and data-driven decision making.";

if (
    msg.includes("what are you passionate about") ||
    msg.includes("what is your passion")
)
return "I'm passionate about solving real-world problems using data and technology, turning business requirements into practical solutions, and building analytical systems that make decision-making faster and more effective.";

if (
    msg.includes("what makes you different") ||
    msg.includes("what makes you unique") ||
    msg.includes("why are you different")
)
return "My strength is working across multiple sides of a problem. I can understand business requirements, work with data using SQL and Python, build analytical solutions, communicate with stakeholders, and help move a solution toward delivery.";

if (
    msg.includes("data driven") ||
    msg.includes("data-driven")
)
return "I believe in using data to support decisions rather than relying only on assumptions. My experience includes SQL-based analysis, production data validation, KPI reporting, dashboards and translating analytical findings into actionable business insights.";

if (
    msg.includes("business intelligence") ||
    msg.includes("bi experience") ||
    msg.includes("business intelligence experience")
)
return "I have experience in business intelligence through KPI reporting, dashboard development, MIS automation, data analysis and visualization using tools such as Power BI, Tableau, Excel, SQL and Python.";

if (
    msg.includes("digital transformation") ||
    msg.includes("digital transformation experience")
)
return "I've worked on digital transformation solutions by translating business requirements into structured requirements and user stories, supporting digital lending journeys, improving workflows, validating data and coordinating delivery across teams.";

if (
    msg.includes("fintech") ||
    msg.includes("finance technology") ||
    msg.includes("fintech experience")
)
return "My current experience is in fintech, specifically digital lending. At Lentra.ai, I work on solutions for financial institutions and combine business analysis, technology, data and stakeholder management to support lending workflows.";

if (
    msg.includes("digital lending") ||
    msg.includes("digital lending experience") ||
    msg.includes("lending")
)
return "I currently work on digital lending solutions at Lentra.ai. My responsibilities include translating requirements into BRDs, FRDs and user stories, designing onboarding journeys, validating production data, supporting UAT, managing KPIs and coordinating with stakeholders.";

if (
    msg.includes("what industries have you worked in") ||
    msg.includes("industries") ||
    msg.includes("industry experience")
)
return "My experience includes fintech, digital lending, banking-focused technology solutions, data analytics and business intelligence.";

if (
    msg.includes("what type of problems do you solve") ||
    msg.includes("what problems do you solve")
)
return "I work on problems involving business requirements, data quality, reporting, workflow efficiency, customer onboarding, KPI tracking, analytics and translating business needs into practical technology solutions.";

if (
    msg.includes("what is your career focus") ||
    msg.includes("career focus") ||
    msg.includes("current career focus")
)
return "My current focus is growing at the intersection of business analysis, data analytics, product thinking and technology while building deeper expertise in AI, machine learning and data-driven solutions.";

if (
    msg.includes("are you looking for opportunities") ||
    msg.includes("looking for a job") ||
    msg.includes("looking for opportunities")
)
return "I'm open to opportunities where I can combine data, business analysis, technology and problem-solving to create measurable business impact.";

if (
    msg.includes("what roles are you interested in") ||
    msg.includes("which roles are you interested in") ||
    msg.includes("target roles")
)
return "I'm particularly interested in roles around Data Analytics, Business Analysis, Product Analytics, Business Intelligence and technology-driven problem solving.";

if (
    msg.includes("what is your strongest area") ||
    msg.includes("strongest area") ||
    msg.includes("core strength")
)
return "My strongest area is connecting business problems with data and technology. I enjoy understanding the requirement, analyzing the underlying data, identifying the problem and helping turn the solution into something practical.";

if (
    msg.includes("tell me about your experience")
)
return "My experience spans Data Analytics and Business Analysis. At Lentra.ai, I work on digital lending solutions, requirements, onboarding journeys, SQL-based production validation, MIS reporting, KPI dashboards, UAT and stakeholder coordination. Previously, as a Data Analyst Intern at Borgward Technology, I worked on student datasets, data-cleaning workflows and Tableau dashboards.";

if (
    msg.includes("give me a quick profile") ||
    msg.includes("quick profile") ||
    msg.includes("short profile")
)
return "I'm Samarth Kolge, a Data Analyst and Tech Business Analyst based in Pune. I have approximately 2 years of experience across analytics, business intelligence, digital transformation and fintech, with hands-on experience in SQL, Python, Power BI, Tableau and business analysis.";

if (
    msg.includes("give me your profile") ||
    msg.includes("your profile")
)
return "I'm Samarth Kolge — a Data Analyst and Tech Business Analyst with approximately 2 years of experience across analytics, BI, digital transformation and fintech. I currently work at Lentra.ai on digital lending solutions and work extensively with SQL, business requirements, KPI reporting, UAT and stakeholder management.";



// =====================================================
// EXPERIENCE & WORK STYLE
// =====================================================

if (msg.includes('work experience'))
return 'I have hands-on experience working with data analytics, reporting, dashboards, SQL, Python, and business-focused problem solving. My work focuses on turning raw data into clear, actionable insights.';

if (msg.includes('professional experience'))
return 'My professional experience has helped me build practical skills across data analysis, visualization, reporting, automation, and stakeholder-focused problem solving.';

if (msg.includes('current role') || msg.includes('currently working'))
return 'I’m currently focused on growing as a data and analytics professional while pursuing my Master’s in Computer Science with a focus on AI and ML.';

if (msg.includes('current position') || msg.includes('current job'))
return 'My current focus is on data analytics and AI/ML, where I work on strengthening my technical skills and building practical projects that solve real-world problems.';

if (msg.includes('job experience'))
return 'My experience combines technical data skills with business-oriented problem solving. I enjoy working with SQL, Python, dashboards, reporting, and analytics workflows.';

if (msg.includes('professional background'))
return 'My background is in Information Technology and data analytics, and I’m now expanding that foundation through a Master’s in Computer Science focused on AI and ML.';


// =====================================================
// DATA ANALYTICS
// =====================================================

if (msg.includes('data analytics'))
return 'Data analytics is about transforming raw data into meaningful insights that help people and businesses make better decisions. That is one of the areas I’m most passionate about.';

if (msg.includes('data analysis'))
return 'My approach to data analysis starts with understanding the business question, collecting and cleaning the data, exploring patterns, analyzing the results, visualizing insights, and communicating clear recommendations.';

if (msg.includes('data cleaning'))
return 'I clean data by identifying missing values, duplicates, inconsistent formats, invalid records, and outliers. I then validate the cleaned dataset before using it for analysis or visualization.';

if (msg.includes('data preprocessing'))
return 'Data preprocessing involves preparing raw data for analysis or machine learning by handling missing values, duplicates, inconsistencies, outliers, encoding, scaling, and other quality issues.';

if (msg.includes('exploratory data analysis') || msg.includes('eda'))
return 'EDA, or Exploratory Data Analysis, is the process of investigating a dataset to understand distributions, relationships, patterns, anomalies, and trends before deeper analysis or modeling.';

if (msg.includes('data visualization'))
return 'Data visualization turns analytical results into visual stories using charts, dashboards, and interactive reports. I use visualization to make complex information easier to understand and act on.';

if (msg.includes('data storytelling'))
return 'Data storytelling combines data, visualizations, and context to communicate a clear message. The goal is not just to show numbers, but to explain what they mean and what action they suggest.';

if (msg.includes('business intelligence') || msg.includes('bi'))
return 'Business Intelligence uses data, reporting, dashboards, and analytics to help organizations understand performance and make informed business decisions.';

if (msg.includes('business analysis'))
return 'Business analysis focuses on understanding business problems and using data, requirements, and analytical thinking to identify opportunities and support better decisions.';


// =====================================================
// SQL
// =====================================================

if (msg.includes('sql'))
return 'SQL is one of my strongest tools. I use it for querying databases, filtering and transforming data, joins, aggregations, subqueries, CTEs, window functions, and analytical reporting.';

if (msg.includes('sql skills'))
return 'My SQL skills include SELECT queries, joins, aggregations, GROUP BY, subqueries, CTEs, CASE statements, window functions, filtering, data transformation, and analytical queries.';

if (msg.includes('sql joins') || msg.includes('joins in sql'))
return 'SQL joins combine data from multiple tables. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN, depending on which records need to be retained.';

if (msg.includes('inner join'))
return 'An INNER JOIN returns only records that have matching values in both tables.';

if (msg.includes('left join'))
return 'A LEFT JOIN returns every record from the left table and matching records from the right table. If there is no match, the right-side columns contain NULL values.';

if (msg.includes('window function'))
return 'SQL window functions perform calculations across related rows without collapsing them into a single row. Examples include ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, and running totals.';

if (msg.includes('cte') || msg.includes('common table expression'))
return 'A CTE, or Common Table Expression, is a temporary named result set created with WITH. It makes complex SQL queries easier to structure, read, and maintain.';

if (msg.includes('subquery'))
return 'A subquery is a query nested inside another SQL query. It can be used for filtering, calculations, comparisons, or building intermediate results.';

if (msg.includes('group by'))
return 'GROUP BY groups rows based on selected columns so aggregate functions such as COUNT, SUM, AVG, MIN, and MAX can be applied.';

if (msg.includes('having'))
return 'HAVING filters grouped results after aggregation, while WHERE filters individual rows before grouping.';

if (msg.includes('where vs having'))
return 'WHERE filters rows before aggregation, while HAVING filters groups after GROUP BY and aggregation.';

if (msg.includes('sql optimization') || msg.includes('optimize sql'))
return 'SQL optimization can involve selecting only required columns, filtering early, using appropriate joins, avoiding unnecessary subqueries, indexing where appropriate, and reviewing query execution plans.';


// =====================================================
// PYTHON
// =====================================================

if (msg.includes('python'))
return 'Python is one of my key technical tools, especially for data analysis, automation, visualization, and AI/ML workflows.';

if (msg.includes('python skills'))
return 'My Python work includes data manipulation, analysis, visualization, automation, and AI/ML-related workflows using libraries and tools from the Python ecosystem.';

if (msg.includes('pandas'))
return 'Pandas is a Python library I use for working with structured data, including cleaning, transformation, filtering, aggregation, merging, and analysis.';

if (msg.includes('numpy'))
return 'NumPy is a Python library for numerical computing. It provides efficient arrays and mathematical operations that are widely used in data science and machine learning.';

if (msg.includes('matplotlib'))
return 'Matplotlib is a Python visualization library that I can use to create charts and plots for exploring and communicating data insights.';

if (msg.includes('python automation'))
return 'Python can automate repetitive data tasks such as cleaning files, generating reports, transforming datasets, validating data, and executing recurring workflows.';


// =====================================================
// POWER BI
// =====================================================

if (msg.includes('power bi'))
return 'Power BI is one of the visualization and business intelligence tools I work with. I use it to transform data into interactive dashboards, reports, KPIs, and decision-ready insights.';

if (msg.includes('power bi dashboard'))
return 'A Power BI dashboard can combine KPIs, charts, filters, and interactive visuals to provide a consolidated view of business performance.';

if (msg.includes('dax'))
return 'DAX, or Data Analysis Expressions, is the formula language used in Power BI and other Microsoft analytical tools to create calculations, measures, and calculated columns.';

if (msg.includes('power query'))
return 'Power Query is used for connecting to data sources and performing data extraction, transformation, cleaning, and preparation before analysis.';

if (msg.includes('power bi kpi'))
return 'Power BI KPIs help track important business metrics against targets or benchmarks so users can quickly understand performance.';


// =====================================================
// TABLEAU
// =====================================================

if (msg.includes('tableau'))
return 'Tableau is a powerful data visualization and business intelligence platform. I use it to explore data, create interactive visualizations, and build dashboards that communicate insights clearly.';

if (msg.includes('tableau dashboard'))
return 'Tableau dashboards combine multiple visualizations and interactive controls into a single analytical view, allowing users to explore trends and insights.';

if (msg.includes('tableau public'))
return 'Tableau Public is a platform for publishing and sharing interactive Tableau visualizations and dashboards publicly.';


 // =====================================================
 // EXCEL
 // =====================================================

if (msg.includes('excel'))
return 'Excel is another important analytics tool in my toolkit. I use it for data cleaning, analysis, formulas, pivot tables, reporting, and quick business analysis.';

if (msg.includes('pivot table'))
return 'Pivot Tables allow large datasets to be summarized and analyzed quickly by grouping, filtering, and aggregating information.';

if (msg.includes('excel formulas'))
return 'Excel formulas can automate calculations and analysis. Common functions include XLOOKUP, VLOOKUP, INDEX, MATCH, SUMIFS, COUNTIFS, IF, and text functions.';


// =====================================================
// DASHBOARDS & REPORTING
// =====================================================

if (msg.includes('dashboard'))
return 'I enjoy building dashboards that transform complex datasets into clear visual stories. My dashboard work focuses on useful KPIs, intuitive layouts, filtering, trends, and actionable insights.';

if (msg.includes('reporting'))
return 'Reporting involves turning data into structured information that helps stakeholders understand performance, identify trends, and make decisions.';

if (msg.includes('automated reporting'))
return 'Automated reporting reduces repetitive manual work by connecting data processing, calculations, and report generation into a repeatable workflow.';

if (msg.includes('dashboard design'))
return 'Good dashboard design should prioritize clarity, hierarchy, relevant KPIs, useful interactions, consistent visuals, and the questions the audience actually needs answered.';


// =====================================================
// ANALYTICAL THINKING
// =====================================================

if (msg.includes('insight'))
return 'A useful insight goes beyond describing what happened. It explains an important pattern, why it may have happened, and what decision or action could follow from it.';

if (msg.includes('trend'))
return 'Trend analysis looks at how a metric changes over time to identify growth, decline, seasonality, anomalies, or other meaningful patterns.';

if (msg.includes('outlier'))
return 'An outlier is a data point that differs significantly from the general pattern of the dataset. I investigate whether it represents an error, unusual behavior, or a genuinely important event.';

if (msg.includes('missing values'))
return 'Missing values should be investigated before deciding how to handle them. Depending on the context, they may be removed, replaced, retained, or treated as a meaningful category.';

if (msg.includes('data quality'))
return 'Data quality means ensuring data is accurate, complete, consistent, valid, timely, and reliable enough for the intended analysis or decision.';


// =====================================================
// AI / MACHINE LEARNING
// =====================================================

if (msg.includes('artificial intelligence') || msg.includes('what is ai'))
return 'Artificial Intelligence is the broader field of creating systems that can perform tasks that normally require human intelligence, such as reasoning, perception, language understanding, and decision-making.';

if (msg.includes('machine learning') || msg.includes('what is ml'))
return 'Machine Learning is a branch of AI where systems learn patterns from data and use those patterns to make predictions, classifications, or decisions.';

if (msg.includes('ai ml'))
return 'My Master’s studies are focused on Computer Science with AI and ML, allowing me to expand from traditional analytics into machine learning and intelligent data-driven systems.';

if (msg.includes('supervised learning'))
return 'Supervised learning trains a model using labeled data, where the desired output is known. Common examples include classification and regression.';

if (msg.includes('unsupervised learning'))
return 'Unsupervised learning works with unlabeled data to discover hidden patterns or structures, such as clusters or associations.';

if (msg.includes('classification'))
return 'Classification is a machine learning task where the model predicts a category or class, such as spam versus not spam or customer churn versus no churn.';

if (msg.includes('regression'))
return 'Regression is used to predict a continuous numerical value, such as revenue, price, demand, or temperature.';

if (msg.includes('clustering'))
return 'Clustering groups similar observations together without predefined labels. It can be useful for customer segmentation and exploratory analysis.';

if (msg.includes('overfitting'))
return 'Overfitting happens when a model learns the training data too closely and performs poorly on unseen data. Techniques such as regularization, cross-validation, and simpler models can help reduce it.';

if (msg.includes('cross validation') || msg.includes('cross-validation'))
return 'Cross-validation evaluates a model across multiple train-validation splits to get a more reliable estimate of how it may perform on unseen data.';

if (msg.includes('feature engineering'))
return 'Feature engineering involves creating, transforming, or selecting useful input variables so a machine learning model can learn more effectively from the data.';


// =====================================================
// CAREER DIRECTION
// =====================================================

if (msg.includes('career'))
return 'My career direction sits at the intersection of data analytics, AI/ML, and technology. I want to keep building strong technical depth while solving meaningful real-world problems.';

if (msg.includes('future'))
return 'My goal is to keep growing technically and professionally, moving toward increasingly challenging analytics and AI/ML projects while creating measurable impact.';

if (msg.includes('learning'))
return 'Continuous learning is a major part of my approach. Technology changes quickly, so I regularly explore new concepts, tools, projects, and practical applications.';

if (msg.includes('upskill'))
return 'I upskill through practical projects, technical learning, experimentation, and applying new concepts rather than relying only on theory.';

if (msg.includes('why ai'))
return 'AI interests me because it extends data-driven problem solving into systems that can learn patterns, make predictions, automate decisions, and create new possibilities.';


// =====================================================
// PORTFOLIO / DEVLAB
// =====================================================

if (msg.includes('devlab'))
return 'DevLab is my interactive engineering environment where I can showcase technical work, experiments, analytics, programming, and data-focused projects in a more interactive way.';

if (msg.includes('portfolio'))
return 'My portfolio brings together my professional background, projects, dashboards, technical skills, and interactive work. DevLab is the engineering-focused part of that experience.';

if (msg.includes('projects'))
return 'My projects demonstrate practical work across data analytics, visualization, programming, automation, and AI/ML. You can explore them through the Projects and DevLab sections.';

if (msg.includes('github'))
return 'You can explore my GitHub to see my code, experiments, and development work.';

if (msg.includes('source code'))
return 'My source code and development work can be explored through my GitHub and the technical projects showcased in my portfolio.';

if (msg.includes('interactive'))
return 'I enjoy making my portfolio interactive rather than presenting it as a static resume. That is one reason I built features like DevLab and this chatbot.';


// =====================================================
// PROFESSIONAL VALUE
// =====================================================

if (msg.includes('value') && msg.includes('company'))
return 'I aim to create value by combining analytical thinking, technical skills, and clear communication to turn data into decisions, improve processes, and solve practical problems.';

if (msg.includes('impact'))
return 'For me, impactful work is work where analysis or technology leads to a measurable improvement, better decision, faster process, or clearer understanding.';

if (msg.includes('business problem'))
return 'I start by understanding the actual business problem rather than jumping directly into tools. Then I identify the right data, analyze it, validate the findings, and communicate an actionable solution.';

if (msg.includes('stakeholder'))
return 'I believe technical analysis only creates value when stakeholders can understand and use it. I focus on clear communication, relevant metrics, and aligning outputs with business needs.';

if (msg.includes('communication'))
return 'Strong communication is essential in analytics. I try to explain technical findings in simple business language and tailor the level of detail to the audience.';




// =====================================================
// PROJECTS & PORTFOLIO — DETAILED QUESTIONS
// =====================================================

if (msg.includes('project experience'))
return 'My project experience focuses on applying data, analytics, programming, visualization, automation, and AI/ML concepts to practical problems. I prefer projects where the final result is something useful and measurable.';

if (msg.includes('best project'))
return 'My best project depends on what you are looking for. My portfolio includes analytics, dashboarding, programming, and AI/ML-oriented work, so I’d recommend exploring the Projects and DevLab sections to see the different types of work.';

if (msg.includes('favorite project'))
return 'I enjoy projects where I can combine technical problem-solving with a practical outcome. Data analysis and interactive engineering projects are particularly interesting to me because they allow me to work across both logic and presentation.';

if (msg.includes('recent project'))
return 'My recent work has increasingly focused on combining analytics, programming, AI/ML concepts, and interactive engineering. I’m also continuously improving my portfolio and DevLab to reflect my current technical direction.';

if (msg.includes('personal project'))
return 'Personal projects are an important part of my learning process. They let me experiment with technologies, solve problems independently, and turn ideas into working applications or analytical solutions.';

if (msg.includes('project methodology'))
return 'I generally start by defining the problem, understanding the requirements, identifying the data or inputs, building the solution iteratively, testing the results, and then improving the final output based on what I learn.';

if (msg.includes('how do you start a project'))
return 'I start by understanding the problem and expected outcome. Then I identify the required data or technologies, break the work into smaller tasks, build a first version, test it, and iterate until the result is reliable and useful.';

if (msg.includes('project challenges'))
return 'The most valuable project challenges usually involve messy data, unclear requirements, unexpected technical issues, or finding the right way to communicate results. I treat those challenges as part of the learning process.';

if (msg.includes('project failure'))
return 'When something fails in a project, I try to understand the root cause instead of simply patching the symptom. Debugging, testing assumptions, and iterating usually lead to a stronger final solution.';

if (msg.includes('project testing'))
return 'I test projects incrementally rather than waiting until the end. I validate data, check calculations, test edge cases, verify outputs, and make sure the final experience works as intended.';

if (msg.includes('project documentation'))
return 'Good documentation makes a project easier to understand, maintain, and reproduce. I try to document the purpose, workflow, technologies, important decisions, and usage where appropriate.';


// =====================================================
// WEB DEVELOPMENT
// =====================================================

if (msg.includes('web development'))
return 'I also work with web technologies and enjoy building interactive interfaces. My portfolio itself is an example of combining frontend development, JavaScript, UI design, and data-focused functionality.';

if (msg.includes('html'))
return 'HTML provides the structure of a web page. I use semantic HTML to organize content, interfaces, navigation, forms, and interactive components.';

if (msg.includes('css'))
return 'CSS is what I use to create the visual experience of my web projects, including responsive layouts, animations, effects, spacing, typography, and interactive states.';

if (msg.includes('javascript'))
return 'JavaScript is one of my key web development tools. I use it to create interactive interfaces, dynamic components, event handling, data-driven behavior, and custom website functionality.';

if (msg.includes('responsive design'))
return 'Responsive design means building interfaces that adapt properly across desktop, tablet, and mobile screen sizes. I pay attention to layout, spacing, interaction, and usability across different devices.';

if (msg.includes('frontend'))
return 'My frontend work combines HTML, CSS, and JavaScript to create responsive and interactive user experiences. I especially enjoy adding meaningful interactions rather than making pages purely static.';

if (msg.includes('ui design') || msg.includes('user interface'))
return 'I like UI designs that feel modern while remaining functional. I focus on visual hierarchy, spacing, typography, interaction feedback, responsiveness, and making important actions easy to discover.';

if (msg.includes('ux') || msg.includes('user experience'))
return 'Good UX means making an interface intuitive, responsive, accessible, and easy to understand. I try to think about what the user needs to accomplish rather than only how the interface looks.';

if (msg.includes('animations'))
return 'I use animations to provide feedback and create a more polished experience, but I prefer purposeful motion over excessive effects. Animations should help users understand interactions or hierarchy.';


// =====================================================
// GITHUB & VERSION CONTROL
// =====================================================

if (msg.includes('git'))
return 'Git is a version control system used to track changes in code, collaborate with others, experiment safely with branches, and maintain project history.';

if (msg.includes('version control'))
return 'Version control allows developers to track changes, collaborate safely, revert mistakes, and maintain different versions of a project. Git is the tool I use for this workflow.';

if (msg.includes('git hub') || msg.includes('github profile'))
return 'My GitHub profile showcases my development work, experiments, and projects. It provides a deeper look at the code behind some of the work presented in my portfolio.';

if (msg.includes('repository') || msg.includes('repo'))
return 'A repository is a project workspace that contains source code, files, version history, and often documentation. Git repositories make it easier to manage and collaborate on software projects.';

if (msg.includes('git branch') || msg.includes('branching'))
return 'Git branches allow developers to work on features or experiments independently without immediately changing the main codebase. They are useful for organized development and collaboration.';


// =====================================================
// DATA ENGINEERING & ETL
// =====================================================

if (msg.includes('data pipeline'))
return 'A data pipeline is a sequence of processes that moves and transforms data from sources to a destination where it can be analyzed or used by applications.';

if (msg.includes('etl pipeline'))
return 'An ETL pipeline extracts data from sources, transforms and cleans it according to requirements, and loads it into a destination such as a database or warehouse.';

if (msg.includes('elt'))
return 'ELT stands for Extract, Load, Transform. Unlike traditional ETL, the data is loaded into the destination first and transformed there, which is common in modern cloud data platforms.';

if (msg.includes('data warehouse'))
return 'A data warehouse is a centralized system designed to store structured data from different sources for reporting, analytics, and business intelligence.';

if (msg.includes('database'))
return 'A database is a system for storing and managing structured information so applications and users can efficiently create, retrieve, update, and analyze data.';

if (msg.includes('relational database'))
return 'A relational database stores data in tables made up of rows and columns, with relationships between tables commonly represented through keys. SQL is widely used to work with relational databases.';

if (msg.includes('primary key'))
return 'A primary key uniquely identifies each record in a database table. It helps maintain entity integrity and provides a reliable way to reference individual rows.';

if (msg.includes('foreign key'))
return 'A foreign key is a column or set of columns that references a key in another table, helping establish relationships between related records.';


// =====================================================
// DATA SCIENCE
// =====================================================

if (msg.includes('data science'))
return 'Data science combines statistics, programming, data analysis, machine learning, and domain knowledge to extract useful insights and build data-driven solutions.';

if (msg.includes('statistics'))
return 'Statistics provides the mathematical foundation for understanding data, measuring uncertainty, identifying relationships, testing hypotheses, and making informed conclusions.';

if (msg.includes('descriptive statistics'))
return 'Descriptive statistics summarize the main characteristics of a dataset using measures such as mean, median, standard deviation, minimum, maximum, and distributions.';

if (msg.includes('mean median mode'))
return 'Mean is the arithmetic average, median is the middle value when data is ordered, and mode is the most frequently occurring value. Each can be useful depending on the distribution and context.';

if (msg.includes('correlation'))
return 'Correlation measures the strength and direction of the relationship between variables. A strong correlation does not necessarily mean that one variable causes the other.';

if (msg.includes('causation'))
return 'Causation means one factor directly contributes to a change in another. It is important not to confuse correlation with causation because two variables can move together without one causing the other.';

if (msg.includes('hypothesis testing'))
return 'Hypothesis testing is a statistical framework for evaluating whether the available evidence supports a particular assumption about a population or process.';

if (msg.includes('p value') || msg.includes('p-value'))
return 'A p-value helps quantify how compatible observed data is with a null hypothesis under a specified statistical model. It should be interpreted alongside effect size, context, and other evidence.';


// =====================================================
// MACHINE LEARNING — PRACTICAL
// =====================================================

if (msg.includes('machine learning project'))
return 'A typical ML project involves defining the problem, collecting and preparing data, exploring the dataset, engineering features, splitting data, training models, evaluating performance, and iterating based on results.';

if (msg.includes('train test split'))
return 'A train-test split separates data into training data used to learn the model and test data used to evaluate how well it generalizes to unseen examples.';

if (msg.includes('model evaluation'))
return 'Model evaluation depends on the problem. Classification may use accuracy, precision, recall, F1-score, ROC-AUC, while regression may use MAE, MSE, RMSE, or R².';

if (msg.includes('precision'))
return 'Precision measures how many of the observations predicted as positive were actually positive. It is especially useful when false positives are costly.';

if (msg.includes('recall'))
return 'Recall measures how many of the actual positive observations were correctly identified. It is especially important when missing positive cases is costly.';

if (msg.includes('f1 score') || msg.includes('f1-score'))
return 'F1-score is the harmonic mean of precision and recall. It is useful when you want a balance between false positives and false negatives.';

if (msg.includes('accuracy'))
return 'Accuracy is the proportion of predictions that are correct. It can be useful, but it may be misleading for highly imbalanced datasets.';

if (msg.includes('confusion matrix'))
return 'A confusion matrix summarizes classification predictions using true positives, true negatives, false positives, and false negatives.';


// =====================================================
// CLOUD / MODERN DATA
// =====================================================

if (msg.includes('cloud computing'))
return 'Cloud computing provides computing, storage, databases, and other infrastructure through scalable internet-based services rather than relying entirely on local infrastructure.';

if (msg.includes('api'))
return 'An API, or Application Programming Interface, allows different software systems to communicate with each other through defined requests and responses.';

if (msg.includes('rest api') || msg.includes('restful api'))
return 'A REST API is a web API style that commonly uses HTTP methods such as GET, POST, PUT, PATCH, and DELETE to work with resources.';

if (msg.includes('json'))
return 'JSON is a lightweight data-interchange format commonly used for APIs and web applications because it is easy for both humans and programs to read and process.';


// =====================================================
// AUTOMATION
// =====================================================

if (msg.includes('automation'))
return 'Automation means using software or systems to perform repetitive tasks with minimal manual intervention. I’m particularly interested in automation because it can improve consistency, speed, and productivity.';

if (msg.includes('why automation'))
return 'I like automation because repetitive work often creates opportunities for errors and wasted time. A well-designed automated workflow can free people to focus on higher-value tasks.';

if (msg.includes('process improvement'))
return 'I approach process improvement by understanding the current workflow, identifying bottlenecks and repetitive tasks, measuring the impact, and then designing a simpler or more automated solution.';


// =====================================================
// INTERVIEW — BEHAVIORAL
// =====================================================

if (msg.includes('leadership experience'))
return 'I see leadership as taking ownership, creating clarity, helping others succeed, and keeping a team moving toward a shared outcome. I’m comfortable taking initiative when a situation requires it.';

if (msg.includes('decision making'))
return 'I prefer evidence-based decision making. I gather the relevant information, understand the constraints, compare possible options, and choose an approach based on impact and practicality.';

if (msg.includes('problem solving'))
return 'My problem-solving approach is to define the problem clearly, break it into smaller pieces, identify the root cause, test possible solutions, and validate the result.';

if (msg.includes('adaptability'))
return 'I’m comfortable adapting when requirements, tools, or priorities change. I focus on understanding what changed, reassessing priorities, and learning whatever is necessary to move forward.';

if (msg.includes('ownership'))
return 'I believe ownership means taking responsibility for the outcome rather than only completing assigned tasks. It includes communicating issues early, solving problems, and following through.';

if (msg.includes('initiative'))
return 'I like taking initiative when I see an opportunity to improve something. If I can solve a problem, automate a repetitive task, or make a process clearer, I prefer to take action rather than wait unnecessarily.';

if (msg.includes('accountability'))
return 'Accountability means being responsible for both results and mistakes. If something goes wrong, I believe in acknowledging it, understanding why, communicating clearly, and fixing the underlying issue.';


// =====================================================
// COLLABORATION
// =====================================================

if (msg.includes('collaboration'))
return 'I enjoy collaboration because different perspectives can produce better solutions. I try to contribute my technical perspective while remaining open to feedback and ideas from others.';

if (msg.includes('working with non technical people'))
return 'When working with non-technical stakeholders, I avoid unnecessary technical jargon and focus on the business problem, key findings, impact, and recommended actions.';

if (msg.includes('explain technical concept'))
return 'I first understand who I’m explaining it to, then simplify the concept using practical examples and focus on the part that matters for their goal.';

if (msg.includes('team disagreement'))
return 'I try to separate the person from the problem. I listen to the reasoning behind different opinions, look at the available evidence, and work toward the solution that best serves the project.';


// =====================================================
// WORK ETHIC
// =====================================================

if (msg.includes('work ethic'))
return 'I value consistency, ownership, curiosity, and finishing work to a high standard. I also believe good work includes communicating clearly and asking for help when necessary.';

if (msg.includes('work under pressure'))
return 'Under pressure, I focus on priorities rather than trying to solve everything simultaneously. I break the work down, identify the highest-impact tasks, and communicate early if there are risks.';

if (msg.includes('deadline'))
return 'I work backward from the deadline, identify dependencies, prioritize the most important deliverables, and leave enough time for testing and refinement.';

if (msg.includes('overtime'))
return 'I’m willing to put in additional effort when an important situation requires it, but I also believe sustainable productivity comes from good planning and prioritization.';


// =====================================================
// LEARNING & TECHNOLOGY
// =====================================================

if (msg.includes('how do you learn'))
return 'I learn best by combining documentation and structured learning with hands-on implementation. Building something and solving real problems helps me understand concepts much more deeply.';

if (msg.includes('new technology'))
return 'When learning a new technology, I first understand its core concepts, then build a small practical example, experiment with it, and gradually use it in a larger project.';

if (msg.includes('documentation'))
return 'I consider official documentation one of the most reliable starting points when learning a technology. I combine it with practical experimentation and debugging to understand how things work.';

if (msg.includes('technology trends'))
return 'I try to stay aware of developments in AI, machine learning, analytics, software engineering, and modern data technologies while focusing on understanding concepts rather than chasing every trend.';


// =====================================================
// HIRING / HR
// =====================================================

if (msg.includes('what kind of role'))
return 'I’m interested in roles where I can work with data, analytics, technology, and problem solving, while continuing to grow toward AI/ML and more advanced technical responsibilities.';

if (msg.includes('preferred role'))
return 'I’m particularly interested in data analytics and technology-focused roles where I can work with SQL, Python, visualization, business problems, and gradually expand into AI/ML.';

if (msg.includes('why should we hire you'))
return 'I bring a combination of analytical thinking, technical curiosity, practical project experience, and a strong willingness to learn. I care about understanding the problem behind the task and delivering something useful.';

if (msg.includes('what makes you different'))
return 'I enjoy combining analytics with engineering and interactive technology. I don’t just want to analyze data—I like building practical, understandable solutions around it.';

if (msg.includes('what are you looking for'))
return 'I’m looking for opportunities where I can solve meaningful problems, work with strong teams, apply my analytical and technical skills, and continue developing professionally.';

if (msg.includes('job opportunity'))
return 'I’m open to opportunities that align with data analytics, technology, AI/ML, and problem solving, especially environments where I can learn and contribute at the same time.';


// =====================================================
// PORTFOLIO NAVIGATION
// =====================================================

if (msg.includes('where can i see your resume'))
return 'You can find and download my resume from the Resume section of my portfolio.';

if (msg.includes('where can i see your projects'))
return 'You can explore my projects through the Projects section and my interactive DevLab environment.';

if (msg.includes('where can i see your dashboards'))
return 'My dashboards and visualization work are available through the Dashboard section of my portfolio.';

if (msg.includes('where can i find your linkedin'))
return 'You can find my LinkedIn profile through the LinkedIn link in my portfolio.';

if (msg.includes('where can i find your github'))
return 'You can access my GitHub through the GitHub link in my portfolio and explore my repositories and development work.';

if (msg.includes('how can i contact you'))
return 'You can contact me through the contact details provided on my portfolio, including email and the available professional networking channels.';


// =====================================================
// CHATBOT META
// =====================================================

if (msg.includes('are you ai'))
return 'Yes — I’m a portfolio chatbot designed to help visitors learn about Samarth’s background, skills, projects, and technical interests. 🤖';

if (msg.includes('are you chatbot'))
return 'Yes! I’m the portfolio chatbot. Think of me as a small interactive guide to Samarth’s work, skills, projects, and interests. 🤖';

if (msg.includes('what information do you have'))
return 'I can answer questions about Samarth’s education, skills, analytics experience, projects, technologies, career direction, DevLab, and selected personal interests.';

if (msg.includes('can you help me'))
return 'Absolutely. Ask me about Samarth’s skills, education, projects, experience, technologies, dashboards, DevLab, career goals, or even ask me a data-related question.';

if (msg.includes('how do i use you'))
return 'Just ask a question naturally. For example: “What are Samarth’s skills?”, “Tell me about his projects”, “What is DevLab?”, or “What does he know about SQL?”';


// =====================================================
// DATA CAREER QUESTIONS
// =====================================================

if (msg.includes('data analyst vs data scientist'))
return 'A Data Analyst typically focuses on analyzing existing data, reporting, dashboards, and business insights, while a Data Scientist often works more deeply with statistics, machine learning, experimentation, and predictive modeling. There is overlap between the two roles.';

if (msg.includes('data analyst career'))
return 'A Data Analyst career can grow through stronger SQL, Python, visualization, statistics, business understanding, automation, and eventually areas such as analytics engineering, data science, or AI/ML.';

if (msg.includes('analytics career'))
return 'Analytics offers multiple paths, including Data Analyst, Business Analyst, BI Analyst, Analytics Engineer, Data Scientist, and eventually analytics leadership or specialized AI/ML roles.';

if (msg.includes('why analytics'))
return 'Analytics appeals to me because it combines technical problem-solving with business impact. I enjoy finding patterns in data and turning them into information people can actually use.';


// =====================================================
// SECURITY / PROFESSIONAL BOUNDARY
// =====================================================

if (msg.includes('password'))
return 'I don’t share passwords, private credentials, API keys, or other sensitive information. I can help with publicly available professional information instead.';

if (msg.includes('private information'))
return 'I can share relevant public professional information, but I won’t expose private credentials, passwords, personal secrets, or sensitive information.';

if (msg.includes('salary expectation'))
return 'I’m open to discussing compensation based on the role, responsibilities, growth opportunity, and overall fit. I’d prefer to understand the position and expectations before putting a specific number on it.';


if (msg.includes('what projects have you worked on'))
return 'I have worked on multiple data and technology projects involving data analysis, dashboards, automation, web applications, and AI/ML. My work focuses on solving practical problems and turning data into useful, actionable outcomes.';

if (msg.includes('what is your current project'))
return 'My current work focuses on building practical data and AI/ML solutions while strengthening my skills in analytics, engineering, visualization, and intelligent applications.';

if (msg.includes('what kind of projects do you build'))
return 'I build projects around data analytics, business intelligence, automation, AI/ML, dashboards, and web-based tools. I especially enjoy projects where different technologies come together to solve a real problem.';

if (msg.includes('tell me about your data projects'))
return 'My data projects involve collecting and cleaning data, analyzing it with SQL and Python, identifying patterns, creating visualizations and dashboards, and communicating the findings in a way that supports decision-making.';

if (msg.includes('tell me about your dashboard projects'))
return 'I have worked on interactive dashboards designed to transform complex datasets into clear business insights. I focus on meaningful KPIs, clean visualizations, useful filters, and making the dashboard easy for stakeholders to understand.';

if (msg.includes('what dashboards have you built'))
return 'I have built dashboards using tools such as Power BI and Tableau, covering areas like business performance, analytics, KPIs, trends, and operational insights.';

if (msg.includes('power bi experience'))
return 'I use Power BI for data modeling, transformation, KPI development, interactive reports, visual analytics, and presenting business insights through dashboards.';

if (msg.includes('tableau experience'))
return 'I use Tableau to create interactive visualizations and dashboards that make trends, patterns, and business metrics easier to explore and understand.';

if (msg.includes('sql experience'))
return 'SQL is one of my core technical skills. I use it for querying databases, filtering and transforming data, joins, aggregations, subqueries, analysis, and preparing datasets for reporting and dashboards.';

if (msg.includes('python experience'))
return 'I use Python primarily for data analysis, automation, data processing, and AI/ML-related work. My data workflow commonly involves libraries such as Pandas and Matplotlib.';

if (msg.includes('pandas'))
return 'Pandas is one of my main Python tools for data analysis. I use it for loading datasets, cleaning data, handling missing values, transforming columns, filtering records, aggregating data, and preparing datasets for analysis.';

if (msg.includes('matplotlib'))
return 'I use Matplotlib to create analytical visualizations and explore patterns and trends in datasets.';

if (msg.includes('excel experience'))
return 'I use Excel for data cleaning, analysis, formulas, reporting, and business-oriented data work. It is especially useful for quick analysis and communicating results in familiar formats.';

if (msg.includes('data cleaning'))
return 'My data-cleaning workflow includes identifying missing values, duplicates, inconsistent formats, incorrect data types, outliers, and other quality issues before performing analysis.';

if (msg.includes('data visualization'))
return 'I use visualization to turn complex datasets into understandable stories. I focus on choosing the right chart, highlighting important metrics, identifying trends, and making the information easy for the audience to interpret.';

if (msg.includes('data storytelling'))
return 'Data storytelling means going beyond charts and explaining what the data actually means. I try to connect trends and metrics with business context so the audience can understand the insight and the action behind it.';

if (msg.includes('business intelligence'))
return 'Business intelligence is about transforming data into information that helps organizations make better decisions. My BI work involves data preparation, analysis, KPIs, dashboards, visualization, and communicating insights.';

if (msg.includes('what is your approach to analytics'))
return 'I generally start by understanding the business question, then identify the required data, clean and validate it, analyze it, visualize the important findings, and finally communicate actionable insights.';

if (msg.includes('how do you approach a new dataset'))
return 'First I understand what the dataset represents and what question needs to be answered. Then I inspect its structure, check data quality, identify missing or inconsistent values, clean and transform it, and finally begin analysis.';

if (msg.includes('how do you find insights in data'))
return 'I look for trends, relationships, outliers, changes over time, segment-level differences, and patterns that connect back to the original business question. The goal is not just to find something interesting, but something useful.';

if (msg.includes('how do you validate data'))
return 'I validate data by checking source consistency, data types, duplicates, missing values, ranges, totals, relationships between tables, and unexpected changes. I also perform sanity checks before trusting the final results.';

if (msg.includes('how do you deal with missing data'))
return 'I first understand why the data is missing. Depending on the situation, I may remove records, replace values, use an appropriate imputation method, or keep the missing state if it itself carries information.';

if (msg.includes('how do you handle duplicate data'))
return 'I identify duplicates based on the relevant business keys or columns, investigate why they exist, and remove or consolidate them only after confirming what the duplicate records represent.';

if (msg.includes('how do you handle outliers'))
return 'I investigate outliers rather than automatically deleting them. I check whether they are data-quality issues, legitimate unusual observations, or important business events before deciding how to treat them.';

if (msg.includes('what is your data analysis workflow'))
return 'My typical workflow is: understand the problem, collect or access the data, clean it, explore it, analyze it, visualize the findings, validate the results, and communicate actionable insights.';

if (msg.includes('what is your role in a project'))
return 'Depending on the project, I can work across data preparation, analysis, visualization, dashboard development, automation, documentation, and communicating insights to stakeholders.';

if (msg.includes('do you work with databases'))
return 'Yes. SQL and database-oriented data work are important parts of my analytics workflow. I use SQL to retrieve, join, filter, aggregate, and prepare data for analysis and reporting.';

if (msg.includes('what type of sql queries do you write'))
return 'I work with filtering, joins, aggregations, GROUP BY, subqueries, CTEs, CASE statements, window functions, sorting, and other SQL techniques required for analytical queries.';

if (msg.includes('what are joins'))
return 'Joins allow data from multiple tables to be combined using related columns. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.';

if (msg.includes('what are window functions'))
return 'Window functions perform calculations across related rows without collapsing them into a single row. They are useful for rankings, running totals, comparisons, and analytical calculations.';

if (msg.includes('what is a cte'))
return 'A CTE, or Common Table Expression, is a temporary named result set defined using WITH. It helps make complex SQL queries easier to structure, read, and maintain.';

if (msg.includes('what is data analysis'))
return 'Data analysis is the process of inspecting, cleaning, transforming, and interpreting data to discover useful information, identify patterns, answer questions, and support decisions.';

if (msg.includes('what is data science'))
return 'Data science combines statistics, programming, data analysis, machine learning, and domain knowledge to extract insights and build data-driven solutions.';

if (msg.includes('what is machine learning'))
return 'Machine learning is a branch of AI where systems learn patterns from data to make predictions, classifications, recommendations, or other decisions without being explicitly programmed for every case.';

if (msg.includes('what ai ml skills do you have'))
return 'My AI/ML journey includes learning and applying concepts around machine learning, data analysis, Python, and intelligent applications. I am continuously expanding this area as part of my Master’s in Computer Science with an AI/ML focus.';

if (msg.includes('why ai and ml'))
return 'AI and ML interest me because they allow data to move beyond reporting and toward prediction, automation, and intelligent decision-making. I want to combine analytics with these capabilities to solve more complex real-world problems.';

if (msg.includes('how do analytics and ai work together'))
return 'Analytics helps understand what happened and why, while AI and ML can help predict what may happen and automate decisions or processes. Combining them creates a stronger end-to-end data solution.';

if (msg.includes('do you automate tasks'))
return 'Yes. Automation is an area I enjoy because repetitive data processes can often be made faster and more reliable through programming, SQL, Python, and workflow-based solutions.';

if (msg.includes('what do you automate'))
return 'I focus on automating repetitive data-related work such as data preparation, reporting workflows, analysis steps, and other processes where manual effort can be reduced through code or structured workflows.';

if (msg.includes('why do you like automation'))
return 'I like automation because it saves time, reduces repetitive manual work, improves consistency, and allows people to focus on higher-value analytical and problem-solving tasks.';

if (msg.includes('how do you document your work'))
return 'I document important assumptions, data sources, transformation steps, analytical logic, dashboard definitions, and other information needed for someone else to understand or maintain the work.';

if (msg.includes('how do you communicate technical information'))
return 'I try to remove unnecessary technical complexity and explain the important idea in terms of the audience. For technical teammates I can go deeper into implementation, while for business stakeholders I focus more on impact, insights, and decisions.';

if (msg.includes('how do you present insights'))
return 'I start with the key finding rather than overwhelming the audience with raw data. Then I explain the supporting evidence, business impact, and potential next steps.';

if (msg.includes('what makes a good dashboard'))
return 'A good dashboard has a clear purpose, relevant KPIs, reliable data, intuitive navigation, useful filters, appropriate visualizations, and a layout that allows users to understand the most important information quickly.';

if (msg.includes('what makes a bad dashboard'))
return 'A dashboard becomes difficult to use when it contains too many visuals, unclear KPIs, unnecessary decoration, poor hierarchy, inconsistent metrics, or information that does not answer a meaningful business question.';

if (msg.includes('how do you choose a chart'))
return 'I choose the visualization based on the question. For example, line charts work well for trends, bar charts for comparisons, and appropriate KPI or card visuals for headline metrics. The goal is clarity rather than decoration.';

if (msg.includes('what is kpi'))
return 'A KPI, or Key Performance Indicator, is a measurable value used to track progress toward an important business objective.';

if (msg.includes('what is data modeling'))
return 'Data modeling defines how data is structured and how different entities or tables relate to each other so the data can be efficiently analyzed and used for reporting.';

if (msg.includes('what is etl'))
return 'ETL means Extract, Transform, Load. Data is extracted from one or more sources, transformed into a usable format, and loaded into a destination such as a data warehouse or analytical system.';

if (msg.includes('what is elt'))
return 'ELT means Extract, Load, Transform. Data is first loaded into the destination system and then transformed there, which is common in modern cloud data platforms.';

if (msg.includes('what is data warehouse'))
return 'A data warehouse is a centralized system designed to store structured data from different sources for reporting, analytics, and business intelligence.';

if (msg.includes('what is business analytics'))
return 'Business analytics uses data, statistical methods, and analytical techniques to understand business performance, identify opportunities, and support better decisions.';

if (msg.includes('what is exploratory data analysis'))
return 'Exploratory Data Analysis, or EDA, is the process of examining a dataset using statistics and visualizations to understand distributions, relationships, patterns, anomalies, and data-quality issues before deeper analysis or modeling.';

if (msg.includes('what is data preprocessing'))
return 'Data preprocessing prepares raw data for analysis or machine learning. It can include cleaning, handling missing values, encoding categories, scaling numerical features, removing duplicates, and transforming variables.';

if (msg.includes('what is overfitting'))
return 'Overfitting happens when a machine-learning model learns the training data too closely, including noise, and therefore performs poorly on unseen data.';

if (msg.includes('what is underfitting'))
return 'Underfitting happens when a model is too simple to capture the underlying patterns in the data, causing poor performance on both training and unseen data.';


if (msg.includes('what projects have you worked on'))
return 'I’ve worked on projects across data analytics, dashboards, automation, and AI/ML. My work focuses on solving practical problems, transforming raw data into insights, and building interactive solutions. You can explore the Projects section for the complete collection.';

if (msg.includes('what is your current role'))
return 'I’m currently focused on building my career in data analytics, AI/ML, and data-driven engineering, while continuing my Master’s in Computer Science and working on practical projects.';

if (msg.includes('what are you currently working on'))
return 'I’m currently working on strengthening my skills across data analytics, AI/ML, Python, SQL, visualization, and software development. I’m also building practical projects that combine data, automation, and interactive web experiences.';

if (msg.includes('what is your current education'))
return 'I’m pursuing a Master’s in Computer Science with a focus on AI and Machine Learning. I’m continuously combining academic learning with practical projects and hands-on development.';

if (msg.includes('what did you study'))
return 'My academic background is in Information Technology, followed by my current Master’s studies in Computer Science with a focus on AI and Machine Learning.';

if (msg.includes('what is your degree'))
return 'I have a B.Sc. in Information Technology and I’m currently pursuing a Master’s in Computer Science, specializing in AI and Machine Learning.';

if (msg.includes('what is your educational background'))
return 'My background includes a B.Sc. in Information Technology and a Master’s in Computer Science focused on AI/ML. Alongside formal education, I continuously learn through projects, experimentation, and technical practice.';

if (msg.includes('what field are you interested in'))
return 'I’m particularly interested in Data Analytics, Data Science, AI/ML, automation, and building practical software solutions that turn data into useful outcomes.';

if (msg.includes('what is your specialization'))
return 'My current specialization is AI and Machine Learning within Computer Science, complemented by strong interests and hands-on work in data analytics, SQL, Python, visualization, and automation.';

if (msg.includes('are you a data analyst'))
return 'Yes. Data Analytics is one of my core areas. I enjoy working with SQL, Python, dashboards, visualization, and business data to discover insights and support better decisions.';

if (msg.includes('are you a data scientist'))
return 'I’m building toward Data Science and AI/ML through my Master’s studies and hands-on projects. My current strengths are particularly strong in analytics, data handling, visualization, and Python/SQL.';

if (msg.includes('are you into ai'))
return 'Absolutely. AI and Machine Learning are a major part of my current studies and career direction. I’m interested in understanding models while also applying AI to practical problems.';

if (msg.includes('are you into machine learning'))
return 'Yes. Machine Learning is part of my current Master’s focus. I’m interested in both the fundamentals and practical applications of ML to real-world data and business problems.';

if (msg.includes('why ai'))
return 'AI interests me because it combines problem-solving, data, mathematics, and engineering to build systems that can learn from information and create useful outcomes.';

if (msg.includes('why machine learning'))
return 'Machine Learning interests me because it allows data to move beyond reporting and become predictive and intelligent. I enjoy exploring how models can identify patterns and support better decisions.';

if (msg.includes('why data analytics'))
return 'I enjoy Data Analytics because it connects technical work with real business questions. Turning messy data into clear insights and actionable decisions is what makes analytics exciting to me.';

if (msg.includes('why computer science'))
return 'Computer Science gives me a broader technical foundation across programming, algorithms, systems, AI, and software engineering. It helps me understand not just how to analyze data, but how to build solutions around it.';

if (msg.includes('what is your technical stack'))
return 'My technical stack includes SQL, Python, Pandas, Matplotlib, Excel, Power BI, Tableau, JavaScript, HTML, CSS, Git, and other tools I use across analytics, visualization, automation, and development projects.';

if (msg.includes('what programming languages do you know'))
return 'Python and JavaScript are two of my main programming languages. I also work extensively with SQL for data querying and analysis, along with HTML and CSS for web development.';

if (msg.includes('how good are you at sql'))
return 'SQL is one of my strongest technical skills. I use it for querying, filtering, joining, aggregating, transforming, and analyzing data, as well as building logic for analytics workflows.';

if (msg.includes('how good are you at python'))
return 'Python is one of my core tools, especially for data analysis, automation, visualization, and AI/ML work. I commonly work with libraries such as Pandas and Matplotlib.';

if (msg.includes('do you know pandas'))
return 'Yes. I use Pandas for data loading, cleaning, transformation, filtering, aggregation, exploratory analysis, and preparing datasets for visualization or further modeling.';

if (msg.includes('do you know power bi'))
return 'Yes. I use Power BI to transform data into interactive dashboards, KPIs, reports, and business-focused visualizations that make insights easier to understand.';

if (msg.includes('do you know tableau'))
return 'Yes. Tableau is one of the visualization platforms I work with for creating interactive dashboards and communicating data-driven insights effectively.';

if (msg.includes('do you know excel'))
return 'Yes. I use Excel for data cleaning, analysis, formulas, reporting, and exploratory work. It remains a useful tool for quickly understanding and communicating data.';

if (msg.includes('do you know javascript'))
return 'Yes. I use JavaScript for interactive web experiences, UI behavior, automation logic, and integrating functionality into my projects and portfolio.';

if (msg.includes('do you know html') || msg.includes('do you know css'))
return 'Yes. I use HTML and CSS to structure and design web interfaces, including responsive layouts, interactive components, animations, and the DevLab experience on this portfolio.';

if (msg.includes('do you use git') || msg.includes('do you know git'))
return 'Yes. I use Git for version control, managing project changes, maintaining code history, and working with repositories.';

if (msg.includes('what is your strongest skill'))
return 'SQL and data analysis are among my strongest areas, supported by Python, visualization, dashboarding, and problem-solving. I’m also actively expanding my AI/ML and software engineering capabilities.';

if (msg.includes('what skill are you improving'))
return 'I’m continuously improving my AI/ML, data science, software engineering, system thinking, and advanced analytics skills. My goal is to keep moving from simply analyzing data toward building intelligent and scalable solutions.';

if (msg.includes('what makes you different'))
return 'I like combining analytics with engineering and creativity. I don’t want to only produce reports—I enjoy understanding the problem, working with the data, building the solution, and presenting the result through an engaging experience.';

if (msg.includes('what type of problems do you solve'))
return 'I enjoy problems involving messy data, analysis, automation, dashboards, visualization, process improvement, and increasingly AI/ML. I’m especially interested in turning unclear problems into structured, measurable solutions.';

if (msg.includes('what kind of projects do you like'))
return 'I like projects where I can combine data, technology, and creativity—especially analytics dashboards, automation, AI/ML applications, data-driven web applications, and tools that solve practical problems.';

if (msg.includes('what is your approach to a new project'))
return 'I start by understanding the problem and desired outcome, then identify the data and requirements, break the work into smaller pieces, build and validate the solution, and finally focus on making the result clear, reliable, and useful.';

if (msg.includes('how do you start a data analysis'))
return 'I first understand the business question, inspect the available data, check its quality, clean and transform it, explore patterns, perform the analysis, validate the findings, and communicate the insights through clear visualizations or dashboards.';

if (msg.includes('how do you clean data'))
return 'I first profile the dataset to identify missing values, duplicates, inconsistent formats, incorrect data types, and anomalies. Then I clean and standardize the data while validating that the transformations don’t introduce errors.';

if (msg.includes('how do you deal with missing data'))
return 'It depends on the context. I first understand why the data is missing, then decide whether to remove, replace, impute, or retain it based on the business meaning and analytical requirements.';

if (msg.includes('how do you deal with duplicate data'))
return 'I identify duplicates using the relevant business keys or fields, determine whether they are genuine duplicates or legitimate repeated records, and then remove or handle them accordingly.';

if (msg.includes('how do you validate data'))
return 'I use checks such as row counts, null checks, duplicate checks, data-type validation, range checks, reconciliation against source data, and sanity checks on the final outputs.';

if (msg.includes('how do you communicate insights'))
return 'I focus on the story behind the numbers. I simplify complex findings, highlight the most important KPIs and trends, explain the business impact, and use clear visualizations so stakeholders can act on the insight.';

if (msg.includes('what makes a good dashboard'))
return 'A good dashboard answers a clear business question, has relevant KPIs, avoids unnecessary visual clutter, uses appropriate charts, provides useful filters, and allows users to understand the key insight quickly.';

if (msg.includes('what dashboard tools do you use'))
return 'My main dashboard and visualization tools include Power BI and Tableau, along with Excel and Python-based visualization when appropriate.';

if (msg.includes('what is your favorite tool'))
return 'For data work, SQL and Python are among my favorites because they give me flexibility to explore, transform, automate, and analyze data. For dashboards, I enjoy working with Power BI and Tableau.';

if (msg.includes('sql or python'))
return 'They serve different purposes, so I prefer using both. SQL is excellent for querying and transforming data close to the source, while Python is powerful for deeper analysis, automation, visualization, and machine learning.';

if (msg.includes('power bi or tableau'))
return 'Both are powerful visualization platforms. My choice depends on the project, data environment, audience, and reporting requirements rather than following a single-tool approach.';

if (msg.includes('analytics or ai'))
return 'I don’t see them as competing areas. Analytics helps understand what happened and why, while AI/ML can help predict and automate what happens next. I’m interested in combining both.';

if (msg.includes('what are you looking for'))
return 'I’m looking for opportunities where I can apply my analytical and technical skills to real problems, learn from experienced teams, contribute meaningfully, and continue growing toward Data Science and AI/ML.';

if (msg.includes('what type of job are you looking for'))
return 'I’m interested in roles related to Data Analytics, Data Science, AI/ML, Business Intelligence, and data-driven engineering, depending on the responsibilities and opportunity to grow.';

if (msg.includes('are you looking for an internship'))
return 'I’m open to strong learning opportunities, including internships and entry-level roles where I can apply my skills to real-world problems and grow through hands-on experience.';

if (msg.includes('are you open to opportunities'))
return 'Yes. I’m open to relevant opportunities in Data Analytics, Data Science, AI/ML, Business Intelligence, and related technical roles.';

if (msg.includes('why should i contact you'))
return 'If you’re looking for someone who combines analytical thinking, technical curiosity, and a strong willingness to learn, I’d be happy to connect and discuss how I could contribute.';

if (msg.includes('how can i contact you'))
return 'You can reach me through the contact options on this website, including email, LinkedIn, and WhatsApp.';

if (msg.includes('where can i see your work'))
return 'You can explore my Projects, Dashboards, GitHub, and DevLab sections to see different parts of my technical and analytical work.';


if (msg.includes('what kind of data have you worked with'))
return 'I’ve worked with structured business and analytical datasets involving areas such as performance metrics, operational information, reporting data, and datasets used for dashboards and analysis. My focus is on understanding the business context behind the data, not just manipulating rows and columns.';

if (msg.includes('have you worked with large datasets'))
return 'Yes. I’ve worked with datasets containing tens of thousands of records, including messy data that required cleaning, transformation, validation, and analysis before it could be used reliably.';

if (msg.includes('how do you handle large datasets'))
return 'I first understand the data structure and business requirement, then use efficient SQL queries, appropriate filtering and aggregation, and Python tools such as Pandas when needed. I also avoid unnecessary processing and validate results throughout the workflow.';

if (msg.includes('what is exploratory data analysis'))
return 'Exploratory Data Analysis, or EDA, is the process of investigating a dataset to understand its structure, distributions, relationships, patterns, anomalies, and potential data-quality issues before deeper analysis or modeling.';

if (msg.includes('do you know statistics'))
return 'Yes. I use statistical concepts as part of data analysis and machine learning, including distributions, descriptive statistics, correlation, variance, hypothesis testing concepts, and interpreting analytical results in context.';

if (msg.includes('what statistical methods do you know'))
return 'I’m familiar with descriptive statistics, measures of central tendency and dispersion, correlation, probability concepts, hypothesis testing, sampling, distributions, and other statistical techniques used in analytics and ML workflows.';

if (msg.includes('what is correlation'))
return 'Correlation measures the strength and direction of the relationship between two variables. It can help identify patterns, but correlation by itself does not prove causation.';

if (msg.includes('what is regression'))
return 'Regression is a statistical and machine learning technique used to model relationships between variables and, depending on the problem, predict a continuous outcome.';

if (msg.includes('what is classification'))
return 'Classification is a machine learning approach where a model learns to assign observations to predefined categories, such as predicting whether a transaction belongs to one class or another.';

if (msg.includes('what is supervised learning'))
return 'Supervised learning trains a model using labeled data, where the desired outcome is already known. Common examples include regression and classification.';

if (msg.includes('what is unsupervised learning'))
return 'Unsupervised learning works with data without predefined target labels and attempts to discover hidden structures or patterns, such as through clustering or dimensionality reduction.';

if (msg.includes('what is clustering'))
return 'Clustering is an unsupervised learning technique that groups similar observations together based on their characteristics. It can be useful for segmentation and pattern discovery.';

if (msg.includes('what is overfitting'))
return 'Overfitting happens when a model learns the training data too closely, including noise, and therefore performs poorly on unseen data.';

if (msg.includes('what is underfitting'))
return 'Underfitting happens when a model is too simple to capture the important patterns in the data, resulting in poor performance even on the training data.';

if (msg.includes('how do you evaluate a machine learning model'))
return 'The evaluation method depends on the problem. For classification, metrics can include accuracy, precision, recall, F1-score, ROC-AUC, and confusion matrices. For regression, metrics can include MAE, MSE, RMSE, and R².';

if (msg.includes('what is precision'))
return 'Precision measures how many of the observations predicted as positive were actually positive. It is especially useful when false positives have a significant cost.';

if (msg.includes('what is recall'))
return 'Recall measures how many of the actual positive observations were correctly identified by the model. It is important when missing positive cases is costly.';

if (msg.includes('what is f1 score'))
return 'F1-score is the harmonic mean of precision and recall. It is useful when you want a balance between false positives and false negatives.';

if (msg.includes('what is confusion matrix'))
return 'A confusion matrix summarizes classification results by showing true positives, true negatives, false positives, and false negatives.';

if (msg.includes('what is feature engineering'))
return 'Feature engineering is the process of creating, transforming, or selecting useful input variables so that a machine learning model can learn meaningful patterns from the data.';

if (msg.includes('what is feature selection'))
return 'Feature selection means identifying the most useful variables for a model while removing irrelevant or redundant features. It can improve interpretability, efficiency, and sometimes model performance.';

if (msg.includes('what is data preprocessing'))
return 'Data preprocessing prepares raw data for analysis or machine learning. It can include cleaning, handling missing values, encoding categorical variables, scaling numerical features, removing duplicates, and transforming data.';

if (msg.includes('what is normalization'))
return 'Normalization generally means transforming numerical values to a common scale, often between 0 and 1. The exact technique should depend on the dataset and modeling requirement.';

if (msg.includes('what is standardization'))
return 'Standardization transforms numerical features so they are centered around a mean of zero with a standard deviation of one. It is commonly useful for algorithms sensitive to feature scale.';

if (msg.includes('what is train test split'))
return 'A train-test split separates data into one portion used to train a model and another portion used to evaluate how well it generalizes to unseen data.';

if (msg.includes('what is cross validation'))
return 'Cross-validation repeatedly divides the available data into training and validation portions to provide a more reliable estimate of model performance and reduce dependence on one particular split.';

if (msg.includes('what is pandas used for'))
return 'Pandas is primarily used for working with structured data in Python. I can use it for loading datasets, cleaning, filtering, joining, transforming, aggregating, exploring, and preparing data for visualization or modeling.';

if (msg.includes('what is numpy'))
return 'NumPy is a Python library designed for efficient numerical computing. It provides arrays, mathematical operations, and foundations used by many data science and machine learning libraries.';

if (msg.includes('what is matplotlib'))
return 'Matplotlib is a Python visualization library that can be used to create charts and plots for exploratory analysis, reporting, and communicating data insights.';

if (msg.includes('what is seaborn'))
return 'Seaborn is a Python visualization library built on Matplotlib that provides a convenient interface for creating statistical and analytical visualizations.';

if (msg.includes('what is scikit learn'))
return 'Scikit-learn is a Python machine learning library that provides tools for preprocessing, model training, evaluation, feature selection, clustering, and many common machine learning workflows.';

if (msg.includes('what is tensorflow'))
return 'TensorFlow is an open-source machine learning framework used for building and training models, including neural networks and deep learning applications.';

if (msg.includes('what is pytorch'))
return 'PyTorch is an open-source machine learning framework widely used for deep learning, experimentation, research, and building neural-network-based applications.';

if (msg.includes('what is artificial intelligence'))
return 'Artificial Intelligence is the broader field of creating systems capable of performing tasks that normally require aspects of human intelligence, such as reasoning, learning, perception, and decision-making.';

if (msg.includes('what is machine learning'))
return 'Machine Learning is a branch of AI where systems learn patterns from data and use those patterns to make predictions, classifications, recommendations, or decisions.';

if (msg.includes('what is deep learning'))
return 'Deep Learning is a subset of machine learning that uses multi-layer neural networks to learn complex patterns from data. It is widely used in areas such as computer vision, natural language processing, and speech.';

if (msg.includes('what is generative ai'))
return 'Generative AI refers to AI systems capable of creating new content such as text, images, audio, video, or code based on patterns learned from data.';

if (msg.includes('are you interested in generative ai'))
return 'Yes. Generative AI is an area I’m particularly interested in exploring because it combines AI, software engineering, automation, and user experience to create practical tools.';

if (msg.includes('what is natural language processing'))
return 'Natural Language Processing, or NLP, is an area of AI focused on enabling computers to understand, process, analyze, and generate human language.';

if (msg.includes('what is computer vision'))
return 'Computer vision is an AI field focused on enabling computers to interpret information from images and videos, such as recognizing objects, patterns, or visual features.';

if (msg.includes('what is an api'))
return 'An API, or Application Programming Interface, allows different software systems to communicate with each other through defined requests and responses.';

if (msg.includes('do you build apis'))
return 'Yes. APIs are an important part of building practical applications because they allow frontend interfaces, backend services, databases, and external systems to communicate with each other.';

if (msg.includes('what is automation'))
return 'Automation means using software to perform repetitive or rule-based tasks with minimal manual intervention. I’m particularly interested in using Python, data workflows, and AI to automate useful processes.';

if (msg.includes('why automation'))
return 'Automation can reduce repetitive work, improve consistency, save time, and allow people to focus on higher-value tasks. I enjoy identifying processes where technology can make work more efficient.';

if (msg.includes('do you like coding'))
return 'Absolutely. I enjoy coding because it gives me a way to turn an idea or problem into something functional. I especially enjoy coding when it involves data, automation, AI, or interactive applications.';

if (msg.includes('do you like web development'))
return 'Yes. I enjoy web development, especially when it allows me to turn technical work into an interactive experience. This portfolio and DevLab are examples of that interest.';

if (msg.includes('what is devlab'))
return 'DevLab is my interactive engineering environment where I experiment with data, SQL, Python, analytics, development, and technical ideas. It is designed to showcase not just my results, but how I think and build.';

if (msg.includes('why did you build devlab'))
return 'I wanted my portfolio to be more than a collection of static pages. DevLab gives me a space to demonstrate technical skills through interactive experiences, experiments, tools, and real engineering work.';

if (msg.includes('what can i find in devlab'))
return 'DevLab is where you can explore my technical experiments, data and analytics work, interactive components, projects, and other engineering-focused experiences.';

if (msg.includes('what makes devlab different'))
return 'Instead of simply listing technologies, DevLab is designed to let visitors interact with the work. It represents my interest in combining data, engineering, design, and experimentation into one experience.';

if (msg.includes('is devlab a project'))
return 'DevLab is more than a single project. It is an evolving engineering environment and showcase where I can continuously add experiments, tools, visualizations, and technical work.';

if (msg.includes('how often do you update devlab'))
return 'DevLab is intended to evolve continuously as I learn new technologies, build new projects, and experiment with different ideas.';

if (msg.includes('where is your github'))
return 'You can find my GitHub through the GitHub link provided on my portfolio. It contains repositories and code related to my projects and technical work.';

if (msg.includes('what is on your github'))
return 'My GitHub contains my development work, experiments, projects, and code that demonstrates how I approach technical problems and build solutions.';

if (msg.includes('do you contribute to open source'))
return 'I’m interested in open-source development and learning from the wider developer community. As my technical journey progresses, I want to contribute more actively to useful open-source projects.';

if (msg.includes('do you use version control'))
return 'Yes. Version control is an important part of my development workflow. I use Git to track changes, manage project history, and keep development work organized.';

if (msg.includes('how do you debug code'))
return 'I first reproduce the issue consistently, inspect the relevant inputs and state, isolate the failing component, test possible causes, and then verify the fix rather than assuming the first solution is correct.';

if (msg.includes('how do you learn new technology'))
return 'I usually start with the fundamentals, build a small practical example, experiment with the technology, read documentation, and then apply it to a real project. Building something is one of the fastest ways I learn.';

if (msg.includes('how do you keep up with technology'))
return 'I follow technical resources, documentation, developer communities, projects, and hands-on experimentation. I prefer learning by building rather than simply consuming tutorials.';

if (msg.includes('what are you learning now'))
return 'I’m continuing to deepen my knowledge of AI/ML, data science, analytics, software engineering, automation, and modern AI technologies while applying them through practical projects.';

if (msg.includes('what technology do you want to learn'))
return 'I’m interested in going deeper into advanced AI/ML, generative AI, intelligent automation, scalable data systems, and modern software engineering practices.';

if (msg.includes('what is your biggest technical strength'))
return 'My biggest technical strength is connecting different parts of a problem: understanding data with SQL, analyzing it with Python, communicating it through dashboards, and building practical interfaces around the solution.';

if (msg.includes('what is your biggest technical weakness'))
return 'There are areas where I’m still developing depth, particularly as technology evolves so quickly. I treat that as part of the journey and continuously strengthen my fundamentals through projects and hands-on learning.';



if (msg.includes('what industries are you interested in'))
return 'I’m interested in technology-driven industries where data can create measurable value, including fintech, AI, analytics, software, and other businesses that rely on data-driven decision-making.';

if (msg.includes('are you interested in fintech'))
return 'Yes. Fintech is especially interesting to me because it combines technology, data, AI, risk, and real-world business impact. I’m interested in how analytics and intelligent systems can improve financial products and decision-making.';

if (msg.includes('what is your interest in business'))
return 'I’m interested in understanding how technology and data can solve business problems. I like going beyond the technical output and asking what the insight means, what decision it supports, and what impact it can create.';

if (msg.includes('do you understand business requirements'))
return 'Yes. I believe technical solutions should start with the business problem. I focus on understanding the objective, stakeholders, constraints, KPIs, and expected outcome before deciding how to approach the data or technology.';

if (msg.includes('what is business intelligence'))
return 'Business Intelligence, or BI, uses data, reporting, dashboards, and analytics to help organizations understand performance and make informed decisions. Power BI and Tableau are examples of tools used in BI.';

if (msg.includes('what is data visualization'))
return 'Data visualization is the process of representing information through charts, graphs, dashboards, and other visual formats so that patterns, trends, comparisons, and insights can be understood more easily.';

if (msg.includes('why is data visualization important'))
return 'Good visualization turns complex datasets into understandable stories. It helps stakeholders identify trends, compare performance, spot anomalies, and make decisions without having to inspect raw data themselves.';

if (msg.includes('which chart should i use'))
return 'It depends on the question. Line charts work well for trends, bar charts for comparisons, scatter plots for relationships, maps for geographic patterns, and KPI cards for high-level metrics. The chart should support the question rather than simply look attractive.';

if (msg.includes('what is a kpi dashboard'))
return 'A KPI dashboard focuses on the most important performance indicators for a business or process. It typically combines headline metrics with trends, comparisons, breakdowns, and filters to help users understand performance quickly.';

if (msg.includes('how do you choose kpis'))
return 'I start with the business objective and identify which measurable outcomes indicate progress toward that objective. A KPI should be relevant, understandable, measurable, and actionable rather than included simply because the data is available.';

if (msg.includes('what is data storytelling'))
return 'Data storytelling combines analysis, visualization, and narrative to communicate what the data is saying. The goal is to move from numbers to a clear explanation of what happened, why it matters, and what action could follow.';

if (msg.includes('what is data driven decision making'))
return 'Data-driven decision making means using reliable evidence and analysis to support business decisions rather than relying only on assumptions or intuition. Data provides the evidence, while context and judgment complete the decision.';

if (msg.includes('what is data quality'))
return 'Data quality refers to how reliable and usable data is. Important dimensions include accuracy, completeness, consistency, validity, uniqueness, and timeliness.';

if (msg.includes('why is data quality important'))
return 'Poor-quality data can produce misleading analysis and incorrect business decisions. Good data quality is therefore a foundation for trustworthy dashboards, reports, analytics, and machine learning models.';

if (msg.includes('what is data governance'))
return 'Data governance is the framework of policies, processes, responsibilities, and standards used to manage data properly across an organization, including areas such as quality, security, ownership, and access.';

if (msg.includes('what is data warehouse'))
return 'A data warehouse is a centralized system designed to store structured data from multiple sources for reporting, analytics, and business intelligence.';

if (msg.includes('what is a database'))
return 'A database is an organized system for storing and managing data so that applications and users can efficiently create, retrieve, update, and analyze information.';

if (msg.includes('what databases do you know'))
return 'I work primarily with SQL concepts and relational databases. My focus is on writing queries, understanding relationships, transforming data, and extracting useful information efficiently.';

if (msg.includes('what is sql join'))
return 'A SQL JOIN combines rows from two or more tables based on a related column or condition. Common joins include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.';

if (msg.includes('what is inner join'))
return 'An INNER JOIN returns only the records where the join condition matches in both tables.';

if (msg.includes('what is left join'))
return 'A LEFT JOIN returns every record from the left table and the matching records from the right table. If there is no match, the right-side columns contain NULL values.';

if (msg.includes('what is group by'))
return 'GROUP BY groups rows with common values so aggregate functions such as COUNT, SUM, AVG, MIN, and MAX can be applied to each group.';

if (msg.includes('what is having in sql'))
return 'HAVING filters grouped or aggregated results, while WHERE filters individual rows before the grouping operation takes place.';

if (msg.includes('where vs having'))
return 'WHERE filters rows before aggregation, while HAVING filters the results after GROUP BY and aggregation.';

if (msg.includes('what is a subquery'))
return 'A subquery is a query nested inside another SQL query. It can be used to filter, calculate, compare, or provide intermediate results for the outer query.';

if (msg.includes('what is a cte'))
return 'A CTE, or Common Table Expression, is a temporary named result set created using WITH. It can make complex SQL queries easier to read, organize, and maintain.';

if (msg.includes('what are window functions'))
return 'SQL window functions perform calculations across related rows while keeping the individual rows in the result. Examples include ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, and running totals.';

if (msg.includes('what is row number'))
return 'ROW_NUMBER assigns a unique sequential number to rows within a specified window, often using PARTITION BY and ORDER BY.';

if (msg.includes('what is rank in sql'))
return 'RANK assigns rankings to rows based on an ordering. Tied rows receive the same rank, and the following rank can contain gaps.';

if (msg.includes('what is normalization in databases'))
return 'Database normalization organizes relational data to reduce unnecessary duplication and improve consistency by separating information into appropriately related tables.';

if (msg.includes('what is a primary key'))
return 'A primary key uniquely identifies each record in a database table. It must contain unique values and normally cannot be NULL.';

if (msg.includes('what is a foreign key'))
return 'A foreign key is a column or set of columns that references a key in another table, helping establish relationships between tables and maintain referential integrity.';

if (msg.includes('what is an index in sql'))
return 'A database index is a data structure that can speed up data retrieval for certain queries. The trade-off is additional storage and potential overhead when inserting or updating data.';

if (msg.includes('how do you optimize sql queries'))
return 'I start by understanding the query and execution plan, then look at filtering, joins, indexes, unnecessary columns, aggregations, and data volume. The goal is to reduce unnecessary work while keeping the query correct and maintainable.';

if (msg.includes('what is query optimization'))
return 'Query optimization is the process of improving a database query so it can return the required result efficiently, often by reducing unnecessary scans, joins, sorting, or computation.';

if (msg.includes('what is etl pipeline'))
return 'An ETL pipeline extracts data from sources, transforms and cleans it according to business requirements, and loads the resulting data into a target system such as a data warehouse.';

if (msg.includes('what is elt'))
return 'ELT stands for Extract, Load, Transform. Instead of transforming data before loading it, raw data is first loaded into the target platform and transformed there.';

if (msg.includes('etl vs elt'))
return 'ETL transforms data before loading it, while ELT loads the data first and performs transformations inside the target platform. The better approach depends on the architecture, tools, scale, and requirements.';

if (msg.includes('what is a data pipeline'))
return 'A data pipeline is a sequence of processes that moves and transforms data between systems. It can include extraction, validation, cleaning, transformation, storage, and delivery for analytics or applications.';

if (msg.includes('have you built data pipelines'))
return 'I have worked with data workflows involving extraction, cleaning, transformation, analysis, and reporting. I’m also interested in expanding deeper into production-grade data engineering and scalable pipeline architecture.';

if (msg.includes('what is data engineering'))
return 'Data engineering focuses on building and maintaining the systems and pipelines that collect, transform, store, and deliver reliable data for analytics, applications, and machine learning.';

if (msg.includes('are you interested in data engineering'))
return 'Yes. Data engineering is an area I want to explore more deeply because strong data pipelines and infrastructure are essential for reliable analytics, AI, and machine learning systems.';

if (msg.includes('what is cloud computing'))
return 'Cloud computing provides on-demand access to computing resources such as servers, storage, databases, networking, and machine learning services through cloud platforms.';

if (msg.includes('do you know aws'))
return 'I’m interested in cloud technologies and continue to build my understanding of cloud-based data and AI workflows. I’m particularly interested in how cloud infrastructure can make analytics and ML systems scalable.';

if (msg.includes('do you know azure'))
return 'I’m interested in Azure and cloud-based data and AI services, and I’m continuing to strengthen my practical knowledge of cloud technologies through learning and projects.';

if (msg.includes('do you know google cloud'))
return 'I’m familiar with the role of Google Cloud in modern data and AI workflows and am continuing to expand my practical cloud knowledge.';

if (msg.includes('what is docker'))
return 'Docker is a platform for packaging applications and their dependencies into containers so they can run consistently across different environments.';

if (msg.includes('do you know docker'))
return 'I’m building my understanding of containerization and Docker as part of expanding my software engineering and deployment skills.';

if (msg.includes('what is github'))
return 'GitHub is a platform for hosting Git repositories and collaborating on software projects. I use Git-based workflows to manage code, projects, and version history.';

if (msg.includes('github vs git'))
return 'Git is the version control system, while GitHub is a platform that hosts Git repositories and provides collaboration features such as pull requests, issues, and project workflows.';

if (msg.includes('what is agile'))
return 'Agile is an approach to software and product development that emphasizes iterative delivery, collaboration, continuous feedback, and adapting to changing requirements.';

if (msg.includes('what is scrum'))
return 'Scrum is an Agile framework that organizes work into iterations called sprints and uses roles, ceremonies, and artifacts to help teams deliver incrementally.';

if (msg.includes('have you worked with agile'))
return 'I’m familiar with Agile principles and workflows, including breaking work into smaller tasks, prioritizing requirements, tracking progress, and iterating based on feedback.';

if (msg.includes('what is jira used for'))
return 'Jira is commonly used to manage software and project work, including tasks, bugs, user stories, sprints, priorities, and team workflows.';

if (msg.includes('what is notion'))
return 'Notion is a flexible workspace used for documentation, notes, project organization, knowledge management, and planning.';

if (msg.includes('what is trello'))
return 'Trello is a visual task-management tool based around boards, lists, and cards, making it useful for organizing workflows and tracking progress.';

if (msg.includes('how do you manage projects'))
return 'I break projects into clear milestones and smaller tasks, prioritize based on impact, track progress, test incrementally, and continuously refine the solution based on what I learn.';

if (msg.includes('how do you manage changing requirements'))
return 'I first clarify what changed and why, assess the impact on existing work, prioritize the new requirement, communicate trade-offs, and then adjust the implementation in a controlled way.';

if (msg.includes('how do you work with stakeholders'))
return 'I focus on understanding their goals, communicating clearly, validating requirements early, providing progress updates, and translating technical findings into language that makes sense for the audience.';

if (msg.includes('how do you explain technical concepts'))
return 'I start with the simplest explanation possible, use practical examples or analogies when useful, and then add technical depth based on the audience’s level of understanding.';

if (msg.includes('can you explain data to a non technical person'))
return 'Absolutely. I avoid unnecessary technical terminology and focus on the business meaning: what happened, why it matters, what the evidence says, and what action could be taken.';

if (msg.includes('what is your communication style'))
return 'Clear, direct, collaborative, and adaptable. I try to understand the audience first and communicate technical information at the level that helps them make a decision or take action.';

if (msg.includes('are you a good communicator'))
return 'I consider communication an important part of technical work. Good analysis only creates value when the findings can be understood and acted upon, so I actively work on explaining technical and analytical concepts clearly.';

if (msg.includes('how do you receive criticism'))
return 'I try to separate the feedback from my ego, understand the reasoning behind it, and identify what I can improve. Constructive criticism is one of the fastest ways to grow.';

if (msg.includes('how do you handle disagreement'))
return 'I focus on the problem rather than the person. I listen to the other perspective, look at the available evidence, discuss trade-offs, and work toward the solution that best serves the objective.';

if (msg.includes('what if your analysis is challenged'))
return 'I welcome the challenge. I would review the assumptions, data sources, methodology, and calculations, then explain the reasoning behind the result and change the analysis if the evidence shows that something was wrong.';

if (msg.includes('what if you make a mistake'))
return 'I acknowledge it, understand the root cause, fix it, validate the correction, and look for a way to prevent the same mistake from happening again.';

if (msg.includes('do you prefer quality or speed'))
return 'Both matter, but the right balance depends on the situation. I prioritize the critical requirements first, deliver value incrementally when possible, and avoid sacrificing reliability just to move faster.';

if (msg.includes('what does ownership mean to you'))
return 'Ownership means taking responsibility for the outcome, not just completing an assigned task. It includes understanding the objective, communicating problems early, following through, and making sure the final result actually works.';

if (msg.includes('what does professionalism mean to you'))
return 'For me, professionalism means being reliable, respectful, accountable, prepared, and honest about both progress and problems while consistently trying to deliver quality work.';

if (msg.includes('what is your work ethic'))
return 'I value consistency, ownership, curiosity, and finishing what I start. I prefer sustainable progress and good engineering practices over simply appearing busy.';

if (msg.includes('are you a fast learner'))
return 'Yes. I learn particularly well through hands-on work. I usually understand a concept faster when I can connect it to a practical problem and build something with it.';

if (msg.includes('how quickly can you learn a new tool'))
return 'It depends on the complexity and my existing foundation, but I’m comfortable learning new tools quickly when there is a clear problem to solve. I focus first on the core concepts and then learn the deeper features through practice.';

if (msg.includes('what makes you a good team member'))
return 'I’m collaborative, open to feedback, willing to take ownership, and comfortable both asking for help and helping others. I also believe communication is essential when working toward a shared outcome.';

if (msg.includes('what leadership means to you'))
return 'Leadership is not only about having authority. I see it as taking responsibility, creating clarity, helping people succeed, making thoughtful decisions, and keeping the team moving toward a shared objective.';

if (msg.includes('do you want to be a leader'))
return 'Yes, eventually. I want to first build strong technical and business foundations, then grow into leadership where I can contribute strategically while mentoring and supporting others.';

if (msg.includes('what type of leader would you be'))
return 'I would aim to be a collaborative and technically grounded leader—someone who listens, sets clear expectations, encourages learning, and focuses the team on solving the actual problem.';

if (msg.includes('what is your ideal team'))
return 'A team that communicates openly, values learning, gives constructive feedback, takes ownership, and cares about building useful and reliable solutions.';

if (msg.includes('what is your ideal company'))
return 'A company where technology is used to solve meaningful problems, people are encouraged to learn, teams collaborate well, and there is room to take ownership and grow.';

if (msg.includes('what culture do you prefer'))
return 'I prefer a culture that combines high standards with psychological safety—where people can challenge ideas respectfully, learn from mistakes, collaborate, and still have some fun while doing meaningful work.';

if (msg.includes('what are you passionate about'))
return 'I’m passionate about technology, data, AI/ML, problem-solving, continuous learning, and building things that are genuinely useful. I especially enjoy the intersection of analytics and engineering.';

if (msg.includes('what excites you about technology'))
return 'The speed at which technology turns ideas into real capabilities excites me. AI, automation, data, and software can transform a simple idea into something people can actually use.';

if (msg.includes('what kind of impact do you want to make'))
return 'I want my work to make processes smarter, decisions clearer, and products more useful. Long term, I want to build technology that creates measurable value rather than technology for its own sake.';


/* =========================================================
   SINGLE-WORD / SHORT-KEYWORD INTENTS
   ========================================================= */

/* ---------------------------------------------------------
   BASIC PROFILE
--------------------------------------------------------- */

if (
    msg === "name" ||
    msg === "samarth" ||
    msg === "who"
)
    return "I'm DataBot, your guide to Samarth Kolge's profile, skills, projects, education and experience. 🤖";


if (
    msg === "location" ||
    msg === "city" ||
    msg === "pune"
)
    return "Based in Pune, India 🇮🇳";


if (
    msg === "age" ||
    msg === "older"
)
    return "I'm here to talk about Samarth's professional journey rather than personal age details. 😊";


/* ---------------------------------------------------------
   EDUCATION
--------------------------------------------------------- */

if (
    msg === "education" ||
    msg === "study" ||
    msg === "studies" ||
    msg === "degree" ||
    msg === "college" ||
    msg === "university"
)
    return "Samarth has a B.Sc. in Information Technology and is pursuing a Master's in Computer Science, with a focus on AI & ML.";


/* ---------------------------------------------------------
   SKILLS
--------------------------------------------------------- */

if (
    msg === "skills" ||
    msg === "skill" ||
    msg === "technologies" ||
    msg === "technology" ||
    msg === "tech" ||
    msg === "stack"
)
    return "Core skills include SQL, Python, Power BI, Tableau, Excel, data analysis, visualization, analytics and AI/ML.";


/* ---------------------------------------------------------
   SQL
--------------------------------------------------------- */

if (
    msg === "sql" ||
    msg === "mysql" ||
    msg === "database" ||
    msg === "databases"
)
    return "SQL is one of Samarth's core technical skills, used for querying, cleaning, transforming and analyzing data.";


/* ---------------------------------------------------------
   PYTHON
--------------------------------------------------------- */

if (
    msg === "python" ||
    msg === "pandas" ||
    msg === "numpy" ||
    msg === "matplotlib"
)
    return "Python is used for data analysis, automation, visualization and AI/ML work, with tools such as Pandas, NumPy and Matplotlib.";


/* ---------------------------------------------------------
   POWER BI
--------------------------------------------------------- */

if (
    msg === "powerbi" ||
    msg === "power" ||
    msg === "bi"
)
    return "Power BI is one of Samarth's main visualization and dashboarding tools, used to turn data into interactive business insights.";


/* ---------------------------------------------------------
   TABLEAU
--------------------------------------------------------- */

if (
    msg === "tableau" ||
    msg === "visualization" ||
    msg === "visualisation"
)
    return "Tableau is used for interactive dashboards, visual analytics and communicating insights clearly.";


/* ---------------------------------------------------------
   EXCEL
--------------------------------------------------------- */

if (
    msg === "excel" ||
    msg === "spreadsheet"
)
    return "Excel is part of Samarth's analytics toolkit for data cleaning, analysis, formulas, reporting and visualization.";


/* ---------------------------------------------------------
   AI / ML
--------------------------------------------------------- */

if (
    msg === "ai" ||
    msg === "artificialintelligence" ||
    msg === "ml" ||
    msg === "machinelearning" ||
    msg === "machine"
)
    return "Samarth is building deeper expertise in AI and Machine Learning alongside his data analytics background.";


/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

if (
    msg === "data" ||
    msg === "analytics" ||
    msg === "analysis" ||
    msg === "analyst"
)
    return "Samarth focuses on turning raw data into useful insights through SQL, Python, dashboards, visualization and analytical thinking.";


/* ---------------------------------------------------------
   PROJECTS
--------------------------------------------------------- */

if (
    msg === "project" ||
    msg === "projects" ||
    msg === "portfolio"
)
    return "You can explore Samarth's projects through the Projects section. They cover data analytics, visualization, automation, web development and technical experimentation.";


/* ---------------------------------------------------------
   RESUME
--------------------------------------------------------- */

if (
    msg === "resume" ||
    msg === "cv"
)
    return "You can download Samarth's latest resume from the homepage. 📄";


/* ---------------------------------------------------------
   EXPERIENCE
--------------------------------------------------------- */

if (
    msg === "experience" ||
    msg === "work" ||
    msg === "career"
)
    return "Samarth's experience combines data analytics, visualization, technical projects, automation and continuous learning in AI/ML.";


/* ---------------------------------------------------------
   INTERNSHIP
--------------------------------------------------------- */

if (
    msg === "intern" ||
    msg === "internship" ||
    msg === "internships"
)
    return "Samarth has worked on practical data and analytics work, gaining experience with real-world datasets, analysis, dashboards and automation.";


/* ---------------------------------------------------------
   DASHBOARDS
--------------------------------------------------------- */

if (
    msg === "dashboard" ||
    msg === "dashboards" ||
    msg === "reports" ||
    msg === "report"
)
    return "Samarth builds interactive dashboards and reports using tools such as Power BI and Tableau to communicate meaningful insights.";


/* ---------------------------------------------------------
   GITHUB
--------------------------------------------------------- */

if (
    msg === "github" ||
    msg === "code" ||
    msg === "coding" ||
    msg === "repo" ||
    msg === "repos"
)
    return "You can explore Samarth's technical work, projects and code through his GitHub profile.";


/* ---------------------------------------------------------
   LINKEDIN
--------------------------------------------------------- */

if (
    msg === "linkedin" ||
    msg === "profile"
)
    return "You can connect with Samarth on LinkedIn through his professional profile.";


/* ---------------------------------------------------------
   CONTACT
--------------------------------------------------------- */

if (
    msg === "contact" ||
    msg === "reach" ||
    msg === "email" ||
    msg === "mail"
)
    return "You can reach Samarth at kolgesamarth@gmail.com or through WhatsApp at 9518905490.";


/* ---------------------------------------------------------
   PHONE
--------------------------------------------------------- */

if (
    msg === "phone" ||
    msg === "mobile" ||
    msg === "whatsapp" ||
    msg === "number"
)
    return "You can WhatsApp Samarth at 9518905490. 📱";


/* ---------------------------------------------------------
   DEVLAB
--------------------------------------------------------- */

if (
    msg === "devlab" ||
    msg === "dev"
)
    return "DevLab is Samarth's interactive engineering environment where you can explore technical experiments, analytics, SQL, Python and other engineering projects.";


/* ---------------------------------------------------------
   LENTRA
--------------------------------------------------------- */

if (
    msg === "lentra" ||
    msg === "lentraai" ||
    msg === "fintech"
)
    return "Lentra AI is a fintech company focused on AI-powered digital lending solutions for financial institutions.";


/* ---------------------------------------------------------
   JOB / CAREER
--------------------------------------------------------- */

if (
    msg === "job" ||
    msg === "jobs" ||
    msg === "career" ||
    msg === "role"
)
    return "Samarth is interested in opportunities where he can apply data analytics, technology and AI/ML skills to solve meaningful real-world problems.";


/* ---------------------------------------------------------
   SALARY
--------------------------------------------------------- */

if (
    msg === "salary" ||
    msg === "ctc" ||
    msg === "package"
)
    return "Samarth is primarily focused on finding the right opportunity, meaningful work, learning and long-term growth. Compensation can be discussed based on the role.";


/* ---------------------------------------------------------
   HOBBIES
--------------------------------------------------------- */

if (
    msg === "hobby" ||
    msg === "hobbies" ||
    msg === "fun"
)
    return "Outside technology, Samarth enjoys chess, cricket, badminton, carrom, kabaddi, books and exploring new places.";


/* ---------------------------------------------------------
   CHESS
--------------------------------------------------------- */

if (
    msg === "chess"
)
    return "Chess is one of Samarth's favorite hobbies. ♟️";


/* ---------------------------------------------------------
   SPORTS
--------------------------------------------------------- */

if (
    msg === "sports" ||
    msg === "cricket" ||
    msg === "badminton" ||
    msg === "kabaddi" ||
    msg === "carrom"
)
    return "Samarth enjoys playing sports, especially cricket and badminton, along with chess, carrom and kabaddi.";


/* ---------------------------------------------------------
   COFFEE
--------------------------------------------------------- */

if (
    msg === "coffee" ||
    msg === "chai" ||
    msg === "tea"
)
    return "Coffee usually wins. ☕ But a good masala chai is always welcome.";


/* ---------------------------------------------------------
   MOTIVATION
--------------------------------------------------------- */

if (
    msg === "motivation" ||
    msg === "inspiration" ||
    msg === "inspire"
)
    return "Keep learning, keep experimenting and keep building. Progress comes from consistently improving one step at a time. 🚀";


/* =========================================================
   CASUAL SINGLE-WORD INPUTS
========================================================= */

if (
    msg === "hello" ||
    msg === "hi" ||
    msg === "hey" ||
    msg === "hii" ||
    msg === "hiii"
)
    return "Hey! 👋 What would you like to know about Samarth?";


if (
    msg === "thanks" ||
    msg === "thankyou" ||
    msg === "thx"
)
    return "You're welcome! 😊";


if (
    msg === "bye" ||
    msg === "goodbye"
)
    return "See you around! 👋";


if (
    msg === "okay" ||
    msg === "ok" ||
    msg === "okk"
)
    return "Sounds good! 👍";


if (
    msg === "nice" ||
    msg === "cool" ||
    msg === "great"
)
    return "Glad you think so! 😄";


/* =========================================================
   ABUSIVE / RUDE INPUTS
   Keep the bot calm — never argue.
========================================================= */

const abusiveWords = [

    "fuck",
    "fucking",
    "fucked",
    "shit",
    "bullshit",
    "bitch",
    "asshole",
    "idiot",
    "stupid",
    "dumb",
    "moron",
    "bastard",
    "damn",
    "crap",
    "lavdya",
    "mc",
    "bc",
    "madarchod",
    "chutya",
    "behenchod",
    "yz",
    "pagal",
    "murkha",
    "veda",
    "condom",
    "sex"

];


const containsAbuse =
    abusiveWords.some(
        word =>
            msg === word ||
            msg.includes(" " + word + " ") ||
            msg.startsWith(word + " ") ||
            msg.endsWith(" " + word)
    );


if (containsAbuse) {

    return "No worries 😄 Let's keep it respectful. I’m still happy to help!";

}


/* =========================================================
   RANDOM / UNKNOWN SHORT INPUT
========================================================= */

if (
    msg.length <= 2
)
    return "I'm listening 👀 Try asking about skills, projects, education, experience, DevLab, resume or anything else about Samarth.";



/* =========================================================
   PROFESSIONAL + ANALYTICS — BATCH 2
========================================================= */


/* ---------------------------------------------------------
   DATA ANALYSIS WORKFLOW
--------------------------------------------------------- */

if (
    msg.includes("data analysis process") ||
    msg.includes("analysis process") ||
    msg.includes("analyze data") ||
    msg.includes("analyse data")
)
    return "My typical workflow is: understand the business problem, collect and validate the data, clean and transform it, explore patterns, analyze the data, build visualizations, communicate insights, and finally measure the impact.";


if (
    msg === "workflow" ||
    msg === "process" ||
    msg === "methodology"
)
    return "My analytics workflow is: understand → collect → clean → analyze → visualize → communicate → measure impact.";


/* ---------------------------------------------------------
   DATA CLEANING
--------------------------------------------------------- */

if (
    msg.includes("data cleaning") ||
    msg.includes("clean data") ||
    msg.includes("cleaning data") ||
    msg.includes("dirty data")
)
    return "I approach data cleaning systematically by identifying missing values, duplicates, inconsistent formats, invalid records and outliers, then validating the cleaned dataset before analysis.";


if (
    msg === "cleaning" ||
    msg === "clean"
)
    return "Data cleaning involves handling missing values, duplicates, inconsistencies, incorrect formats and invalid records before analysis.";


/* ---------------------------------------------------------
   MISSING VALUES
--------------------------------------------------------- */

if (
    msg.includes("missing values") ||
    msg.includes("missing data") ||
    msg.includes("null values") ||
    msg.includes("null data")
)
    return "I first understand why values are missing, then choose an appropriate approach such as removing records, imputing values or creating a meaningful category. The decision depends on the business context and impact on analysis.";


if (
    msg === "missing" ||
    msg === "null"
)
    return "Missing values should be investigated before deciding whether to remove, replace or otherwise handle them.";


/* ---------------------------------------------------------
   DUPLICATES
--------------------------------------------------------- */

if (
    msg.includes("duplicate") ||
    msg.includes("duplicates")
)
    return "I identify duplicates based on the business key or relevant columns, investigate why they exist, remove or consolidate them when appropriate, and validate the final dataset.";


/* ---------------------------------------------------------
   OUTLIERS
--------------------------------------------------------- */

if (
    msg.includes("outlier") ||
    msg.includes("outliers")
)
    return "I don't automatically remove outliers. I first investigate whether they represent errors, unusual but valid behavior, or important business events. Then I choose the appropriate treatment.";


/* ---------------------------------------------------------
   DATA VALIDATION
--------------------------------------------------------- */

if (
    msg.includes("data validation") ||
    msg.includes("validate data") ||
    msg.includes("data quality")
)
    return "I validate data using row counts, duplicates, null checks, data types, ranges, relationships between tables, business rules and reconciliation against trusted sources.";


if (
    msg === "validation" ||
    msg === "quality"
)
    return "Data quality means making sure the data is accurate, complete, consistent, valid and reliable enough for the intended analysis.";


/* ---------------------------------------------------------
   SQL
--------------------------------------------------------- */

if (
    msg.includes("sql skills") ||
    msg.includes("sql experience") ||
    msg.includes("how good are you at sql")
)
    return "SQL is one of my strongest analytics tools. I use it for joins, filtering, aggregation, subqueries, CTEs, window functions, data cleaning and extracting business insights.";


if (
    msg === "joins" ||
    msg === "join"
)
    return "SQL joins allow data to be combined across related tables. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL OUTER JOIN.";


if (
    msg === "cte" ||
    msg === "ctes"
)
    return "A CTE, or Common Table Expression, creates a temporary named result set that makes complex SQL queries easier to structure and read.";


if (
    msg === "window" ||
    msg === "windows"
)
    return "SQL window functions perform calculations across related rows without collapsing them, making them useful for rankings, running totals, comparisons and time-based analysis.";


/* ---------------------------------------------------------
   PYTHON
--------------------------------------------------------- */

if (
    msg.includes("python skills") ||
    msg.includes("python experience") ||
    msg.includes("how do you use python")
)
    return "I use Python mainly for data analysis, cleaning, automation and visualization. Pandas is especially useful for working with structured datasets.";


if (
    msg === "automation" ||
    msg === "automate" ||
    msg === "automation"
)
    return "I use programming and data workflows to automate repetitive tasks such as data preparation, reporting and analysis wherever automation can improve efficiency and consistency.";


/* ---------------------------------------------------------
   POWER BI
--------------------------------------------------------- */

if (
    msg.includes("power bi skills") ||
    msg.includes("power bi experience") ||
    msg.includes("power bi dashboard")
)
    return "I use Power BI to build interactive dashboards, create analytical views, work with data models and communicate KPIs and business insights to users.";


if (
    msg === "dax"
)
    return "DAX is the expression language used in Power BI for creating calculated columns, measures and analytical calculations.";


if (
    msg === "kpi" ||
    msg === "kpis"
)
    return "KPIs are measurable indicators used to evaluate performance against specific business objectives.";


/* ---------------------------------------------------------
   TABLEAU
--------------------------------------------------------- */

if (
    msg.includes("tableau skills") ||
    msg.includes("tableau experience") ||
    msg.includes("tableau dashboard")
)
    return "I use Tableau to create interactive dashboards and visualizations that make trends, comparisons and business insights easier to understand.";


/* ---------------------------------------------------------
   EXCEL
--------------------------------------------------------- */

if (
    msg.includes("excel skills") ||
    msg.includes("excel experience")
)
    return "I use Excel for data cleaning, analysis, formulas, reporting and exploratory work, especially when working with structured business data.";


/* ---------------------------------------------------------
   DASHBOARD DESIGN
--------------------------------------------------------- */

if (
    msg.includes("how do you build a dashboard") ||
    msg.includes("dashboard design") ||
    msg.includes("build dashboards")
)
    return "I start with the audience and business objective, identify the important KPIs, prepare the data model, choose appropriate visualizations, keep the layout focused, and validate that the dashboard answers the intended business questions.";


if (
    msg === "dashboard"
)
    return "A good dashboard should answer important business questions quickly through clear KPIs, useful visualizations, appropriate filtering and a simple information hierarchy.";


/* ---------------------------------------------------------
   DATA STORYTELLING
--------------------------------------------------------- */

if (
    msg.includes("data storytelling") ||
    msg.includes("tell stories with data") ||
    msg.includes("storytelling")
)
    return "Data storytelling is about turning analysis into a clear narrative: what happened, why it happened, what matters, and what action should be considered.";


/* ---------------------------------------------------------
   BUSINESS INSIGHTS
--------------------------------------------------------- */

if (
    msg.includes("business insight") ||
    msg.includes("business insights") ||
    msg.includes("insights")
)
    return "I focus on moving beyond numbers to understand what the data means for the business, identify patterns and opportunities, and communicate actionable recommendations.";


/* ---------------------------------------------------------
   STAKEHOLDERS
--------------------------------------------------------- */

if (
    msg.includes("stakeholder") ||
    msg.includes("stakeholders")
)
    return "I try to understand what each stakeholder actually needs, communicate clearly, provide relevant updates and translate technical findings into business-friendly insights.";


/* ---------------------------------------------------------
   BUSINESS PROBLEM
--------------------------------------------------------- */

if (
    msg.includes("business problem") ||
    msg.includes("business question")
)
    return "I start with the business problem rather than the tool. Once the objective and success metric are clear, I determine what data and analytical approach are needed.";


/* ---------------------------------------------------------
   REQUIREMENTS
--------------------------------------------------------- */

if (
    msg.includes("requirements") ||
    msg.includes("requirement gathering") ||
    msg.includes("gather requirements")
)
    return "I clarify the objective, expected outcome, users, KPIs, data sources, constraints and success criteria before starting the analytical work.";


/* ---------------------------------------------------------
   KPIs
--------------------------------------------------------- */

if (
    msg.includes("choose kpis") ||
    msg.includes("select kpis") ||
    msg.includes("how do you choose kpis")
)
    return "I choose KPIs based on the business objective and decision they support. A KPI should be measurable, relevant, understandable and connected to a meaningful business outcome.";


/* ---------------------------------------------------------
   METRICS
--------------------------------------------------------- */

if (
    msg === "metric" ||
    msg === "metrics"
)
    return "A metric is a measurable value used to understand performance or behavior. KPIs are specific metrics tied closely to important business objectives.";


/* ---------------------------------------------------------
   REPORTING
--------------------------------------------------------- */

if (
    msg.includes("reporting") ||
    msg.includes("reports")
)
    return "I focus on making reporting accurate, understandable and useful for decision-making, while reducing repetitive manual work wherever possible.";


/* ---------------------------------------------------------
   AUTOMATION / EFFICIENCY
--------------------------------------------------------- */

if (
    msg.includes("save time") ||
    msg.includes("improve efficiency") ||
    msg.includes("reduce manual work")
)
    return "I look for repetitive steps that can be standardized or automated, especially in data preparation, reporting and recurring analytical workflows.";


/* ---------------------------------------------------------
   STATISTICS
--------------------------------------------------------- */

if (
    msg === "statistics" ||
    msg === "stats"
)
    return "Statistics helps understand patterns, distributions, relationships and uncertainty in data. I use statistical thinking alongside practical business context when analyzing data.";


/* ---------------------------------------------------------
   EDA
--------------------------------------------------------- */

if (
    msg === "eda" ||
    msg.includes("exploratory data analysis")
)
    return "EDA, or Exploratory Data Analysis, is the process of examining a dataset to understand its structure, distributions, patterns, relationships, missing values and potential anomalies before deeper analysis.";


/* ---------------------------------------------------------
   CORRELATION
--------------------------------------------------------- */

if (
    msg === "correlation" ||
    msg === "correlations"
)
    return "Correlation measures how two variables move in relation to each other. Importantly, correlation does not by itself prove causation.";


/* ---------------------------------------------------------
   DATA MODELING
--------------------------------------------------------- */

if (
    msg === "modeling" ||
    msg === "modelling" ||
    msg.includes("data model") ||
    msg.includes("data modeling")
)
    return "Data modeling defines how data is structured and how different entities relate to each other. Good modeling helps make analysis accurate, maintainable and efficient.";


/* ---------------------------------------------------------
   ETL / ELT
--------------------------------------------------------- */

if (
    msg === "etl" ||
    msg === "elt" ||
    msg === "pipeline" ||
    msg === "pipelines"
)
    return "ETL stands for Extract, Transform and Load. It involves extracting data from sources, transforming it into a usable format and loading it into a target system. ELT performs transformation after loading.";


/* ---------------------------------------------------------
   VERSION CONTROL
--------------------------------------------------------- */

if (
    msg === "git" ||
    msg === "github" ||
    msg === "version control"
)
    return "Git is a version-control system used to track changes in code and collaborate safely. GitHub provides a platform for hosting repositories and collaborating on projects.";


/* ---------------------------------------------------------
   JIRA / AGILE
--------------------------------------------------------- */

if (
    msg === "jira" ||
    msg === "agile" ||
    msg === "scrum"
)
    return "I understand Agile-style workflows where work is broken into manageable tasks, prioritized and tracked through tools such as Jira.";


/* ---------------------------------------------------------
   DOCUMENTATION
--------------------------------------------------------- */

if (
    msg === "documentation" ||
    msg === "docs"
)
    return "Good documentation makes analytical work easier to understand, maintain and reproduce. I try to document important assumptions, data sources, logic and decisions.";


/* ---------------------------------------------------------
   LEARNING
--------------------------------------------------------- */

if (
    msg === "learning" ||
    msg === "learn" ||
    msg === "upskilling"
)
    return "I'm continuously building my skills across data analytics, AI/ML, programming and modern technical tools. I believe consistent learning is essential in technology.";


/* ---------------------------------------------------------
   PROBLEM SOLVING
--------------------------------------------------------- */

if (
    msg === "problemsolving" ||
    msg === "problem-solving" ||
    msg === "problem"
)
    return "My approach is to understand the root problem, break it into smaller parts, validate assumptions, solve systematically and measure whether the solution actually works.";


/* ---------------------------------------------------------
   ADAPTABILITY
--------------------------------------------------------- */

if (
    msg === "adaptability" ||
    msg === "adaptable" ||
    msg === "flexible"
)
    return "I'm adaptable and comfortable learning new tools or approaches when a project requires them. I focus on understanding the problem first and then choosing the right solution.";


/* ---------------------------------------------------------
   COMMUNICATION
--------------------------------------------------------- */

if (
    msg === "communication" ||
    msg === "communication skills"
)
    return "I believe technical work is only valuable when the result can be communicated clearly. I try to explain findings in a way that matches the audience's technical and business context.";


/* ---------------------------------------------------------
   LEADERSHIP
--------------------------------------------------------- */

if (
    msg === "leadership" ||
    msg === "leader"
)
    return "I'm interested in growing into leadership through ownership, collaboration, continuous learning and helping others solve problems effectively.";


/* ---------------------------------------------------------
   OWNERSHIP
--------------------------------------------------------- */

if (
    msg === "ownership" ||
    msg === "responsibility"
)
    return "I believe in taking ownership of the outcome, not just completing an assigned task. That means communicating blockers, validating the result and following through.";


/* ---------------------------------------------------------
   CURIOSITY
--------------------------------------------------------- */

if (
    msg === "curious" ||
    msg === "curiosity"
)
    return "Curiosity is one of the things that drives me. I enjoy understanding how things work, asking better questions and experimenting with new technologies.";


/* ---------------------------------------------------------
   TEAMWORK
--------------------------------------------------------- */

if (
    msg === "teamwork" ||
    msg === "collaboration" ||
    msg === "collaborate"
)
    return "I enjoy collaboration because different perspectives often produce better solutions. I'm also comfortable taking ownership of individual work when needed.";


/* ---------------------------------------------------------
   REMOTE / OFFICE
--------------------------------------------------------- */

if (
    msg === "remote" ||
    msg === "office" ||
    msg === "hybrid"
)
    return "I'm open to different working environments and can adapt to remote, hybrid or office-based collaboration depending on the role and team.";


/* ---------------------------------------------------------
   RELOCATION
--------------------------------------------------------- */

if (
    msg === "relocation" ||
    msg === "relocate"
)
    return "I'm open to considering relocation for the right opportunity and role.";


/* ---------------------------------------------------------
   AVAILABILITY
--------------------------------------------------------- */

if (
    msg === "available" ||
    msg === "availability"
)
    return "For specific availability or joining details, it's best to contact Samarth directly through the contact information provided on the website.";


/* =========================================================
   INTERVIEW QUICK WORDS
========================================================= */

if (
    msg === "interview"
)
    return "If you're reviewing Samarth for an opportunity, you can ask me about his education, skills, projects, experience, technical tools, work style or career goals.";


if (
    msg === "hr"
)
    return "You can ask me HR-style questions about strengths, weaknesses, teamwork, leadership, career goals, motivation and work preferences.";


if (
    msg === "technical"
)
    return "You can ask about SQL, Python, Power BI, Tableau, Excel, data analysis, dashboards, ETL, data modeling and AI/ML.";


if (
    msg === "analytics"
)
    return "Analytics is about using data to understand what is happening, why it is happening and what decisions can be improved using those insights.";



// =====================================================
// SINGLE-WORD / SHORT-WORD REPLIES
// Covers common one-word visitor queries
// =====================================================

if (msg === "resume" || msg === "cv")
    return "You can download my latest resume from the homepage. 📄";

if (msg === "skills" || msg === "skill")
    return "My core skills include SQL, Python, Power BI, Tableau, Excel, data analysis, visualization, and AI/ML.";

if (msg === "experience" || msg === "work")
    return "I have hands-on experience working with data analysis, dashboards, automation, reporting, and real-world business problems.";

if (msg === "education" || msg === "study")
    return "I have a B.Sc. in Information Technology and I’m pursuing a Master’s in Computer Science with a focus on AI & ML.";

if (msg === "projects" || msg === "project")
    return "Explore my Projects section to see the data, analytics, AI/ML, dashboard, and development work I’ve built.";

if (msg === "github")
    return "You can explore my coding projects and repositories through my GitHub profile.";

if (msg === "linkedin")
    return "You can connect with me on LinkedIn: linkedin.com/in/samarth-kolge-134929285";

if (msg === "email" || msg === "mail")
    return "You can reach me at kolgesamarth@gmail.com 📧";

if (msg === "phone" || msg === "number")
    return "You can contact me through WhatsApp at 9518905490 📱";

if (msg === "contact")
    return "You can reach me through email, WhatsApp, or LinkedIn.";

if (msg === "location" || msg === "pune")
    return "I’m based in Pune, India 🇮🇳";

if (msg === "india")
    return "Yes, I’m based in India 🇮🇳";

if (msg === "python")
    return "Python is one of my primary tools for data analysis, automation, visualization, and AI/ML.";

if (msg === "sql")
    return "SQL is one of my strongest tools. I use it for querying, transformation, analysis, reporting, and working with structured data.";

if (msg === "excel")
    return "I use Excel for data cleaning, analysis, reporting, formulas, and business-oriented data work.";

if (msg === "powerbi" || msg === "power")
    return "Power BI is one of my dashboarding and business intelligence tools.";

if (msg === "tableau")
    return "Tableau is one of the visualization and dashboarding tools I work with.";

if (msg === "analytics" || msg === "analysis")
    return "I enjoy turning raw data into useful insights through analysis, visualization, and clear storytelling.";

if (msg === "data")
    return "Data is where I enjoy working most — cleaning it, analyzing it, visualizing it, and turning it into actionable insights.";

if (msg === "ai" || msg === "ml" || msg === "aiml")
    return "I’m focused on AI & ML as part of my Master’s journey and continuously expanding my practical knowledge.";

if (msg === "developer" || msg === "development")
    return "I also enjoy development, especially building interactive web experiences and practical tools around data and technology.";

if (msg === "devlab" || msg === "dev")
    return "DevLab is my interactive engineering playground for experimenting with SQL, Python, analytics, development, and technical ideas. 🧪";

if (msg === "dashboard" || msg === "dashboards")
    return "I build dashboards to transform complex data into clear, interactive, and decision-friendly visual insights.";

if (msg === "automation" || msg === "automations")
    return "I enjoy automating repetitive data and reporting workflows to improve efficiency and reduce manual effort.";

if (msg === "python")
    return "Python helps me work with data, automation, visualization, and AI/ML workflows.";

if (msg === "pandas")
    return "Pandas is one of my go-to Python libraries for data manipulation, cleaning, transformation, and analysis.";

if (msg === "matplotlib")
    return "Matplotlib is useful for creating analytical visualizations and exploring patterns in data.";

if (msg === "jira")
    return "I use Jira-style workflows for organizing tasks, tracking progress, and managing project work.";

if (msg === "ai")
    return "AI is one of my major areas of interest, especially where it can solve practical problems and create useful products.";

if (msg === "career")
    return "My career direction is centered around data, analytics, AI/ML, and building solutions that create measurable value.";

if (msg === "goal")
    return "My goal is to keep growing technically while solving meaningful real-world problems with data and AI.";

if (msg === "future")
    return "I’m focused on continuously improving my skills and growing toward impactful roles in data, analytics, and AI.";

if (msg === "internship")
    return "I’m interested in opportunities where I can apply my technical skills to real-world data and engineering problems.";

if (msg === "job")
    return "I’m open to opportunities where I can contribute through data analysis, analytics, AI/ML, and technical problem-solving.";

if (msg === "hire" || msg === "hiring")
    return "If you’re interested in working with me, feel free to reach out through my contact details.";

if (msg === "freelance")
    return "I’m interested in practical projects involving data, analytics, dashboards, automation, AI/ML, and development.";

if (msg === "remote")
    return "I’m open to discussing suitable remote opportunities.";

if (msg === "relocation")
    return "I’m open to relocation for the right opportunity.";

if (msg === "availability")
    return "Feel free to contact me directly to discuss availability and opportunities.";

if (msg === "portfolio")
    return "You’re already on my portfolio. Explore the different sections to see my work, skills, projects, and experiments.";

if (msg === "website" || msg === "portfolio")
    return "This portfolio brings together my professional profile, projects, dashboards, experiments, and DevLab.";

if (msg === "about")
    return "I’m Samarth Kolge — a data-focused technologist pursuing a Master’s in Computer Science with an AI/ML focus.";

if (msg === "samarth")
    return "Samarth Kolge — data-focused, curious, and always building something. 🚀";

if (msg === "name")
    return "I’m Samarth Kolge. 👋";

if (msg === "age")
    return "I’d rather let my work speak than my age. 😄";

if (msg === "city")
    return "Pune, India 🇮🇳";

if (msg === "college")
    return "I completed my B.Sc. IT from DBJ College and I’m pursuing my Master’s in Computer Science.";

if (msg === "master")
    return "I’m pursuing a Master’s in Computer Science with a focus on AI & ML.";

if (msg === "bsc")
    return "I completed my B.Sc. in Information Technology.";

if (msg === "msc")
    return "I’m currently pursuing my Master’s in Computer Science.";

if (msg === "woolf")
    return "My Master’s program is through Woolf University.";

if (msg === "school")
    return "I studied at Alore Highschool.";

if (msg === "coffee")
    return "Coffee and code make a pretty good combination. ☕💻";

if (msg === "chai")
    return "Masala chai gets an honorable mention. ☕😄";

if (msg === "chess")
    return "Chess is one of my favorite hobbies. I enjoy the strategy and problem-solving involved. ♟️";

if (msg === "cricket")
    return "I enjoy playing cricket, especially with friends. 🏏";

if (msg === "badminton")
    return "Badminton is one of the sports I enjoy playing. 🏸";

if (msg === "carrom")
    return "Carrom is another game I enjoy playing. 🎯";

if (msg === "kabaddi")
    return "I enjoy kabaddi as well. 💪";

if (msg === "gaming" || msg === "games")
    return "Gaming is one of the ways I relax when I’m away from projects and data.";

if (msg === "music")
    return "I enjoy music while working, especially something that helps me stay focused.";

if (msg === "travel")
    return "I enjoy traveling and exploring new places whenever I get the opportunity. 🌍";

if (msg === "food")
    return "I’m a fan of Indian food, especially spicy food. 🌶️";

if (msg === "pizza")
    return "Pizza is always a safe choice. 🍕";

if (msg === "dog" || msg === "dogs")
    return "Dogs are awesome — loyal, energetic, and always happy to see you. 🐶";

if (msg === "cat" || msg === "cats")
    return "Cats are pretty great too. Independent but surprisingly entertaining. 🐱";

if (msg === "book" || msg === "books")
    return "I enjoy books that help with learning, personal growth, and better habits.";

if (msg === "motivation")
    return "Keep learning, keep building, and keep moving forward. 🚀";

if (msg === "motto")
    return "Keep learning, keep building, keep improving.";

if (msg === "success")
    return "For me, success means creating meaningful impact while continuously learning.";

if (msg === "failure")
    return "Failure is feedback. Understand what went wrong, improve, and try again.";

if (msg === "strength")
    return "Problem-solving, curiosity, adaptability, and attention to detail.";

if (msg === "weakness")
    return "I can sometimes spend too much time perfecting details, so I’ve learned to balance quality with deadlines.";

if (msg === "team")
    return "I enjoy teamwork and believe different perspectives usually produce better solutions.";

if (msg === "leadership")
    return "I’m comfortable taking ownership, organizing work, and helping a team move toward a common goal.";

if (msg === "communication")
    return "Clear communication is important to me, especially when translating technical findings into understandable business insights.";

if (msg === "learning")
    return "I’m a continuous learner. Technology changes quickly, so I’m always exploring something new.";

if (msg === "problem")
    return "I enjoy breaking complex problems into smaller, manageable pieces and solving them systematically.";

if (msg === "insights")
    return "Good analysis should turn data into insights that people can actually use.";

if (msg === "storytelling")
    return "Data storytelling means presenting insights in a way that makes the important message easy to understand.";

if (msg === "kpi")
    return "KPI means Key Performance Indicator — a measurable value used to track progress toward an objective.";

if (msg === "etl")
    return "ETL means Extract, Transform, Load — a common process for preparing and moving data.";

if (msg === "api")
    return "APIs allow different software systems to communicate and exchange data.";

if (msg === "database" || msg === "db")
    return "Databases organize and store data so applications and analysts can efficiently retrieve and work with it.";

if (msg === "git" || msg === "github")
    return "Git and GitHub are useful for version control, collaboration, and managing software projects.";

if (msg === "html")
    return "HTML provides the structure of a web page.";

if (msg === "css")
    return "CSS controls the visual presentation, layout, and styling of web pages.";

if (msg === "javascript" || msg === "js")
    return "JavaScript adds behavior and interactivity to web applications.";

if (msg === "frontend")
    return "Frontend development focuses on the user-facing side of web applications.";

if (msg === "backend")
    return "Backend development handles server-side logic, data, APIs, and application infrastructure.";

if (msg === "website")
    return "This website is a combination of my portfolio, experiments, projects, and interactive engineering work.";

if (msg === "contact")
    return "You can reach me through email, WhatsApp, or LinkedIn. 📬";

if (msg === "help")
    return "Try asking about my skills, education, projects, experience, DevLab, career, hobbies, or contact details.";

if (msg === "thanks" || msg === "thankyou" || msg === "thank")
    return "You're welcome! 😊";

if (msg === "sorry")
    return "No worries at all! 😊";

if (msg === "cool")
    return "Glad you think so! 😎";

if (msg === "nice")
    return "Thank you! 🚀";

if (msg === "awesome")
    return "Appreciate it! 😄";

if (msg === "great")
    return "Glad to hear that! 👍";

if (msg === "wow")
    return "Haha, I’ll take that as a good sign. 😄";

if (msg === "hmm" || msg === "hmmm")
    return "Thinking mode activated. 🤔";

if (msg === "oops")
    return "No worries — happens to the best of us. 😄";

if (msg === "lol" || msg === "lmao")
    return "😂";

if (msg === "haha" || msg === "hahaha" || msg === "hehe")
    return "😄 Glad that made you laugh!";

if (msg === "bye" || msg === "goodbye")
    return "See you around! Keep building. 🚀";

if (msg === "welcome")
    return "Thank you! Make yourself at home. 😊";

if (msg === "okay" || msg === "ok" || msg === "okk")
    return "Sounds good! 👍";









// =====================================================
// PEOPLE / CONNECTIONS
// =====================================================

if (
    msg.includes("aditi") ||
    msg.includes("aditii") ||
    msg.includes("aditiii") ||
    msg.includes("aditishinde5959") ||
    msg.includes("who is aditi") ||
    msg.includes("tell me about aditi")



)
return "Aditi is one of the kindest people I’ve met and was proudly my first friend at Lentra. She completed her Bachelor's degree from New College, Kolhapur, and is currently pursuing her Master’s in Computer Applications at Progressive Education Society’s Modern College of Engineering, Pune. Professionally, she is a skilled and insightful Business Analyst at Lentra, while also aspiring to grow further into software development. Beyond her professional journey, she’s someone I genuinely value as a friend. 😊";


if (
    msg.includes("amit") ||
    msg.includes("who is amit") ||
    msg.includes("tell me about amit") ||
    msg.includes("amit sir")
)
return "🧑‍💻 Amit Botre is a Senior Software Development Engineer at Lentra. He has a strong background in Full-Stack Development and holds an MCA in Computer Software Engineering from Pune University. With experience in the fintech domain, he is known for his technical expertise, structured problem-solving, mentorship, and collaborative approach. I’ve been fortunate to learn from his experience and guidance. 🙌";





    return `
I'm not sure about that one yet. 🤔

Try asking me about:

• Samarth's experience
• Lentra.ai
• Skills & technologies
• SQL / Python
• AI / ML
• Projects
• GitHub
• Dashboards
• Education
• Resume
• DevLab
• Contact
    `.trim();

}
    




  



chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  addMessage(userMessage, 'user');

const welcomePanel = document.getElementById("welcomePanel");
const welcomeCompact = document.getElementById("welcomeCompact");

if (
    welcomePanel &&
    welcomeCompact &&
    !welcomePanel.classList.contains("hidden")
) {

    welcomePanel.classList.add("hidden");
    welcomeCompact.classList.remove("hidden");

}

  chatInput.value = "";

const typingDiv = document.createElement("div");

typingDiv.innerHTML = `
<div class="flex items-center gap-2 mb-2">

<div class="px-4 py-3 rounded-3xl rounded-bl-lg bg-white/10 backdrop-blur-md">

<div class="flex gap-1">

<span class="typing-dot"></span>
<span class="typing-dot"></span>
<span class="typing-dot"></span>

</div>

</div>

</div>
`;



  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    chatMessages.removeChild(typingDiv);
    const premiumReply = getPremiumReply(userMessage);
    const reply = premiumReply || getBotReply(userMessage);
    const aiAnchor = document.createElement("div");
    aiAnchor.style.height = "1px";
    chatMessages.appendChild(aiAnchor);

    aiAnchor.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    addMessage(reply, "bot");
      }, 1000);
});




const voiceBtn = document.getElementById("voiceBtn");
const voiceIcon = document.getElementById("voiceIcon");
const voiceWave = document.getElementById("voiceWave");


// ==========================
// Voice Recognition
// ==========================

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = null;
let isListening = false;





// ======================================
// Premium Voice Typing
// ======================================

if (SpeechRecognition) {

    recognition = new SpeechRecognition();

    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.lang = "en-US";

    voiceBtn.addEventListener("click", () => {

        if (!isListening) {

            recognition.start();

        } else {

            recognition.stop();

        }

    });

    recognition.onstart = () => {

        isListening = true;

        

        voiceIcon.classList.add("hidden");

        voiceWave.classList.remove("hidden");

        chatInput.placeholder = "Listening... Speak now...";

    };

    recognition.onresult = (event) => {

        let transcript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {

            transcript += event.results[i][0].transcript;

        }

        chatInput.value = transcript;

    };

    recognition.onend = () => {

        isListening = false;

        

        voiceWave.classList.add("hidden");

        voiceIcon.classList.remove("hidden");

        chatInput.placeholder = "Ask me anything...";

    };

} else {

    voiceBtn.style.display = "none";

}





/*==================================================
        PREMIUM ONE-TIME SCROLL ANIMATION
        High Performance
==================================================*/

let preventScrollSave = false;

window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger);

    /*=========================================
        Animate Sections (One Time Only)
    =========================================*/

    gsap.utils.toArray("section:not(#home)").forEach((section) => {

        if (section.id === "top") return;

        gsap.from(section, {

            opacity: 0,
            y: 70,
            scale: 0.98,
            duration: 0.9,
            ease: "power3.out",
            force3D: true,

            scrollTrigger: {

                trigger: section,
                start: "top 82%",
                once: true

            }

        });

    });

    /*=========================================
        About Text
    =========================================*/

    const about = document.querySelector(".about-text");

    if (about) {

        gsap.from(about, {

            x: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            force3D: true,

            scrollTrigger: {

                trigger: about,
                start: "top 82%",
                once: true

            }

        });

    }

    /*=========================================
        Smart Anchor Scroll
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const targetID = this.getAttribute("href");

            if (targetID === "#") return;

            const targetElement = document.querySelector(targetID);

            if (!targetElement) return;

            e.preventDefault();

            preventScrollSave = true;

            const headerOffset = 100;

            const offsetPosition =
                targetElement.getBoundingClientRect().top +
                window.scrollY -
                headerOffset;

            window.scrollTo({

                top: offsetPosition,
                behavior: "smooth"

            });

        });

    });

    /*=========================================
        Restore Scroll Position
    =========================================*/

    const savedY = sessionStorage.getItem("scrollY");

    if (savedY !== null) {

        window.scrollTo(0, Number(savedY));

        sessionStorage.removeItem("scrollY");

    }

}); // <-- ONLY ONE closing for load event

/*=========================================
    Save Scroll Before Refresh
=========================================*/

window.addEventListener("beforeunload", () => {

    if (!preventScrollSave) {

        sessionStorage.setItem("scrollY", window.scrollY);

    }

});


/*====================================
PHOTO SPOTLIGHT + GALLERY
====================================*/

const photoStack = document.querySelector(".photo-stack");

if (photoStack) {

    // Spotlight
    photoStack.addEventListener("mousemove", (e) => {

        const rect = photoStack.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        photoStack.style.setProperty("--mx", `${x}px`);
        photoStack.style.setProperty("--my", `${y}px`);

    });

    // Gallery Rotation
    let galleryPaused = false;

    photoStack.addEventListener("mouseenter", () => {

        galleryPaused = true;

    });

    photoStack.addEventListener("mouseleave", () => {

        galleryPaused = false;

    });

    const rotateGallery = () => {

        if (galleryPaused) return;

        const left = photoStack.querySelector(".photo-left");
        const center = photoStack.querySelector(".photo-center");
        const right = photoStack.querySelector(".photo-right");

        if (!left || !center || !right) return;

        left.classList.replace("photo-left", "photo-right");
        center.classList.replace("photo-center", "photo-left");
        right.classList.replace("photo-right", "photo-center");

    };

    setInterval(rotateGallery, 3000);

}
/*====================================
ACTIVE PHOTO
====================================*/
const photoCards = document.querySelectorAll(".photo-card");

photoCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        photoCards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");

    });

});










/* ============================================================
   HERO JS PART 3A
   Typing Effect
   Count Animation
   Stagger Animation
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       Typing Animation
    ====================================================== */
/* =====================================================
   Typing Animation (Performance Optimized)
====================================================== */

const roles = window.innerWidth <= 768
    ? [
    "Data Analyst",
    "Product Engineer",
    "Tech Business Analyst",
    "SQL • Python • Power BI",
]
    : [
    "Data Analyst",
    "Product Engineer",
    "Tech Business Analyst",
    "SQL • Python • Power BI",
    "AI / Machine Learning Enthusiast"
];



const typing = document.getElementById("typing-text");
const heroSection = document.getElementById("home");

if (typing && heroSection) {

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    let timer = null;
    let heroVisible = true;

    function typeRole() {

        if (!heroVisible || document.hidden) {
            timer = null;
            return;
        }

        const current = roles[roleIndex];

        if (!deleting) {

            typing.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                timer = setTimeout(typeRole, 1800);

                return;

            }

        } else {

            typing.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                roleIndex = (roleIndex + 1) % roles.length;

            }

        }

        timer = setTimeout(typeRole, deleting ? 40 : 90);

    }

    const observer = new IntersectionObserver((entries) => {

        heroVisible = entries[0].isIntersecting;

        if (heroVisible && !timer && !document.hidden) {

            typeRole();

        }

    }, {

        threshold: 0.1

    });

    observer.observe(heroSection);

    document.addEventListener("visibilitychange", () => {

        if (!document.hidden && heroVisible && !timer) {

            typeRole();

        }

    });

    typeRole();

}

    /* =====================================================
       Counter Animation
    ====================================================== */
/* ==========================================
   Premium Counter Animation
========================================== */

function animateCounter(id, end, duration = 3200) {

    const el = document.getElementById(id);

    if (!el) return;

    let startTime = null;

    function update(timestamp){

        if(!startTime){

            startTime = timestamp;

        }

        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Ease-Out Cubic
        const eased = 1 - Math.pow(1 - progress, 3);

        const value = Math.floor(eased * end);

        el.textContent = value;

        if(progress < 1){

            requestAnimationFrame(update);

        }else{

            el.textContent = end;

        }

    }

    requestAnimationFrame(update);

}



/* ==========================================
   Start Counter When Visible
========================================== */

const statsSection = document.querySelector(".hero-stats");

let counterStarted = false;

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting && !counterStarted){

            counterStarted = true;

            animateCounter("projects-count",20);

            observer.disconnect();

        }

    });

},{
    threshold:0.55
});

if(statsSection){

    observer.observe(statsSection);

}

    /* =====================================================
       Hero Fade
    ====================================================== */

  








    /* =====================================================
       Chip Animation
    ====================================================== */

    const chips = document.querySelectorAll(".skill-chip");

    chips.forEach((chip, index) => {

        chip.animate(

            [

                {
                    opacity: 0,
                    transform: "translateY(20px)"
                },

                {
                    opacity: 1,
                    transform: "translateY(0px)"
                }

            ],

            {

                duration: 700,

                delay: index * 70,

                fill: "forwards"

            }

        );

    });

});


/* ============================================================
   HERO JS PART 3B
   Particles • Mouse Parallax • Cursor Glow
============================================================ */

document.addEventListener("DOMContentLoaded", () => {


  /* ==========================================
   Shared Mouse Engine
========================================== */

let mouseX = 0;
let mouseY = 0;

let mouseRAF = null;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});


    /* ==========================================
       Floating Particles
    ========================================== */

    const particleContainer = document.getElementById("particles");

    if (particleContainer) {

        for (let i = 0; i < 40; i++) {

            const particle = document.createElement("span");

            const size = Math.random() * 5 + 2;

            particle.style.position = "absolute";
            particle.style.width = size + "px";
            particle.style.height = size + "px";
            particle.style.borderRadius = "50%";
            particle.style.background = "rgba(255,255,255,.35)";
            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";

            particle.style.animation = `
                particleFloat
                ${8 + Math.random() * 10}s
                linear
                infinite
            `;

            particle.style.animationDelay =
                Math.random() * 6 + "s";

            particleContainer.appendChild(particle);

        }

    }

/* ==========================================
   Cursor Glow (GPU Optimized)
========================================== */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "220px";
glow.style.height = "220px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
    "radial-gradient(circle, rgba(34,197,94,.18), transparent 70%)";
glow.style.filter = "blur(25px)";
glow.style.zIndex = "1";

/* GPU */

glow.style.left = "0";
glow.style.top = "0";
glow.style.willChange = "transform";
glow.style.transform = "translate3d(-999px,-999px,0)";

document.body.appendChild(glow);

let glowX = 0;
let glowY = 0;
let glowRAF = null;

document.addEventListener("mousemove", (e) => {

    glowX = e.clientX;
    glowY = e.clientY;

    if (glowRAF) return;

    glowRAF = requestAnimationFrame(() => {

        glow.style.transform =
            `translate3d(${glowX-110}px,${glowY-110}px,0)`;

        glowRAF = null;

    });

});

    /* ==========================================
       Magnetic Buttons
    ========================================== */

    const buttons = document.querySelectorAll(
        ".btn-primary,.btn-secondary"
    );

    buttons.forEach(btn => {

        btn.addEventListener("mousemove", (e) => {

            const rect = btn.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;

            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform =
                `translate(${x * .15}px,${y * .15}px)`;

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translate(0,0)";

        });

    });

});




/* ============================================================
   HERO JS PART 3C
   Scroll Reveal • 3D Cards • Smooth Scroll
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Scroll Reveal Animation
    ========================================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";
                entry.target.style.transition = "all .8s ease";

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".glass-card,.bank-pill,.skill-chip").forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";

        observer.observe(el);

    });

    /* ==========================================
       3D Tilt Cards
    ========================================== */

    const cards = document.querySelectorAll(".glass-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = (x - rect.width / 2) / 12;
            const rotateX = -(y - rect.height / 2) / 12;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0px)
            `;

        });

    });

    /* ==========================================
       Bank Pills Hover Glow
    ========================================== */

    document.querySelectorAll(".bank-pill").forEach(pill => {

        pill.addEventListener("mouseenter", () => {

            pill.style.boxShadow =
                "0 0 30px rgba(34,197,94,.45)";

        });

        pill.addEventListener("mouseleave", () => {

            pill.style.boxShadow = "";

        });

    });
/* ==========================================
   Hero Background Rotation (Performance Optimized)
========================================== */

const blobs = document.querySelectorAll(".blob");
const heroSection = document.getElementById("home");

let angle = 0;
let heroVisible = true;
let animationId = null;

function animateBackground() {

    if (!heroVisible) {
        animationId = null;
        return;
    }

    angle += 0.002;

    blobs.forEach((blob, index) => {

        const radius = 25 + index * 8;

        const x = Math.cos(angle + index) * radius;
        const y = Math.sin(angle + index) * radius;

        blob.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;

    });

    animationId = requestAnimationFrame(animateBackground);

}

const heroObserver = new IntersectionObserver((entries) => {

    heroVisible = entries[0].isIntersecting;

    if (heroVisible && !animationId) {

        animateBackground();

    }

}, {

    threshold: 0.05

});

heroObserver.observe(heroSection);

animateBackground();






    /* ==========================================
       Active Navigation Highlight
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

});



document.querySelectorAll(".suggestion").forEach(btn=>{

btn.addEventListener("click",()=>{

chatInput.value=btn.innerText.replace(/[^\w\s]/g,"").trim();

chatForm.requestSubmit();

});

});



document.querySelectorAll(".btn-primary").forEach(btn=>{

    const icon = btn.querySelector(".btn-icon");

    btn.addEventListener("mouseenter",()=>{

        icon.textContent="📥";

    });

    btn.addEventListener("mouseleave",()=>{

        icon.textContent="📄";

    });

});

document.querySelectorAll(".btn-secondary").forEach(btn=>{

    const icon = btn.querySelector(".btn-icon");

    const text = btn.querySelector(".btn-text");

    btn.addEventListener("mouseenter",()=>{

        icon.textContent="📈";

        text.textContent="Explore Dashboard";

    });

    btn.addEventListener("mouseleave",()=>{

        icon.textContent="📊";

        text.textContent="View Dashboard";

    });

});








/*=========================================
ABOUT GLASS
=========================================*/

const aboutGlass = document.getElementById("aboutGlass");

if (aboutGlass) {

    aboutGlass.addEventListener("mousemove", (e) => {

        const rect = aboutGlass.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        aboutGlass.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        aboutGlass.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

        const rotateY =
            (x / rect.width - .5) * 6;

        const rotateX =
            (.5 - y / rect.height) * 6;

        aboutGlass.style.transform =

        `
        perspective(1800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(0)
        `;

    });

    aboutGlass.addEventListener("mouseleave", () => {

        aboutGlass.style.transform =

        `
        perspective(1800px)
        rotateX(0deg)
        rotateY(0deg)
        `;

    });

}










/*==================================================
            CERTIFICATE VIEWER
==================================================*/

const certificates = [

{
    image:"assets/SQL.png",
    title:"SQL Fundamentals"
},

{
    image:"assets/Python_Libraries.png",
    title:"Python Libraries"
},

{
    image:"assets/EDA_Fundamentals.png",
    title:"Exploratory Data Analysis"
},

{
    image:"assets/Supervised_Learning.png",
    title:"Supervised Learning"
},

{
    image:"assets/Unsupervised_Learning.png",
    title:"Unsupervised Learning"
},

{
    image:"assets/SQL_ADV.png",
    title:"Advanced SQL"
},

{
    image:"assets/Pob_Sol_In.png",
    title:"Problem Solving"
},

{
    image:"assets/Government.png",
    title:"Government Certification"
},

{
    image:"assets/Python_Basic.png",
    title:"Python Basics"
},

{
    image:"assets/Python_SQL_ScalerTopic.png",
    title:"Python & SQL"
},

{
    image:"assets/Supervsied Learning.png",
    title:"Supervised Learning Project"
}

];

let currentCertificate = 0;
let currentZoom = 1;

/*==================================================
                OPEN
==================================================*/

function openModal(image){

    currentCertificate = certificates.findIndex(
        c => c.image === image
    );

    if(currentCertificate < 0){

        currentCertificate = 0;

    }

    currentZoom = 1;

    updateCertificate();

    document
        .getElementById("certificateModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";

}

/*==================================================
                CLOSE
==================================================*/

function closeModal(){

    document
        .getElementById("certificateModal")
        .classList.remove("active");

    document.body.style.overflow = "";

}

/*==================================================
                UPDATE
==================================================*/

function updateCertificate(){

    const cert = certificates[currentCertificate];

    const img = document.getElementById("modalImage");

    img.src = cert.image;

    img.style.transform = `scale(${currentZoom})`;

    document
        .getElementById("certificateTitle")
        .textContent = cert.title;

    document
        .getElementById("certificateCounter")
        .textContent =
        `${currentCertificate + 1} / ${certificates.length}`;

    document
        .getElementById("downloadBtn")
        .href = cert.image;

}

/*==================================================
            PREVIOUS
==================================================*/

function previousCertificate(){

    currentCertificate--;

    if(currentCertificate < 0){

        currentCertificate = certificates.length - 1;

    }

    currentZoom = 1;

    updateCertificate();

}

/*==================================================
                NEXT
==================================================*/

function nextCertificate(){

    currentCertificate++;

    if(currentCertificate >= certificates.length){

        currentCertificate = 0;

    }

    currentZoom = 1;

    updateCertificate();

}

/*==================================================
                ZOOM
==================================================*/

document
.getElementById("zoomInBtn")
.addEventListener("click",()=>{

    currentZoom += 0.15;

    updateCertificate();

});

document
.getElementById("zoomOutBtn")
.addEventListener("click",()=>{

    currentZoom = Math.max(

        0.6,

        currentZoom - 0.15

    );

    updateCertificate();

});

/*==================================================
            BACKDROP
==================================================*/

document
.querySelector(".modal-backdrop")
.addEventListener("click",closeModal);

/*==================================================
            KEYBOARD
==================================================*/

document.addEventListener("keydown",(e)=>{

    const modal =
        document.getElementById("certificateModal");

    if(!modal.classList.contains("active")) return;

    switch(e.key){

        case "Escape":

            closeModal();

            break;

        case "ArrowLeft":

            previousCertificate();

            break;

        case "ArrowRight":

            nextCertificate();

            break;

        case "+":

            currentZoom += .15;

            updateCertificate();

            break;

        case "-":

            currentZoom = Math.max(

                .6,

                currentZoom - .15

            );

            updateCertificate();

            break;

    }

});









/*==================================================
        PREMIUM NAVBAR CONTROLLER
==================================================*/

(() => {

    const navbar = document.getElementById("navbar");
    const announcement = document.getElementById("announcementBar");

    const shell = document.querySelector(".navbar-shell");
    const menu = document.querySelector(".navbar-menu");

    const pill = document.querySelector(".nav-active-pill");

    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll("section[id]");

    let currentTop = 48;
    let targetTop = 48;

    /*==========================================
            ACTIVE PILL
    ==========================================*/

    function movePill(target){

        if(!target) return;

        const shellRect = shell.getBoundingClientRect();
        const rect = target.getBoundingClientRect();

        pill.style.width = rect.width + "px";
        pill.style.left = (rect.left - shellRect.left) + "px";

    }

    /*==========================================
            ACTIVE SECTION
    ==========================================*/


    function updateSection() {

    let current = "top";

    const scroll = window.scrollY + 120;

    const aboutSection = document.getElementById("about");

    // Stay on Home until About is reached
    if (scroll < aboutSection.offsetTop) {

        current = "top";

    } else {

        sections.forEach(section => {

            if (section.id === "top" || section.id === "home") return;

            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (scroll >= top && scroll < bottom) {
                current = section.id;
            }

        });

    }

    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + current) {

            item.classList.add("active");

            movePill(item);
            hideHoverPill();

        }

    });

}

    /*==========================================
            SCROLL TARGET
    ==========================================*/

    function updateTarget(){

        const bannerHeight = announcement.offsetHeight + 8;

        targetTop = Math.max(
            2,
            bannerHeight - window.scrollY
        );

        if(targetTop <= 2){

            navbar.classList.add("compact");

        }else{

            navbar.classList.remove("compact");

        }

    }

    /*==========================================
            SMOOTH LOOP
    ==========================================*/

    function animate(){

        currentTop += (targetTop-currentTop)*0.30;

        navbar.style.top = currentTop+"px";

        requestAnimationFrame(animate);

    }

    /*==========================================
            MOUSE LIGHT
    ==========================================*/

    shell.addEventListener("mousemove",(e)=>{

        const rect = shell.getBoundingClientRect();

        shell.style.setProperty(
            "--mx",
            `${e.clientX-rect.left}px`
        );

        shell.style.setProperty(
            "--my",
            `${e.clientY-rect.top}px`
        );

    });

    /*==========================================
            EVENTS
    ==========================================*/

    window.addEventListener("scroll",()=>{

        updateTarget();
        updateSection();

    });

        window.addEventListener("load", () => {

            updateTarget();
            updateSection();

            requestAnimationFrame(() => {

                movePill(document.querySelector(".nav-item.active"));

            });

            // Recalculate after navbar intro animation finishes
            navbar.addEventListener("animationend", () => {

                updateSection();

                movePill(document.querySelector(".nav-item.active"));

            }, { once: true });

        });

    menu.addEventListener("mouseleave",()=>{

        hideHoverPill();

    });

    navItems.forEach(item=>{

        item.addEventListener("mouseenter",()=>{

          if(item.classList.contains("active"))
              return;

          moveHoverPill(item);

      });

    });

    animate();

})();


window.addEventListener("scroll", () => {

    console.log("ScrollY:", window.scrollY);

});




const hoverPill =
document.querySelector(".nav-hover-pill");

function moveHoverPill(target){

    if(!target) return;

    const shellRect =
        shell.getBoundingClientRect();

    const rect =
        target.getBoundingClientRect();

    hoverPill.style.opacity="1";

    hoverPill.style.width=
        rect.width+"px";

    hoverPill.style.left=
        (rect.left-shellRect.left)+"px";

    hoverPill.style.transform=
        "translateY(-50%) scale(1)";

}

function hideHoverPill(){

    hoverPill.style.opacity="0";

    hoverPill.style.transform=
        "translateY(-50%) scale(.96)";

}



/*==================================================
        AMBIENT NAVBAR SWEEP
==================================================*/

(() => {

    const shell = document.querySelector(".navbar-shell");

    if (!shell) {
        console.error("❌ navbar-shell not found");
        return;
    }

    function playAmbientSweep() {

        console.log("✨ Ambient Sweep");

        const sweep = document.createElement("div");


        sweep.className = "navbar-ambient-sweep";

        shell.appendChild(sweep);

        sweep.addEventListener("animationend", () => {

            sweep.remove();

        });

    }

    function scheduleNextSweep() {

        // Random time between 20 and 35 seconds
        const nextDelay = Math.floor(Math.random() * 15000) + 20000;

        console.log(
            `⏱ Next sweep in ${(nextDelay / 1000).toFixed(1)} sec`
        );

        setTimeout(() => {

            playAmbientSweep();

            scheduleNextSweep();

        }, nextDelay);

    }

    // First sweep after 5 seconds (Testing)
    setTimeout(() => {

        playAmbientSweep();

        scheduleNextSweep();

    }, 25000);

})();



/*==================================================
        PREMIUM MAGNETIC DOCK
==================================================*/

(() => {

    const dock = document.querySelector(".vision-dock");

    const items = [...document.querySelectorAll(".dock-item")];

    if(!dock || !items.length) return;

    dock.addEventListener("mousemove",(e)=>{

        items.forEach(item=>{

            const rect = item.getBoundingClientRect();

            const cx = rect.left + rect.width/2;

            const cy = rect.top + rect.height/2;

            const dx = e.clientX - cx;

            const dy = e.clientY - cy;

            const distance = Math.sqrt(dx*dx + dy*dy);

            const maxDistance = 170;

            const influence = Math.max(
                0,
                1 - distance/maxDistance
            );

            const scale =
                1 + influence*0.38;

            const lift =
                influence*10;

            item.style.transform = `
                translateY(${-lift}px)
                scale(${scale})
            `;

        });

    });

    dock.addEventListener("mouseleave",()=>{

        items.forEach(item=>{

            item.style.transform = "";

        });

    });

})();



/*=========================================
        PREMIUM SCROLL TO TOP
=========================================*/

window.scrollToTop = function(){

    window.scrollTo({

        top:0,

        left:0,

        behavior:"smooth"

    });

};



/*==================================================
            PREMIUM MOBILE MENU CONTROLLER
==================================================*/

(() => {

    const menu = document.getElementById("mobileMenu");

    const openBtn = document.getElementById("mobileMenuBtn");

    const closeBtn = document.getElementById("mobileMenuClose");

    const backdrop = document.getElementById("mobileBackdrop");

    const connectBtn = document.querySelector(".mobile-dock-toggle");

    const links = menu?.querySelectorAll(".mobile-link");

    if (!menu || !openBtn || !closeBtn || !backdrop) {

        console.error("❌ Mobile Menu Elements Missing");

        return;

    }

    let isOpen = false;

    /*==========================================
                OPEN MENU
    ==========================================*/

    function openMenu() {

        if (isOpen) return;

        isOpen = true;

        menu.classList.add("active");

        backdrop.classList.add("active");

        openBtn.classList.add("active");

        document.body.style.overflow = "hidden";

        if(connectBtn){

        connectBtn.classList.add("menu-open");

}

    }

    /*==========================================
                CLOSE MENU
    ==========================================*/

    function closeMenu() {

        if (!isOpen) return;

        isOpen = false;

        menu.classList.remove("active");

        backdrop.classList.remove("active");

        openBtn.classList.remove("active");

        document.body.style.overflow = "";

        if(connectBtn){

        connectBtn.classList.remove("menu-open");

}

    }

    /*==========================================
                TOGGLE
    ==========================================*/

    openBtn.addEventListener("click", () => {

        isOpen ? closeMenu() : openMenu();

    });

    /*==========================================
                CLOSE BUTTON
    ==========================================*/

    closeBtn.addEventListener("click", closeMenu);

    /*==========================================
                MENU LINKS
    ==========================================*/

    links.forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    /*==========================================
            BACKDROP CLICK
    ==========================================*/

    backdrop.addEventListener("click", closeMenu);

    /*==========================================
                ESC KEY
    ==========================================*/

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });

})();







/* =========================================================
   DEVLAB — MOBILE DISCOVERY ENGINE
   + CONNECT BUTTON CONTROLLER
   + SMART AUTO DISCOVERY
========================================================= */

(function initMobileDevLabDiscovery() {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const discovery =
        document.getElementById(
            "mobileDevLabDiscovery"
        );


    const launcher =
        document.getElementById(
            "mobileDevLabLauncher"
        );


    const closeButton =
        document.getElementById(
            "mobileDevLabClose"
        );


    const connect =
        document.querySelector(
            ".mobile-dock-toggle"
        );


    if (
        !discovery ||
        !launcher
    ) {

        console.warn(
            "[DevLab] Required elements not found."
        );

        return;

    }


    /* =====================================================
       STATE
    ===================================================== */

    let devlabOpen = false;

    let closeTimer = null;

    let repeatTimer = null;

    let autoOpenCount = 0;


    /*
     * Timing:
     *
     * 1st → 30 seconds
     * 2nd → 60 seconds
     * 3rd → 90 seconds
     * 4th → 90 seconds
     * 5th → 90 seconds
     * ...
     */

    const FIRST_DELAY =
        30000;


    const SECOND_DELAY =
        60000;


    const REPEAT_DELAY =
        90000;


    const PANEL_DISPLAY_TIME =
        8500;


    /* =====================================================
       CONNECT — HIDE
    ===================================================== */

    function hideConnect() {

        if (
            connect &&
            window.innerWidth <= 600
        ) {

            connect.style.setProperty(
                "display",
                "none",
                "important"
            );

            connect.style.setProperty(
                "visibility",
                "hidden",
                "important"
            );

            connect.style.setProperty(
                "pointer-events",
                "none",
                "important"
            );


            console.log(
                "[DevLab] CONNECT → HIDDEN"
            );

        }

    }


    /* =====================================================
       CONNECT — SHOW
    ===================================================== */

    function showConnect() {

        if (
            connect &&
            window.innerWidth <= 600
        ) {

            connect.style.setProperty(
                "display",
                "flex",
                "important"
            );

            connect.style.setProperty(
                "visibility",
                "visible",
                "important"
            );

            connect.style.setProperty(
                "pointer-events",
                "auto",
                "important"
            );


            console.log(
                "[DevLab] CONNECT → VISIBLE"
            );

        }

    }


    /* =====================================================
       OPEN DEVLAB
    ===================================================== */

    function openDevLabDiscovery(
        attention = false
    ) {

        /*
         * Cancel previous close timer.
         */

        clearTimeout(
            closeTimer
        );


        /*
         * Update state FIRST.
         */

        devlabOpen = true;


        /*
         * Open existing panel.
         */

        discovery.classList.add(
            "is-open"
        );


        /*
         * Hide CONNECT.
         */

        hideConnect();


        console.log(
            "[DevLab] STATE = OPEN"
        );


        /* =================================================
           ATTENTION EFFECT
        ================================================= */

        if (attention) {

            discovery.classList.add(
                "is-attention"
            );


            setTimeout(
                function () {

                    discovery.classList.remove(
                        "is-attention"
                    );

                },
                1400
            );

        }


        /* =================================================
           AUTOMATIC CLOSE
        ================================================= */

        closeTimer =
            setTimeout(
                function () {

                    closeDevLabDiscovery();

                },
                PANEL_DISPLAY_TIME
            );

    }


    /* =====================================================
       CLOSE DEVLAB
    ===================================================== */

    function closeDevLabDiscovery() {

        clearTimeout(
            closeTimer
        );


        devlabOpen = false;


        discovery.classList.remove(
            "is-open"
        );


        /*
         * CONNECT comes back.
         */

        showConnect();


        console.log(
            "[DevLab] STATE = CLOSED"
        );

    }


    /* =====================================================
       MANUAL LAUNCHER
       
       CLOSED → OPEN
       OPEN   → CLOSED
    ===================================================== */

    launcher.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            if (devlabOpen) {

                /*
                 * User clicked launcher
                 * while panel is open.
                 */

                closeDevLabDiscovery();

            } else {

                /*
                 * User manually opens DevLab.
                 */

                openDevLabDiscovery(
                    true
                );

            }

        },
        true
    );


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                closeDevLabDiscovery();

            },
            true
        );

    }


    /* =====================================================
       ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                devlabOpen
            ) {

                closeDevLabDiscovery();

            }

        }
    );


    /* =====================================================
       AUTOMATIC DISCOVERY SCHEDULER
    ===================================================== */

    function scheduleNextAutoOpen() {

        /*
         * Cancel any existing timer.
         */

        clearTimeout(
            repeatTimer
        );


        /*
         * Decide delay based on
         * number of automatic openings.
         */

        let delay;


        if (
            autoOpenCount === 0
        ) {

            /*
             * FIRST:
             * 30 seconds
             */

            delay =
                FIRST_DELAY;

        } else if (
            autoOpenCount === 1
        ) {

            /*
             * SECOND:
             * 1 minute
             */

            delay =
                SECOND_DELAY;

        } else {

            /*
             * THIRD AND ONWARD:
             * 1 minute 30 seconds
             */

            delay =
                REPEAT_DELAY;

        }


        console.log(
            "[DevLab] Next automatic discovery in:",
            delay / 1000,
            "seconds"
        );


        repeatTimer =
            setTimeout(
                function () {

                    /*
                     * If page is hidden,
                     * wait and try again later.
                     */

                    if (
                        document.visibilityState !==
                        "visible"
                    ) {

                        scheduleNextAutoOpen();

                        return;

                    }


                    /*
                     * Desktop:
                     * don't automatically open.
                     */

                    if (
                        window.innerWidth > 600
                    ) {

                        scheduleNextAutoOpen();

                        return;

                    }


                    /*
                     * Don't interrupt the user
                     * if DevLab is already open.
                     */

                    if (!devlabOpen) {

                        autoOpenCount++;


                        console.log(
                            "[DevLab] Automatic opening #",
                            autoOpenCount
                        );


                        openDevLabDiscovery(
                            true
                        );

                    } else {

                        console.log(
                            "[DevLab] Panel already open — skipping auto-open."
                        );

                    }


                    /*
                     * Schedule the next cycle.
                     */

                    scheduleNextAutoOpen();

                },
                delay
            );

    }


    /* =====================================================
       START AUTOMATIC DISCOVERY
    ===================================================== */

    scheduleNextAutoOpen();


    /* =====================================================
       PAGE VISIBILITY
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.visibilityState !==
                "visible"
            ) {

                /*
                 * Don't close the panel here.
                 * Only stop its automatic close timer.
                 */

                clearTimeout(
                    closeTimer
                );

            }

        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            /*
             * DESKTOP
             */

            if (
                window.innerWidth > 600
            ) {

                if (connect) {

                    connect.style.removeProperty(
                        "display"
                    );

                    connect.style.removeProperty(
                        "visibility"
                    );

                    connect.style.removeProperty(
                        "pointer-events"
                    );

                }

                return;

            }


            /*
             * MOBILE
             */

            if (devlabOpen) {

                hideConnect();

            } else {

                showConnect();

            }

        }
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    if (
        connect &&
        window.innerWidth <= 600
    ) {

        showConnect();

    }


    /* =====================================================
       DEBUG INFORMATION
    ===================================================== */

    console.log(
        "[DevLab] ✓ Mobile Discovery Engine initialized."
    );

    console.log(
        "[DevLab] ✓ First auto-open: 30 seconds."
    );

    console.log(
        "[DevLab] ✓ Second auto-open: 60 seconds."
    );

    console.log(
        "[DevLab] ✓ Third+ auto-open: 90 seconds."
    );

    console.log(
        "[DevLab] ✓ CONNECT synchronized."
    );


})();





(function () {

    "use strict";

    /* =====================================================
       CONSOLE AUTO CLEANER
       First clean → immediately
       Then → every 10 seconds
    ===================================================== */

    console.clear();


    setInterval(function () {

        console.clear();

    }, 5000);


})();








/* =========================================================
   DEVLАB — FLOATING DISCOVERY ENGINE
========================================================= */

(function initDevLabFloatingSystem() {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const launcher =
        document.getElementById(
            "devLabLauncher"
        );


    const panel =
        document.getElementById(
            "devLabDiscovery"
        );


    const closeButton =
        document.getElementById(
            "devLabClose"
        );


    if (
        !launcher ||
        !panel
    ) {

        console.warn(
            "[DevLab] Floating system elements not found."
        );

        return;

    }


    /* =====================================================
       STATE
    ===================================================== */

    let isOpen = false;

    let closeTimer = null;

    let autoTimer = null;

    let autoCycle = 0;


    /*
     * First:
     * 30 seconds
     *
     * Second:
     * 60 seconds
     *
     * Third:
     * 90 seconds
     *
     * Fourth:
     * 120 seconds
     *
     * etc.
     */

    let nextAutoDelay = 30000;


    /* =====================================================
       OPEN
    ===================================================== */

    function openDevLab(options = {}) {

        const attention =
            options.attention === true;


        clearTimeout(closeTimer);


        isOpen = true;


        panel.classList.add(
            "is-open"
        );


        panel.setAttribute(
            "aria-hidden",
            "false"
        );


        launcher.setAttribute(
            "aria-expanded",
            "true"
        );


        /*
         * Restart attention animation
         */

        if (attention) {

            panel.classList.remove(
                "is-attention"
            );


            void panel.offsetWidth;


            panel.classList.add(
                "is-attention"
            );


            setTimeout(() => {

                panel.classList.remove(
                    "is-attention"
                );

            }, 1300);

        }


        /*
         * Keep panel visible long enough
         * to read it.
         */

        closeTimer =
            setTimeout(() => {

                closeDevLabDiscovery();

            }, 8500);


        console.log(
            "[DevLab] Panel opened."
        );

    }


    /* =====================================================
       CLOSE
    ===================================================== */

    function closeDevLabDiscovery() {

        clearTimeout(
            closeTimer
        );


        isOpen = false;


        panel.classList.remove(
            "is-open"
        );


        panel.setAttribute(
            "aria-hidden",
            "true"
        );


        launcher.setAttribute(
            "aria-expanded",
            "false"
        );


        console.log(
            "[DevLab] Panel closed."
        );

    }


    /* =====================================================
       LAUNCHER
       
       IMPORTANT:
       DevLab button does NOT navigate.
    ===================================================== */

    launcher.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            if (isOpen) {

                closeDevLabDiscovery();

            } else {

                openDevLab({
                    attention: true
                });

            }

        }
    );


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                closeDevLabDiscovery();

            }
        );

    }


    /* =====================================================
       ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                isOpen
            ) {

                closeDevLabDiscovery();

            }

        }
    );


    /* =====================================================
       AUTO DISCOVERY
       
       30s
       60s
       90s
       120s
       150s
       ...
    ===================================================== */

    function scheduleNextDiscovery() {

        clearTimeout(
            autoTimer
        );


        autoTimer =
            setTimeout(
                function () {

                    /*
                     * Don't open while the user
                     * has the browser tab hidden.
                     */

                    if (
                        document.visibilityState !==
                        "visible"
                    ) {

                        scheduleNextDiscovery();

                        return;

                    }


                    /*
                     * If already open, don't interrupt it.
                     */

                    if (!isOpen) {

                        autoCycle++;


                        openDevLab({
                            attention: true
                        });

                    }


                    /*
                     * Increase next interval
                     *
                     * 30s → 60s → 90s → 120s...
                     */

                    nextAutoDelay += 30000;


                    scheduleNextDiscovery();


                },
                nextAutoDelay
            );

    }


    /* =====================================================
       START AUTO DISCOVERY
    ===================================================== */

    scheduleNextDiscovery();


    /* =====================================================
       VISIBILITY
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.visibilityState !==
                "visible"
            ) {

                clearTimeout(
                    closeTimer
                );

            }

        }
    );


    /* =====================================================
       DEBUG
    ===================================================== */

    window.devLabDiscovery = {

        open: function () {

            openDevLab({
                attention: true
            });

        },

        close: function () {

            closeDevLabDiscovery();

        },

        toggle: function () {

            if (isOpen) {

                closeDevLabDiscovery();

            } else {

                openDevLab({
                    attention: true
                });

            }

        }

    };


    console.log(
        "[DevLab] Floating discovery system ready."
    );


})();








