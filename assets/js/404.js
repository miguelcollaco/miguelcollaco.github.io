// Title
const title = "Miguel Collaço", speed = 250;
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
        await new Promise(r => setTimeout(r, 1000));
        document.title = 'Miguel Collaço';
        await new Promise(r => setTimeout(r, 1000));
        document.title = '﻿';
        await new Promise(r => setTimeout(r, 1000));
        document.title = 'Miguel Collaço';
        await new Promise(r => setTimeout(r, 1000));
        document.title = '﻿';
        await new Promise(r => setTimeout(r, 1000));
        titleAnim(0);
    }
}
titleAnim();
document.addEventListener('contextmenu', event => event.preventDefault());