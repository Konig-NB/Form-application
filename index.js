let first = document.getElementById("nav");
let sec = document.getElementById("nav2");
let third = document.getElementById("nav3");
let fourth = document.getElementById("nav4");
let Next1 = document.getElementById("next1");
let Next2 = document.getElementById("next");
let Prev1 = document.getElementById("prev");
let Next3 = document.getElementById("next2");
let Prev2 = document.getElementById("prev2");
let Prev3 = document.getElementById("prev3");

Next1.onclick = function(){
    sec.style.display = "block";
    first.style.display = "none";
    return false;
}

Next2.onclick = function(){
    third.style.display = "block";
    sec.style.display = "none";
    return false;
}

Prev1.onclick = function(){
    first.style.display = "block";
    sec.style.display = "none";
    return false;
}

Prev2.onclick = function(){
    sec.style.display = "block";
    third.style.display = "none";
    return false;
}

Next3.onclick = function(){
    fourth.style.display = "block";
    third.style.display = "none"
    return false;
}

Prev3.onclick = function(){
    third.style.display = "block";
    fourth.style.display = "none";
    return false;
}