"use strict";

const textNode = document.getElementById("textNode");

const textContent =
    `
    <h1>Hello! My name is Jukka.</h1>

    <p>
    Jukka Keinänen, 30 years old.
    I do C#, JavaScript and web web-development.
    <a href="https://github.com/keinaju">
    Check out my GitHub!</a>
    I also enjoy jogging, guitar playing and snooker.
    <a href="https://open.spotify.com/artist/4HWHVCTAIO2nmsYUCZ8vVP">
    You can find my music in Spotify (Jukka Palmu)!</a>
    </p>
    
    <p>
    I have a degree from university of applied sciences,
    automation as the main subject.
    <a href="https://www.theseus.fi/handle/10024/143064">
    I worked with PDM- and ERP-system data in my thesis.</a>
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

const photoNode = document.getElementById("photoNode");
photoNode.style.transform = "none";
photoNode.style.opacity = 1;