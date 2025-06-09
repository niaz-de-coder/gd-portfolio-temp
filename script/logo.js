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

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "asset/poster/poster1.jpg",
        "asset/poster/poster2.jpg",
        "asset/poster/poster3.jpg",
        "asset/poster/poster4.jpg",
        "asset/poster/poster5.jpg"
    ];

    let start = 0;

    const poster1 = document.getElementById("poster1");
    const poster2 = document.getElementById("poster2");
    const poster3 = document.getElementById("poster3");

    function updateposters() {
        poster1.style.backgroundImage = `url('${images[start]}')`;
        poster2.style.backgroundImage = `url('${images[(start + 1) % images.length]}')`;
        poster3.style.backgroundImage = `url('${images[(start + 2) % images.length]}')`;
    }

    updateposters();

    document.getElementById("posterRight").addEventListener("click", function() {
        start = (start + 1) % images.length;
        updateposters();
    });

    document.getElementById("posterLeft").addEventListener("click", function() {
        start = (start - 1 + images.length) % images.length;
        updateposters();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "asset/tn/tn1.jpg",
        "asset/tn/tn2.jpeg",
        "asset/tn/tn3.jpeg",
        "asset/tn/tn4.jpg",
        "asset/tn/tn5.jpg"
    ];

    let start = 0;

    const tn1 = document.getElementById("tn1");
    const tn2 = document.getElementById("tn2");
    const tn3 = document.getElementById("tn3");

    function updatetns() {
        tn1.style.backgroundImage = `url('${images[start]}')`;
        tn2.style.backgroundImage = `url('${images[(start + 1) % images.length]}')`;
        tn3.style.backgroundImage = `url('${images[(start + 2) % images.length]}')`;
    }

    updatetns();

    document.getElementById("tnRight").addEventListener("click", function() {
        start = (start + 1) % images.length;
        updatetns();
    });

    document.getElementById("tnLeft").addEventListener("click", function() {
        start = (start - 1 + images.length) % images.length;
        updatetns();
    });
});