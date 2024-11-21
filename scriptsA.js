document.addEventListener("DOMContentLoaded", function () {
    let algebraProgress = localStorage.getItem("algebraProgress");

    if (!algebraProgress) {
        algebraProgress = 0;
        localStorage.setItem("algebraProgress", algebraProgress);
    }

    const ejercicio1Btn = document.getElementById("ejercicio1");
    const ejercicio2Btn = document.getElementById("ejercicio2");
    const ejercicio3Btn = document.getElementById("ejercicio3");
    const ejercicio4Btn = document.getElementById("ejercicio4");
    const ejercicio5Btn = document.getElementById("ejercicio5");
    const ejercicio6Btn = document.getElementById("ejercicio6");

    const modal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("videoPlayer");
    const closeModal = document.querySelector(".close");

    let currentExerciseUrl = ''; // Guardar la URL del ejercicio actual

    function showVideo(videoUrl, exerciseUrl) {
        modal.style.display = "block";
        videoPlayer.src = videoUrl;
        currentExerciseUrl = exerciseUrl; // Guardar la URL para redirigir después
    }

    function closeVideo() {
        modal.style.display = "none";
        videoPlayer.pause();
        videoPlayer.src = "";
        if (currentExerciseUrl) {
            window.location.href = currentExerciseUrl; // Redirigir al ejercicio
        }
    }

    closeModal.addEventListener("click", closeVideo);

    window.onclick = function (event) {
        if (event.target == modal) {
            closeVideo();
        }
    }

    if (algebraProgress >= 1) {
        ejercicio2Btn.classList.remove("disabled");
    } else {
        ejercicio2Btn.classList.add("disabled");
        ejercicio2Btn.href = "#";
    }

    if (algebraProgress >= 2) {
        ejercicio3Btn.classList.remove("disabled");
    } else {
        ejercicio3Btn.classList.add("disabled");
        ejercicio3Btn.href = "#";
    }

    if (algebraProgress >= 3) {
        ejercicio4Btn.classList.remove("disabled");
    } else {
        ejercicio4Btn.classList.add("disabled");
        ejercicio4Btn.href = "#";
    }

    if (algebraProgress >= 4) {
        ejercicio5Btn.classList.remove("disabled");
    } else {
        ejercicio5Btn.classList.add("disabled");
        ejercicio5Btn.href = "#";
    }

    if (algebraProgress >= 5) {
        ejercicio6Btn.classList.remove("disabled");
    } else {
        ejercicio6Btn.classList.add("disabled");
        ejercicio6Btn.href = "#";
    }

    // Mostrar el video explicativo y configurar la redirección al ejercicio correspondiente
    ejercicio1Btn.addEventListener("click", function () {
        showVideo("videos/algebra.mp4", "ejerciciosA/ejercicio1.html");
        localStorage.setItem("algebraProgress", 1);
    });

    ejercicio2Btn.addEventListener("click", function () {
        if (algebraProgress >= 1) {
            showVideo("videos/algebra.mp4", "ejerciciosA/ejercicio2.html");
            localStorage.setItem("algebraProgress", 2);
        }
    });

    ejercicio3Btn.addEventListener("click", function () {
        if (algebraProgress >= 2) {
            showVideo("videos/algebra.mp4", "ejerciciosA/ejercicio3.html");
            localStorage.setItem("algebraProgress", 3);
        }
    });

    ejercicio4Btn.addEventListener("click", function () {
        if (algebraProgress >= 3) {
            showVideo("videos/algebra.mp4", "ejerciciosA/ejercicio4.html");
            localStorage.setItem("algebraProgress", 4);
        }
    });

    ejercicio5Btn.addEventListener("click", function () {
        if (algebraProgress >= 4) {
            showVideo("videos/algebra.mp4", "ejerciciosA/ejercicio5.html");
            localStorage.setItem("algebraProgress", 5);
        }
    });

    ejercicio6Btn.addEventListener("click", function () {
        if (algebraProgress >= 5) {
            showVideo("videos/algebra.mp4", "ejerciciosA/ejercicio6.html");
            localStorage.setItem("algebraProgress", 6);
        }
    });
});
