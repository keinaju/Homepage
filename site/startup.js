"use strict";

const textNode = document.getElementById("textNode");

//Calculate age
const today = new Date();
let age = today.getFullYear() - 1993;
if (today.getMonth() < 8) age -= 1;
if (today.getMonth() == 8 && today.getDate() < 8) age -= 1;

const textContent =
    `
    <h1>Hello! My name is Jukka.</h1>

    <p>
    Jukka Keinänen, ${age} years old.
    I do C#, JavaScript and web development.
    See my applications:
    <ul>

    <li>
    <a href="https://github.com/keinaju/Dogebox/releases">
    Download my game, implemented with Unity engine!
    </a>
    </li>

    <li>
    <a href="https://libra.up.railway.app">
    Check out a demo library I made with Express.js and MongoDB. 
    </a>
    </li>
    
    <li>
    <a href="https://github.com/keinaju">
    Visit my GitHub!</a>
    </li>
    
    </ul>

    I also enjoy jogging, guitar playing and snooker.
    <a href="https://open.spotify.com/artist/4HWHVCTAIO2nmsYUCZ8vVP">
    You can find my music in Spotify (Jukka Palmu)!
    </a>
    </p>
    
    <p>
    I have a degree from university of applied sciences,
    automation as the main subject.
    <a href="https://www.theseus.fi/handle/10024/143064">
    <br>I worked with PDM- and ERP-system data in my thesis.</a>
    </p>
          
    <p>
    I have 3 years of work experience from Vaisala and 6 years from Konecranes.
    Right now my main responsibilites are order handling in SAP
    and choosing the best suppliers for my department.
    </p>
    
    <p>
    Contact: +35845 130 4993
    </p>
    `;

//Populate page with text
textNode.innerHTML = textContent;
//Reset position with transform, so CSS animation is applied
textNode.style.transform = "none";
//Reset opacity
textNode.style.opacity = 1;
textNode.style.borderLeft = "2px solid black";
textNode.style.paddingLeft = "20px";
textNode.style.paddingRight = "20px";

const photoNode = document.getElementById("photoNode");
photoNode.style.transform = "none";
photoNode.style.opacity = 1;

//Default all links to open in new tab
const links = document.querySelectorAll("a");
for (const link of links) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
}