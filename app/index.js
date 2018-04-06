import document from "document";

let myRoundRect1 = document.getElementById("roundRect1");
let myRoundRect2 = document.getElementById("roundRect2");
let myRoundRect3 = document.getElementById("roundRect3");
let myRoundRect4 = document.getElementById("roundRect4");
let myRoundRect5 = document.getElementById("roundRect5");
let myRoundRect6 = document.getElementById("roundRect6");

function setCircle(circle, cx, cy, r){
  
  circle.cx = cx;
  circle.cy = cy;
  circle.r = r;
  
}

function setRect(rect, x, y, w, h){
  
  rect.x = x;
  rect.y = y;
  rect.width = w;
  rect.height = h;
  
}


function setRoundedRect(roundRect, x, y, w, h, r){
  
  let circles = roundRect.getElementsByClassName("rrc");
  
  setCircle(circles[0], x+r, y+r, r);
  setCircle(circles[1], x+w-r, y+r, r);
  setCircle(circles[2], x+r, y+h-r, r);
  setCircle(circles[3], x+w-r, y+h-r, r);

  let rects = roundRect.getElementsByClassName("rrr");
  
  setRect(rects[0], x+r, y, w-r-r, h+1);
  setRect(rects[1], x, y+r, w, h-r-r);
  
  
}



setRoundedRect(myRoundRect1, 10, 10, 328, 230, 30);
setRoundedRect(myRoundRect2, 20, 20, 308, 210, 20);

setRoundedRect(myRoundRect3, 40, 40, 120, 80, 20);
setRoundedRect(myRoundRect4, 180, 40, 120, 80, 20);
setRoundedRect(myRoundRect5, 40, 130, 120, 80, 20);
setRoundedRect(myRoundRect6, 180, 130, 120, 80, 20);
