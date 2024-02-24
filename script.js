


document.addEventListener("DOMContentLoaded", function () {
    // Get all the tooltip elements
    var tooltips = document.querySelectorAll(".tooltip");

    // Add click event listener to each image
    document.querySelectorAll(".icons img").forEach(function (img, index) {
        img.addEventListener("click", function () {
            // Hide all tooltips
            tooltips.forEach(function (tooltip) {
                tooltip.style.display = "none";
            });

            // Show the tooltip that corresponds to the clicked image
            tooltips[index].style.display = "block";
        });
    });

    // Hide tooltip when clicked outside of it
    document.addEventListener("click", function (event) {
        if (!event.target.matches(".icons img")) {
            tooltips.forEach(function (tooltip) {
                tooltip.style.display = "none";
            });
        }
    });
});

document.getElementById('contact').addEventListener('click', function () {
    var divs = document.querySelectorAll('.part');

    // Check if the first div is currently visible by checking its display property
    if (divs[0].style.display !== 'none') {
        // If the first div is visible, hide the first three divs and show the fourth div
        divs[0].style.display = 'none';
        divs[1].style.display = 'none';
        divs[2].style.display = 'none';
        divs[3].style.display = 'block';
    } else {
        // If the first div is not visible, show the first three divs and hide the fourth div
        divs[0].style.display = 'flex';
        divs[1].style.display = 'block';
        divs[2].style.display = 'block';
        divs[3].style.display = 'none';
    }

    // Prevent the default behavior of the button
    return false;
});



