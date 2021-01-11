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
const heartButton = document.getElementById("heart");
    //attach event lisener
heartButton.addEventListener("click", likedNum)
function likedNum() {
    let a = document.getElementById("counter");
    let b = parseInt(a.innerText);
    let c = document.querySelector(".likes");
    // using void 0 to prevent unwanted refresh of the page
    // let d = void 0;
        // if ([].concat(_toconsumableArray(c.children[0])
        //       .map(function(a) {
        //           return parseInt(a.dataset.num)})
        //       .include(b))
        //     ) {
        //     d = document.querySelector('[data-num="'+b+'"]');
        //     e = parseInt(d.children[0].innerText);
        //     d.innerHTML= b + " has been liked <span>" + (e+1) + "</span> times"
        //     }
        // else 
            d = document.createElement("li")
            d.innerHTML = b + " has been liked <span>1</span> time";
            c.appendChild(d)
}

// As a user, I can pause the counter, which should
    // pause the counter
    // disable all buttons except the pause button
    // the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.

let pause = document.getElementById("pause");
    // attach event listener
pause.addEventListener("click", pauseCounter)
    // tell what happens when user clicks on pause button
function pauseCounter() {
    let playing =!0
    let interval = timer
    if (playing) { playing =!1, clearInterval(interval), this.innerText = "resume" }
    else { playing =! 0, interval = timer, this.innerText = "pause" };
}


// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

const comment = document.getElementsByTagName("form")
    // add event listener
comment.addEventListener("submit", function(event) {
    event.preventDefault();
    let b = this.children[0]
    let c = b.value
    b.value = ""
    let d = querySelector(".comments")
    let e = document.createElement("p")
    e.innerText = c
    d.appendChild(e)
})

