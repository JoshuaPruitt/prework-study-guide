
//defines variable "topic" as a constant or const
const topics = ["HTML", "CSS", "Git", "JavaScript"];

//create a random number to pick
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    //this for loop prints each topic untill there are no more to be printed
    for(let x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}


function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
}

//List off listTopics and selectTopic as well as have an introductory message before listing 
console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();

const myHeading = document.querySelector("h1");
myHeading.textContent = "Prework Study Guide";

// changes the image 
const myImage = document.querySelector("img");

//change image to ef8 once you hover over the image
myImage.onmouseover = () => {
  const mySrc = myImage.getAttribute("src");

 
  if (mySrc === "assets/ef8.jpg") {
    myImage.setAttribute("src", "assets/bowtie-cat.png");
  } else {
    myImage.setAttribute("src", "assets/ef8.jpg");
  }
};

//once you take mouse off of the image switch it back to bowtie cat
myImage.onmouseout = () => {
    const mySrc = myImage.getAttribute("src");

  
  if (mySrc === "assets/ef8.jpg") {
    myImage.setAttribute("src", "assets/bowtie-cat.png");
  } else {
    myImage.setAttribute("src", "assets/ef8.jpg");
  }
};

    
