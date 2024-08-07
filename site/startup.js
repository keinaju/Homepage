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
    </p>

    <ul>

    <li>
    <a href="https://jugibo.itch.io/dogebox">
    Download my puzzle game, implemented with Unity engine!
    </a>
    </li>

    <li>
    <a href="https://warmsound.up.railway.app">
    Check out an online store I made with Node.js and MySQL! 
    </a>
    </li>
    
    <li>
    <a href="https://github.com/keinaju">
    Visit my GitHub!</a>
    </li>
    
    </ul>
    
    <p>
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
    Contact: +35845 78362404
    </p>
    `;

//Populate page with text
textNode.innerHTML = textContent;
//Reset position with transform, so CSS animation is applied
textNode.style.transform = "none";
//Reset opacity
textNode.style.opacity = 1;
textNode.style.borderLeft = "1px solid black";
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