 window.onload=function () {
const image=document.getElementById("chr");
const logo=document.getElementById("logo");
const canvas=document.getElementById("canvas");
const scale=1.8;
image.width=223*scale;
image.height=319.5*scale;

logo.width=480;
logo.height=165;

const Placement={
 position:{
       x:100,
       y:30
       }
    };


const Placement2nd={
 position:{
        x:600,
        y:40
        }
    };
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;
ctx.drawImage(image, Placement.position.x, Placement.position.y, image.width, image.height);
ctx.drawImage(logo, Placement2nd.position.x, Placement2nd.position.y, logo.width, logo.height);
};