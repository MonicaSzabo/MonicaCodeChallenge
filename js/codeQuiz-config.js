// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Gaming Knowledge!",
        "main":    "",
        "results": "",
        "level1":  "Gaming Ready",
        "level2":  "Gaming Contender",
        "level3":  "Gaming Amateur",
        "level4":  "Gaming Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which one of these games was given away with the purchase of the original Game Boy console?",
            "a": [
                {"option": "Final Fantasy Legend",       "correct": false},
                {"option": "Zelda Link's Awakening",     "correct": false},
                {"option": "Pokemon",                    "correct": false},
                {"option": "Kirby's Dream Land",         "correct": false},
                {"option": "Super Mario Land",           "correct": true}// no comma here
            ],
            "correct": "<p><span>NICE!</span></p>",
            "incorrect": "<p><span>OOPS!</span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "Which game does not belong to the Sega Genesis?",
            "a": [
                {"option": "Earthworm Jim",                "correct": false},
                {"option": "Sonic the Hedgehog",           "correct": false},
                {"option": "Mario Tennis",                 "correct": true},
                {"option": "Beavis and Butthead",          "correct": false},
                {"option": "Comix Zone",                   "correct": false} // no comma here
            ],
            "correct": "<p><span>NICE!</span></p>",
            "incorrect": "<p><span>OOPS!</span></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "Which platforms was Tomb Raider first released on?",
            "a": [
                {"option": "PC, Playstation, Sega Saturn",           "correct": true},
                {"option": "SNES, NES, Sega",                        "correct": false},
                {"option": "PC, Playstation, N64",                   "correct": false},
                {"option": "Playstation, XBOX, N64",                 "correct": false} // no comma here
            ],
            "correct": "<p><span>NICE!</span></p>",
            "incorrect": "<p><span>OOPS!</span></p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "What does HP in gaming mean?",
            "a": [
                {"option": "Healing power",      "correct": false},
                {"option": "Help please!",       "correct": false},
                {"option": "Hero power",         "correct": false},
                {"option": "Health points",      "correct": true},
                {"option": "Hero plummeting",    "correct": false} // no comma here
            ],
            "correct": "<p><span>NICE!</span></p>",
            "incorrect": "<p><span>OOPS!</span></p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "Who is the main hero in Kingdom Hearts?",
            "a": [
                {"option": "Cloud",           "correct": false},
                {"option": "Donald Duck",     "correct": false},
                {"option": "Terra",           "correct": false},
                {"option": "Sora",            "correct": true},
                {"option": "King Mickey",     "correct": false} // no comma here
            ],
            "correct": "<p><span>NICE!</span></p>",
            "incorrect": "<p><span>OOPS!</span></p>" // no comma here
        } // no comma here
    ]
};
