let isShown = false;
document.querySelectorAll(".btnShowHide").forEach(button => {
    button.addEventListener('click', toggleVisibility);
});

function toggleVisibility(event) {
    const button = event.currentTarget;
    const targetId = button.getAttribute('data-target');
    const targetImage = document.getElementById(targetId);

    if (targetImage) {
        if (isShown) {
            button.innerText = "[Show]";
            targetImage.style.display = "none";
        } else {
            button.innerText = "[Hide]";
            targetImage.style.display = "block";
        }
        isShown = !isShown;
    }
}