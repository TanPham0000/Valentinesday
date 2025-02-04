document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");

    // Confetti effect when clicking "YES"
    yesButton.addEventListener("click", function () {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Increase button size by 30px on each click
        let currentWidth = yesButton.offsetWidth;
        let currentHeight = yesButton.offsetHeight;       
        yesButton.style.width = `${currentWidth + 30}px`;
        yesButton.style.height = `${currentHeight + 30}px`;
        console.log("Yippeeee"); 
    });

    // Make "NO" button run away
    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
