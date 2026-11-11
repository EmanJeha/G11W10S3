/* Questions for both games. Edit text here; keep the structure.
   Question types:
     mc    – multiple choice (options + answer index)
     order – tap tiles into the right order
     line  – tap a line (here: the line of code that does a job)
     bins  – sort each item into one of two (or three) groups
   Any question can have its own "seconds". */
window.SITE_INFO = {
 "badge": "Grade 11 · Unit 4 · Sprint 4.1 · Session 3",
 "titleText": "Hospital Database Games",
 "warmup": {
  "label": "Warm-up",
  "sub": "Guess today’s topic"
 },
 "wrapup": {
  "label": "Wrap-up",
  "sub": "Hospital Builder"
 },
 "titleHTML": "<span class=\"c1\">H</span><span class=\"c2\">o</span><span class=\"c3\">s</span><span class=\"c4\">p</span><span class=\"c5\">i</span><span class=\"c1\">t</span><span class=\"c2\">a</span><span class=\"c3\">l</span><br><span class=\"c4\">D</span><span class=\"c5\">a</span><span class=\"c1\">t</span><span class=\"c2\">a</span><span class=\"c3\">b</span><span class=\"c4\">a</span><span class=\"c5\">s</span><span class=\"c1\">e</span> <span class=\"c2\">G</span><span class=\"c3\">a</span><span class=\"c4\">m</span><span class=\"c5\">e</span><span class=\"c1\">s</span>"
};
window.GAMES = {
 "warmup": {
  "badge": "Unit 4 · Sprint 4.1 · Session 3 · Warm-up",
  "name": "Key Check",
  "titleHTML": "<span class=\"c1\">K</span><span class=\"c2\">e</span><span class=\"c3\">y</span><br><span class=\"c4\">C</span><span class=\"c5\">h</span><span class=\"c1\">e</span><span class=\"c2\">c</span><span class=\"c3\">k</span>",
  "intro": "Libraries, schools and hospitals all run on tables. Every correct answer flips letters of today’s mystery topic. Crack it for +200!",
  "rules": [
   "Play on your own device (or with your partner)",
   "Faster answers = more points",
   "3 right in a row = 🔥 streak bonus",
   "Crack the topic early: +200",
   "Watch your name climb on the teacher’s screen"
  ],
  "seconds": 40,
  "points": 100,
  "floaters": [
   "🏥",
   "📚",
   "🔑",
   "🔗",
   "🗂️",
   "🧾",
   "🩺",
   "📅"
  ],
  "topic": "Database design",
  "mystery": {
   "label": "Today’s mystery topic",
   "phrase": "DATABASE DESIGN",
   "order": [
    2,
    9,
    6,
    13,
    10,
    3,
    1,
    5,
    7,
    14,
    4,
    12,
    11,
    0
   ],
   "perCorrect": 3,
   "bonus": 200,
   "accept": [
    "database design",
    "designing databases",
    "designing a database",
    "db design",
    "database designing",
    "design a database"
   ],
   "finalQ": "Put all the clues together. What is today’s topic?",
   "finalOptions": [
    "Spreadsheet Formulas",
    "Database Design",
    "Web Design",
    "Network Security"
   ],
   "finalAnswer": 1,
   "finalWhy": "Tables, data types, primary and foreign keys: today you design a real hospital database."
  },
  "questions": [
   {
    "type": "mc",
    "ctx": "Library",
    "skill": "Analyze",
    "q": "A customer can borrow many books, and a book is borrowed by many customers over time. Which relationship is it?",
    "options": [
     "One-to-One",
     "One-to-Many",
     "Many-to-Many",
     "No relationship"
    ],
    "answer": 2,
    "why": "Many on both sides: M:M, so we need a junction table such as Borrowings."
   },
   {
    "type": "mc",
    "ctx": "Junction",
    "skill": "Apply",
    "q": "Which table would link BOOK and customer?",
    "options": [
     "Borrowings",
     "Authors",
     "Prices",
     "Shelves"
    ],
    "answer": 0,
    "why": "Borrowings stores book_id and member_id: two foreign keys."
   },
   {
    "type": "mc",
    "ctx": "Primary key",
    "skill": "Remember",
    "q": "A primary key must be…",
    "options": [
     "Unique and never empty",
     "A person’s name",
     "Always text",
     "Repeated in every row"
    ],
    "answer": 0,
    "why": "A PK identifies each row: unique and not null."
   },
   {
    "type": "bins",
    "ctx": "Relationships",
    "skill": "Analyze",
    "seconds": 55,
    "q": "Sort each pair by its relationship.",
    "bins": [
     "1 : 1",
     "1 : M",
     "M : M"
    ],
    "items": [
     {
      "t": "Person ↔ passport",
      "b": 0
     },
     {
      "t": "Doctor → appointments",
      "b": 1
     },
     {
      "t": "Students ⇄ clubs",
      "b": 2
     },
     {
      "t": "Mother → children",
      "b": 1
     }
    ],
    "why": "Ask both ways: how many B for one A, and how many A for one B?"
   },
   {
    "type": "mc",
    "ctx": "Foreign key",
    "skill": "Understand",
    "q": "A foreign key is a column that…",
    "options": [
     "Links to a primary key in another table",
     "Is always the first column",
     "Stores passwords",
     "Must be unique in its own table"
    ],
    "answer": 0,
    "why": "An FK points to a PK in another table: that is how tables connect."
   },
   {
    "type": "mc",
    "ctx": "Names",
    "skill": "Evaluate",
    "q": "Two students are both called Ahmed Ali. What keeps their rows apart?",
    "options": [
     "Their names",
     "A unique student_id",
     "Their class",
     "Nothing"
    ],
    "answer": 1,
    "why": "Names can repeat. A unique ID cannot."
   },
   {
    "type": "mc",
    "ctx": "Recap",
    "skill": "Remember",
    "q": "In a One-to-Many link, the foreign key goes on the…",
    "options": [
     "One side",
     "Many side",
     "Both sides",
     "Neither side"
    ],
    "answer": 1,
    "why": "Each row on the many side stores one ID from the one side."
   }
  ],
  "endHTML": "<div class=\"reveal\"><span class=\"pill\">Today's topic</span><div class=\"big\">Database Design</div><p class=\"lede\">Design a hospital database: tables, data types and keys.</p></div>\n<div class=\"recap\"><div><b>Tables</b>One per thing</div><div><b>Data types</b>INT · VARCHAR · DATETIME</div><div><b>Keys</b>PK unique · FK links</div></div>"
 },
 "wrapup": {
  "badge": "Unit 4 · Sprint 4.1 · Session 3 · Wrap-up",
  "name": "Hospital Builder",
  "titleHTML": "<span class=\"c1\">H</span><span class=\"c2\">o</span><span class=\"c3\">s</span><span class=\"c4\">p</span><span class=\"c5\">i</span><span class=\"c1\">t</span><span class=\"c2\">a</span><span class=\"c3\">l</span><br><span class=\"c4\">B</span><span class=\"c5\">u</span><span class=\"c1\">i</span><span class=\"c2\">l</span><span class=\"c3\">d</span><span class=\"c4\">e</span><span class=\"c5\">r</span>",
  "intro": "Ten challenges on the hospital database: pick the data types, spot the keys and link the tables. Prove you are a database designer!",
  "rules": [
   "Play on your own device (or with your partner)",
   "Faster answers = more points",
   "3 right in a row = 🔥 streak bonus",
   "Sort cards, order tiles and tap code lines",
   "Watch your name climb on the teacher’s screen"
  ],
  "seconds": 45,
  "points": 100,
  "floaters": [
   "🏥",
   "🩺",
   "🔑",
   "🔗",
   "📅",
   "💊",
   "🧾",
   "✓"
  ],
  "topic": "Database design",
  "exit": {
   "q": "Choose one hospital table. Name its primary key and explain why it is a good choice.",
   "placeholder": "In the ___ table, the primary key is…",
   "model": "In the Patients table the primary key is patient_id. It is a good choice because every patient gets a different number, even when two patients have the same name, so each row is unique and the data stays accurate."
  },
  "questions": [
   {
    "type": "mc",
    "ctx": "Data types",
    "skill": "Apply",
    "q": "Best data type for patient_name?",
    "options": [
     "INT",
     "VARCHAR(50)",
     "DATETIME",
     "DECIMAL(8,2)"
    ],
    "answer": 1,
    "why": "Names are text with a sensible maximum length: VARCHAR(50)."
   },
   {
    "type": "mc",
    "ctx": "Data types",
    "skill": "Evaluate",
    "q": "Why is contact_no stored as VARCHAR(15) and not INT?",
    "options": [
     "Phone numbers can start with 0 or +, and we never do maths on them",
     "INT is too slow",
     "VARCHAR is always better",
     "Phone numbers are secret"
    ],
    "answer": 0,
    "why": "An INT would drop a leading 0 or +. We store phone numbers as text."
   },
   {
    "type": "bins",
    "ctx": "Match the type",
    "skill": "Apply",
    "seconds": 60,
    "q": "Match each column to its data type.",
    "bins": [
     "INT",
     "DATETIME",
     "DECIMAL(8,2)",
     "TEXT"
    ],
    "items": [
     {
      "t": "doctor_id",
      "b": 0
     },
     {
      "t": "appointment_date",
      "b": 1
     },
     {
      "t": "cost",
      "b": 2
     },
     {
      "t": "treatment_details",
      "b": 3
     }
    ],
    "why": "IDs are INT, dates are DATETIME, money is DECIMAL and long descriptions are TEXT."
   },
   {
    "type": "mc",
    "ctx": "Appointments",
    "skill": "Analyze",
    "q": "How many foreign keys does the Appointments table have?",
    "options": [
     "None",
     "One",
     "Two",
     "Four"
    ],
    "answer": 2,
    "why": "patient_id links to Patients and doctor_id links to Doctors."
   },
   {
    "type": "mc",
    "ctx": "Treatments",
    "skill": "Understand",
    "q": "Treatments.appointment_id is a…",
    "options": [
     "Primary key",
     "Foreign key",
     "Data type",
     "Description"
    ],
    "answer": 1,
    "why": "It links each treatment to an appointment’s primary key."
   },
   {
    "type": "mc",
    "ctx": "DECIMAL",
    "skill": "Apply",
    "q": "DECIMAL(8,2) can store which value?",
    "options": [
     "123456.78",
     "1234567890.5",
     "12.345",
     "Ahmed"
    ],
    "answer": 0,
    "why": "Up to 8 digits in total, with 2 after the decimal point."
   },
   {
    "type": "line",
    "ctx": "SQL",
    "skill": "Analyze",
    "q": "Tap the line that makes appointment_id the primary key.",
    "code": [
     "CREATE TABLE Appointments (",
     "  appointment_id INT PRIMARY KEY,",
     "  patient_id INT,",
     "  doctor_id INT,",
     "  appointment_date DATETIME,",
     "  status VARCHAR(20),",
     "  FOREIGN KEY (patient_id) REFERENCES Patients(patient_id)",
     ");"
    ],
    "answer": 1,
    "why": "appointment_id INT PRIMARY KEY gives every appointment a unique ID."
   },
   {
    "type": "order",
    "ctx": "Design steps",
    "skill": "Apply",
    "seconds": 55,
    "q": "Put the database design steps in order.",
    "sub": "Tap the tiles in order.",
    "tiles": [
     "Choose a data type for each column",
     "Pick the primary key",
     "Read the scenario and list the tables",
     "Link tables with foreign keys"
    ],
    "answer": [
     "Read the scenario and list the tables",
     "Choose a data type for each column",
     "Pick the primary key",
     "Link tables with foreign keys"
    ],
    "why": "Tables first, then columns and types, then keys, then the links between tables."
   },
   {
    "type": "mc",
    "ctx": "Relationship",
    "skill": "Analyze",
    "q": "One doctor has many appointments, each appointment has one doctor. Which relationship?",
    "options": [
     "1 : 1",
     "1 : M",
     "M : M",
     "None"
    ],
    "answer": 1,
    "why": "One doctor → many appointments: one-to-many."
   },
   {
    "type": "mc",
    "ctx": "TEXT vs VARCHAR",
    "skill": "Evaluate",
    "q": "Why use TEXT for treatment_details?",
    "options": [
     "The description can be long",
     "It is a number",
     "It is the primary key",
     "TEXT is shorter"
    ],
    "answer": 0,
    "why": "TEXT stores long descriptions; VARCHAR has a fixed maximum length."
   }
  ],
  "endHTML": "<div class=\"recap\"><div><b>4 tables</b>Patients · Doctors · Appointments · Treatments</div><div><b>Types</b>INT · VARCHAR · DATETIME · DECIMAL · TEXT</div><div><b>Keys</b>PK unique · FK links</div></div>"
 }
};
