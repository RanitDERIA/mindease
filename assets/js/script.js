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




// Remedy:
// Array of mental disorders with information
const disorders = [
  {
      name: "Post-Traumatic Stress Disorder (PTSD)",
      overview: "PTSD is a mental health condition triggered by a terrifying event.",
      symptoms: ["Flashbacks", "Avoidance", "Negative changes in thinking and mood", "Hyperarousal"],
      causes: ["Traumatic experiences", "Genetics", "Brain structure", "Life experience"],
      whenToSee: "If you experience distressing symptoms lasting longer than a month.",
      articles: [
          { title: "Understanding PTSD", url: "https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967" },
          { title: "PTSD Treatment Options", url: "https://my.clevelandclinic.org/health/diseases/9545-post-traumatic-stress-disorder-ptsd" }
      ]
  },
  {
      name: "Generalized Anxiety Disorder (GAD)",
      overview: "GAD is characterized by excessive, uncontrollable worry about everyday things.",
      symptoms: ["Restlessness", "Fatigue", "Difficulty concentrating", "Irritability"],
      causes: ["Genetics", "Brain chemistry", "Environmental stressors"],
      whenToSee: "If anxiety interferes with your daily life.",
      articles: [
          { title: "Managing GAD", url: "https://www.mayoclinic.org/diseases-conditions/generalized-anxiety-disorder/symptoms-causes/syc-20360803" },
          { title: "Coping Strategies for Anxiety", url: "https://my.clevelandclinic.org/health/diseases/23940-generalized-anxiety-disorder-gad" }
      ]
  },
  {
      name: "Obsessive-Compulsive Disorder (OCD)",
      overview: "OCD is a chronic condition characterized by obsessions and compulsions.",
      symptoms: ["Obsessive thoughts", "Compulsive behaviors", "Avoidance"],
      causes: ["Genetics", "Brain structure", "Life experiences"],
      whenToSee: "If your obsessions and compulsions disrupt your daily life.",
      articles: [
          { title: "Living with OCD", url: "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd#:~:text=Obsessive%2Dcompulsive%20disorder%20(OCD),(compulsions)%2C%20or%20both." },
          { title: "Treatment for OCD", url: "https://www.mayoclinic.org/diseases-conditions/obsessive-compulsive-disorder/symptoms-causes/syc-20354432" }
      ]
  },
  {
      name: "Bipolar Disorder",
      overview: "Bipolar disorder causes extreme mood swings, including emotional highs and lows.",
      symptoms: ["Manic episodes", "Depressive episodes", "Mood changes"],
      causes: ["Genetics", "Neurochemical factors", "Environmental stressors"],
      whenToSee: "If mood swings interfere with your relationships or work.",
      articles: [
          { title: "Understanding Bipolar Disorder", url: "https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955" },
          { title: "Bipolar Disorder Treatment Options", url: "https://my.clevelandclinic.org/health/diseases/9294-bipolar-disorder" }
      ]
  },
  {
      name: "Depression",
      overview: "Depression is a mood disorder that causes persistent feelings of sadness.",
      symptoms: ["Feelings of hopelessness", "Loss of interest", "Fatigue", "Difficulty concentrating"],
      causes: ["Genetics", "Biochemical factors", "Environmental stressors"],
      whenToSee: "If you feel sad or lose interest in most activities.",
      articles: [
          { title: "Understanding Depression", url: "https://www.psychiatry.org/patients-families/depression/what-is-depression" },
          { title: "Depression Treatment Options", url: "https://www.who.int/news-room/fact-sheets/detail/depression" }
      ]
  },
  {
      name: "Schizophrenia",
      overview: "Schizophrenia is a severe mental disorder that affects how a person thinks, feels, and behaves.",
      symptoms: ["Hallucinations", "Delusions", "Disorganized thinking"],
      causes: ["Genetics", "Brain chemistry", "Environmental factors"],
      whenToSee: "If you experience symptoms that disrupt your daily life.",
      articles: [
          { title: "Living with Schizophrenia", url: "https://www.mayoclinic.org/diseases-conditions/schizophrenia/symptoms-causes/syc-20354443#:~:text=Schizophrenia%20is%20a%20serious%20mental,aren't%20observed%20by%20others." },
          { title: "Understanding Schizophrenia", url: "https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia" }
      ]
  },
  {
      name: "Social Anxiety Disorder",
      overview: "Social anxiety disorder is characterized by intense fear of social situations.",
      symptoms: ["Excessive self-consciousness", "Fear of judgment", "Avoidance of social situations"],
      causes: ["Genetics", "Brain structure", "Environmental factors"],
      whenToSee: "If fear of social situations disrupts your daily life.",
      articles: [
          { title: "Coping with Social Anxiety", url: "https://www.mayoclinic.org/diseases-conditions/social-anxiety-disorder/symptoms-causes/syc-20353561" },
          { title: "Understanding Social Anxiety Disorder", url: "https://www.healthline.com/health/anxiety/social-phobia" }
      ]
  },
  {
      name: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
      overview: "ADHD is a neurodevelopmental disorder characterized by difficulty sustaining attention.",
      symptoms: ["Inattention", "Hyperactivity", "Impulsivity"],
      causes: ["Genetics", "Brain structure", "Environmental factors"],
      whenToSee: "If symptoms interfere with daily life.",
      articles: [
          { title: "Understanding ADHD", url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd#:~:text=Attention%2Ddeficit%2Fhyperactivity%20disorder%20(,interfere%20with%20functioning%20or%20development." },
          { title: "ADHD Management Strategies", url: "https://www.mayoclinic.org/diseases-conditions/adhd/symptoms-causes/syc-20350889" }
      ]
  },
  {
      name: "Borderline Personality Disorder (BPD)",
      overview: "BPD is a mental disorder characterized by unstable moods, behavior, and relationships.",
      symptoms: ["Intense emotions", "Fear of abandonment", "Impulsive behavior"],
      causes: ["Genetics", "Brain structure", "Environmental factors"],
      whenToSee: "If symptoms affect your relationships or self-image.",
      articles: [
          { title: "Understanding BPD", url: "https://my.clevelandclinic.org/health/diseases/9762-borderline-personality-disorder-bpd#:~:text=Borderline%20personality%20disorder%20(BPD)%20is,the%20main%20treatment%20for%20BPD." },
          { title: "Living with Borderline Personality Disorder", url: "https://www.mayoclinic.org/diseases-conditions/borderline-personality-disorder/symptoms-causes/syc-20370237" }
      ]
  },
  {
      name: "Panic Disorder",
      overview: "Panic disorder involves repeated episodes of intense fear or panic attacks.",
      symptoms: ["Rapid heart rate", "Shortness of breath", "Dizziness", "Fear of losing control"],
      causes: ["Genetics", "Brain chemistry", "Environmental stressors"],
      whenToSee: "If panic attacks interfere with your daily life.",
      articles: [
          { title: "Understanding Panic Disorder", url: "https://www.mayoclinic.org/diseases-conditions/panic-attacks/symptoms-causes/syc-20376021" },
          { title: "Coping with Panic Attacks", url: "https://medlineplus.gov/panicdisorder.html" }
      ]
  },
  {
      name: "Seasonal Affective Disorder (SAD)",
      overview: "SAD is a type of depression that occurs at a specific time of year, usually in winter.",
      symptoms: ["Low energy", "Sleep issues", "Difficulty concentrating", "Changes in appetite"],
      causes: ["Biochemical factors", "Genetics", "Environmental factors"],
      whenToSee: "If seasonal changes affect your mood significantly.",
      articles: [
          { title: "Managing Seasonal Affective Disorder", url: "https://www.mayoclinic.org/diseases-conditions/seasonal-affective-disorder/symptoms-causes/syc-20364651" },
          { title: "Understanding SAD", url: "https://my.clevelandclinic.org/health/diseases/9293-seasonal-depression" }
      ]
  },
  {
      name: "Phobias",
      overview: "Phobias are excessive and irrational fears of specific objects or situations.",
      symptoms: ["Intense fear", "Avoidance behavior", "Physical symptoms (sweating, shaking)"],
      causes: ["Genetics", "Traumatic experiences", "Learned behavior"],
      whenToSee: "If phobias disrupt your daily life.",
      articles: [
          { title: "Understanding Phobias", url: "https://www.medicalnewstoday.com/articles/249347" },
          { title: "Coping with Phobias", url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/phobias" }
      ]
  }
];

// Hide the loader after 30 seconds
setTimeout(() => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none'; // Hide the loader

  // Show content after another delay
  setTimeout(() => {
      const content = document.getElementById('content');
      content.style.display = 'block'; // Show the content

      // Pick a random disorder
      const randomDisorder = disorders[Math.floor(Math.random() * disorders.length)];

      // Display the disorder details
      content.innerHTML = `
          <h2>${randomDisorder.name}</h2>
          <p><strong>Overview:</strong> ${randomDisorder.overview}</p>
          <p><strong>Symptoms:</strong></p>
          <ul>
              ${randomDisorder.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
          </ul>
          <p><strong>Causes:</strong></p>
          <ul>
              ${randomDisorder.causes.map(cause => `<li>${cause}</li>`).join('')}
          </ul>
          <p><strong>When to See a Doctor:</strong> ${randomDisorder.whenToSee}</p>
          <p><strong>Related Articles:</strong></p>
          <ul>
              ${randomDisorder.articles.map(article => `<li><a href="${article.url}">${article.title}</a></li>`).join('')}
          </ul>
      `;
  }, 1000); // 1 second delay for displaying content after loader hides
}, 49000); // 30 seconds delay for loader








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
