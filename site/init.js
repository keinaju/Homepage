"use strict";

const today = new Date();
let age = today.getFullYear() - 1993;
if (today.getMonth() < 8) age -= 1;
if (today.getMonth() == 8 && today.getDate() < 8) age -= 1;
const ageNode = document.getElementById("ageNode");
ageNode.innerHTML = age;

//Default all links to open in new tab
const links = document.querySelectorAll("a");
for (const link of links) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
}