

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
