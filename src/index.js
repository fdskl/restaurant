import homepageLoad from './homepage-load';
import menuLoad from './menu-load';
import aboutLoad from './about-load';

let x = document.getElementById("homebutton");
x.addEventListener("click", () => {
    if (document.body.childElementCount > 1) {
        document.getElementById("content").remove();
    }
    homepageLoad();
})

let y = document.getElementById("menubutton");
y.addEventListener("click", () => {
    if (document.body.childElementCount > 1) {
        document.getElementById("content").remove();
    }
    menuLoad();
})

let z = document.getElementById("aboutbutton");
z.addEventListener("click", () => {
    if (document.body.childElementCount > 1) {
        document.getElementById("content").remove();
    }
    aboutLoad();
})