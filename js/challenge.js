// As a user, I should see the timer increment every second once the page has loaded.

const timer = setInterval(timerFunc, 1000);

function timerFunc() {
    let timerVal = Date.now();
    document.getElementById("counter").innerHTML = timerVal;
}

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

    // grab the minus and plus buttons elements
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const counter = document.getElementById("counter");

    // attach event listeners
minus.addEventListener("click", decrementCounter)
function decrementCounter() {
    let a = document.getElementById("counter");
    let b = parseInt(a.innerText);
    a.innerText = b - 1;
}

plus.addEventListener("click", incrementCounter)
function incrementCounter() {
    let a = document.getElementById("counter");
    let b = parseInt(a.innerText);
    a.innerText = b + 1;
}

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

    // grab heart elements
const heart = document.getElementById("heart");
    //attach event lisener
heart.addEventListener("click", likedNum)
function likedNum() {
    let a = document.getElementById("counter");
    let b = parseInt(a.innerText);
    let c = document.querySelector(".likes");
    let d = document.createElement("li").setAttribute("data-num", b);
    // let e = parseInt(d.children[0].innerText);
    d.innerText = b + " has been liked " + 1 + "time";
    c.appendChild(d)
}

// As a user, I can pause the counter, which should
    // pause the counter
    // disable all buttons except the pause button
    // the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.

const pause = document.getElementById("pause");
    // attach event listener
pause.addEventListener("click", pauseCounter)
function pauseCounter() {
    clearInterval(interval)
    pause.innerText = "resume"
    document.getElementById("button").forEach(function(a))
}

// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
const comment = document.getElementById("comment-input")
comment.addEventListener("submit", function(event));
function(event) {
    event.preventDefault();
    d = querySelector(".comments")
    e = document.createElement("p")
    e.innerText = d
    d.appendChild(e)
}

heart.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText),c=document.querySelector(".likes"),d=void 0;if([].concat(_toConsumableArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b)){d=document.querySelector('[data-num="'+b+'"]');var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}else(d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)}),pause.addEventListener("click",function(){playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}),commentForm.addEventListener("submit",function(a){a.preventDefault();var b=this.children[0],c=b.value;b.value="";var d=document.querySelector(".comments"),e=document.createElement("p");e.innerText=c,d.appendChild(e)});

