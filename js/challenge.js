// As a user, I should see the timer increment every second once the page has loaded.

const timer = setInterval(timerFunc, 1000);
let count = 0;
function timerFunc() {
    count += 1;
    document.getElementById("counter").innerText = count;
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

let pauseButton = document.getElementById("pause");
let paused = false;
    // attach event listener
pauseButton.addEventListener("click", pauseCounter)
    // tell what happens when user clicks on pause button
function pauseCounter() {
    paused = !paused
    let btns = document.querySelectorAll(".disable-me");
    let pauseButton = document.getElementById("pause");

    if (paused) { btns.forEach(btn => (btn.disabled = true));
        pauseButton.innerText = "resume";
    } else { 
        pauseButton.innerText = "pause"
        btns.forEach(btn => (btn.disabled = false));
    }
    console.log(paused);
}


// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

    document.addEventListener("DOMContentLoaded", function() {
        const commentForm = document.getElementById("comment-form");
        // add event listener
        commentForm.addEventListener("submit", commentHandler)
    });   

    function commentHandler(event) {
        event.preventDefault();
        let comment = document.getElementById("comment-input").value;
        let commentList = document.querySelector(".comments")
        let li = document.createElement("li")
        li.innerText = comment;
        commentList.appendChild(li);
        event.target.reset()
    }

