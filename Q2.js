const resumeData = {
    "name": "Kannan",
    "email": "kannan473374@gmail.com",
    "phone": "9952974571",
    "address": "18,weekly market,avinashi",
    "summary": "Software engineer with a passion for developing innovative solutions.",
    "education": [
      {
        "degree": "Bachelor of Technology in Information Technolgy",
        "institution": "Park College of Engineering and Technology",
        "year": "2019-2023"
      }
    ],
    "skills": [
      "JavaScript",
      "Node.js",
      "React",
      "HTML",
      "CSS",
      "Git",
      "Agile Methodologies"
    ]
  };
  
  // Using a for loop
  console.log("Using 'for' loop:");
  for (let i = 0; i < Object.keys(resumeData).length; i++) {
    const key = Object.keys(resumeData)[i];
    const value = resumeData[key];
    if (Array.isArray(value)) {
      console.log(`${key}:`);
      for (let j = 0; j < value.length; j++) {
        if (typeof value[j] === 'object') {
          for (let prop in value[j]) {
            console.log(`- ${prop}: ${value[j][prop]}`);
          }
        } else {
          console.log(`- ${value[j]}`);
        }
      }
    } else if (typeof value === 'object') {
      console.log(`${key}:`);
      for (let prop in value) {
        console.log(`- ${prop}: ${value[prop]}`);
      }
    } else {
      console.log(`${key}: ${value}`);
    }
  }
  
  // Using 'for...in' loop
  console.log("\nUsing 'for...in' loop:");
  for (let key in resumeData) {
    if (Array.isArray(resumeData[key])) {
      console.log(`${key}:`);
      resumeData[key].forEach(item => {
        if (typeof item === 'object') {
          for (let prop in item) {
            console.log(`- ${prop}: ${item[prop]}`);
          }
        } else {
          console.log(`- ${item}`);
        }
      });
    } else if (typeof resumeData[key] === 'object') {
      console.log(`${key}:`);
      for (let prop in resumeData[key]) {
        console.log(`- ${prop}: ${resumeData[key][prop]}`);
      }
    } else {
      console.log(`${key}: ${resumeData[key]}`);
    }
  }
  
  // Using 'for...of' loop (for arrays only)
  console.log("\nUsing 'for...of' loop:");
  for (let [key, value] of Object.entries(resumeData)) {
    if (Array.isArray(value)) {
      console.log(`${key}:`);
      for (let item of value) {
        if (typeof item === 'object') {
          for (let [prop, val] of Object.entries(item)) {
            console.log(`- ${prop}: ${val}`);
          }
        } else {
          console.log(`- ${item}`);
        }
      }
    } else if (typeof value === 'object') {
      console.log(`${key}:`);
      for (let [prop, val] of Object.entries(value)) {
        console.log(`- ${prop}: ${val}`);
      }
    } else {
      console.log(`${key}: ${value}`);
    }
  }
  
  // Using 'forEach' loop
  console.log("\nUsing 'forEach' loop:");
  Object.entries(resumeData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      console.log(`${key}:`);
      value.forEach(item => {
        if (typeof item === 'object') {
          Object.entries(item).forEach(([prop, val]) => {
            console.log(`- ${prop}: ${val}`);
          });
        } else {
          console.log(`- ${item}`);
        }
      });
    } else if (typeof value === 'object') {
      console.log(`${key}:`);
      Object.entries(value).forEach(([prop, val]) => {
        console.log(`- ${prop}: ${val}`);
      });
    } else {
      console.log(`${key}: ${value}`);
    }
  });
  