document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "asset/logo/mojo.jpg",
        "asset/logo/apple.jpg",
        "asset/logo/bird.jpeg",
        "asset/logo/manu.png",
        "asset/logo/temp.jpg"
    ];

    let start = 0;

    const logo1 = document.getElementById("logo1");
    const logo2 = document.getElementById("logo2");
    const logo3 = document.getElementById("logo3");

    function updateLogos() {
        logo1.style.backgroundImage = `url('${images[start]}')`;
        logo2.style.backgroundImage = `url('${images[(start + 1) % images.length]}')`;
        logo3.style.backgroundImage = `url('${images[(start + 2) % images.length]}')`;
    }

    updateLogos();

    document.getElementById("logoRight").addEventListener("click", function() {
        start = (start + 1) % images.length;
        updateLogos();
    });

    document.getElementById("logoLeft").addEventListener("click", function() {
        start = (start - 1 + images.length) % images.length;
        updateLogos();
    });
});