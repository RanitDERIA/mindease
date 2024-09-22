'use strict';




const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/*
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const API_KEY = "8TUyZjI8OM2Ame57kssoR8vk9TVwu5dn5_7NoriHt83B";
const scoring_url = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/7c160a90-5434-464f-b3b8-b7b84a758a34/predictions?version=2021-05-01";  // Replace with your scoring URL

// Function to get the token
function getToken() {
  const req = new XMLHttpRequest();
  req.open("POST", "https://iam.cloud.ibm.com/identity/token", true);
  req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  req.setRequestHeader("Accept", "application/json");
  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const tokenResponse = JSON.parse(this.responseText);
      apiPost(tokenResponse.access_token);
    }
  };
  req.send("grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + API_KEY);
}

// Function to send data to the API
function apiPost(token) {
  // Construct the input data based on user responses
  const inputData = {
    "input_data": [
      {
        "fields": [
          "symptom_sleep",
          "symptom_appetite",
          "symptom_interest",
          "symptom_fatigue",
          "symptom_worthlessness",
          "symptom_suicidal_ideation",
          "symptom_aggression",
          "symptom_panic_attacks",
          "symptom_hopelessness",
          "duration_days",
          "frequency",
          "impact_daily_life",
          "triggers",
          "coping_mechanisms",
          "previous_help",
          "sentiment_score"
        ],
        "values": [
          [
            context.symptom_sleep, 
            context.symptom_appetite, 
            context.symptom_interest, 
            context.symptom_fatigue,
            context.symptom_worthlessness, 
            context.symptom_suicidal_ideation, 
            context.symptom_aggression, 
            context.symptom_panic_attacks,
            context.symptom_hopelessness,
            "N/A", // Duration (if applicable)
            "N/A", // Frequency (if applicable)
            "N/A", // Impact on daily life (if applicable)
            "N/A", // Triggers (if applicable)
            "N/A", // Coping mechanisms (if applicable)
            "N/A", // Previous help (if applicable)
            "N/A"  // Sentiment score (if applicable)
          ]
        ]
      }
    ]
  };

  const oReq = new XMLHttpRequest();
  oReq.open("POST", scoring_url, true);
  oReq.setRequestHeader("Accept", "application/json");
  oReq.setRequestHeader("Authorization", "Bearer " + token);
  oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  oReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const parsedPostResponse = JSON.parse(this.responseText);
      console.log("Scoring response", parsedPostResponse);
    }
  };

  const payload = JSON.stringify(inputData);
  oReq.send(payload);
}

// Call the function to initiate the process
getToken();
