// typed js
const typed = new Typed(".typing", {
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
        currentTheme++;
        if (currentTheme === themes.length) currentTheme = 0;
        root.style.setProperty("--main-accent", themes[currentTheme]);
    });
});

// Title
let fwd = true;
function title(val){
    const title = "Miguel Collaço", speed = 250;
    let pos = val;
    const le = title.length;
    let scroll;
    if (fwd) {
        if (pos < le) {
            pos = pos + 1;
            scroll = title.substr(0, pos);
            document.title = scroll;
            setTimeout(`title(${pos})`, speed);
        } else {
            fwd = false
            setTimeout(`title(${pos})`, speed);
        }
    } else {
        if (pos > 0) {
            pos = pos - 1;
            let ale = le - pos;
            scroll = title.substr(ale, le);
            document.title = scroll;
            setTimeout(`title(${pos})`, speed);
        } else {
            fwd = true;
            setTimeout(`title(${pos})`, speed);
        }
    }
}
title(0);
document.addEventListener('contextmenu', event => event.preventDefault());