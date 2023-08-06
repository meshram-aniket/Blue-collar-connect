let words = document.querySelectorAll(".word");

words.forEach(function (e, index) {
    e.style.left = 15 * index + "%";
    TweenMax.to(e, 200, {
        duration: 1, // Duration in seconds
        left: "+=500%"
    });
});

setInterval(function () {
    words.forEach(function (e) {
        if (e.getBoundingClientRect().x > document.documentElement.clientWidth) {
            TweenMax.to(e, 0, { duration: 0, left: -1 * e.getBoundingClientRect().width });
            TweenMax.to(e, 200, {
                duration: 2, // Duration in seconds
                left: "+=500%"
            });
        }
    });
}, 100); // Use a higher value, like 100 milliseconds





