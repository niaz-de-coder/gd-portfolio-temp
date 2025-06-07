document.addEventListener("DOMContentLoaded", function() {
    // Theme toggle code...
    const nptBg = document.getElementById("nptBg");
    nptBg.style.transition = "justify-content 0.3s";
    let toggled = false;
    nptBg.addEventListener("click", function() {
        if (!toggled) {
            nptBg.style.justifyContent = "end";
        } else {
            nptBg.style.justifyContent = "start";
        }
        toggled = !toggled;
    });
});