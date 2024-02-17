

document.querySelectorAll('.icons img').forEach(image => {
    image.addEventListener('click', function () {
        const tooltip = this.nextElementSibling;
        const tooltips = document.querySelectorAll('.tooltip');

        // Hide all tooltips except the one associated with the clicked image
        tooltips.forEach(otherTooltip => {
            if (otherTooltip !== tooltip) {
                otherTooltip.style.display = 'none';
            }
        });

        // Toggle the display of the clicked tooltip
        tooltip.style.display = (tooltip.style.display === 'block') ? 'none' : 'block';
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
