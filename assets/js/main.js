// typed js
new Typed(".typing", {
    strings: ["computer science student", "tech enthusiast"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 40,  
});

// Theme changer
const themes = [
    "#9affe1",
    "#abff9a",
    "#ff9a9a",
    "#f5ff9a",
    "#9aadff",
    "#ffd280",
    "#adff6b",
    "#6bfaff",
    "#55F7DD",
    "#7BF774",
    "#F770F4",
    "#E2F780",
];

const root = document.querySelector(":root");
const themeToggle = document.querySelector("#main-name");
const themeToggle2 = document.querySelector("#about-title");
let currentTheme = 0;
[themeToggle,themeToggle2].forEach(item => {
    item.addEventListener("click", () => {
        if (++currentTheme === themes.length) currentTheme = 0;
        root.style.setProperty("--main-accent", themes[currentTheme]);
    });
});

// Title
const title = "Miguel Collaço", speed = 300;
async function titleAnim(val = 0) {
    let pos = val;
    length = title.length;
    let scroll;
    if (pos < length) {
        pos += 1;
        scroll = title.substring(0, pos);
        document.title = scroll;
        setTimeout(`titleAnim(${pos})`, speed);
    } else {
        document.title = '﻿';
        await new Promise(r => setTimeout(r, 400));
        document.title = 'Miguel Collaço';
        await new Promise(r => setTimeout(r, 400));
        document.title = '﻿';
        await new Promise(r => setTimeout(r, 400));
        document.title = 'Miguel Collaço';
        await new Promise(r => setTimeout(r, 400));
        document.title = '﻿';
        await new Promise(r => setTimeout(r, 400));
        titleAnim(0);
    }
}
titleAnim();
document.addEventListener('contextmenu', event => event.preventDefault());
