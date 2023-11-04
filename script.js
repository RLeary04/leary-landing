document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    const counter = document.getElementById("counter");

    let count = 0;

    button.addEventListener("click", function () {
        // Increment the count and update the counter display
        count++;
        counter.innerText = count;

        if (count >= 10) {
            const holyMoly = document.createElement("img");

            holyMoly.setAttribute("src", "https://media.tenor.com/oROQMARuS7sAAAAC/holy-moly-emoji.gif");

            holyMoly.setAttribute("id", "holyMoly");

            holyMoly.setAttribute("alt", "holyMoly");

            document.body.appendChild(holyMoly);
        }
    });

});