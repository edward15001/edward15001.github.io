document.addEventListener("DOMContentLoaded", function () {
    // Recuperar el progreso del usuario del localStorage
    let estadisticaProgress = localStorage.getItem("estadisticaProgress");

    // Si no hay progreso, inicializar en 0 (ningún ejercicio completado)
    if (!estadisticaProgress) {
        estadisticaProgress = 0;
        localStorage.setItem("estadisticaProgress", estadisticaProgress);
    }

    // Bloquear los botones de los ejercicios si no se han completado los anteriores
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

    // Actualizamos el estado de los botones basándonos en el progreso
    if (estadisticaProgress >= 1) {
        ejercicio2Btn.classList.remove("disabled");
    } else {
        ejercicio2Btn.classList.add("disabled");
        ejercicio2Btn.href = "#";
    }

    if (estadisticaProgress >= 2) {
        ejercicio3Btn.classList.remove("disabled");
    } else {
        ejercicio3Btn.classList.add("disabled");
        ejercicio3Btn.href = "#";
    }

    if (estadisticaProgress >= 3) {
        ejercicio4Btn.classList.remove("disabled");
    } else {
        ejercicio4Btn.classList.add("disabled");
        ejercicio4Btn.href = "#";
    }

    if (estadisticaProgress >= 4) {
        ejercicio5Btn.classList.remove("disabled");
    } else {
        ejercicio5Btn.classList.add("disabled");
        ejercicio5Btn.href = "#";
    }

    if (estadisticaProgress >= 5) {
        ejercicio6Btn.classList.remove("disabled");
    } else {
        ejercicio6Btn.classList.add("disabled");
        ejercicio6Btn.href = "#";
    }

    ejercicio1Btn.addEventListener("click", function () {
        showVideo("videos/estadistica.mp4", "ejerciciosE/ejercicio1.html");
        localStorage.setItem("estadisticaProgress", 1);
    });

    ejercicio2Btn.addEventListener("click", function () {
        if (estadisticaProgress >= 1) {
            showVideo("videos/estadistica.mp4", "ejerciciosE/ejercicio2.html");
            localStorage.setItem("estadisticaProgress", 2);
        }
    });

    ejercicio3Btn.addEventListener("click", function () {
        if (estadisticaProgress >= 2) {
            showVideo("videos/estadistica.mp4", "ejerciciosE/ejercicio3.html");
            localStorage.setItem("estadisticaProgress", 3);
        }
    });

    ejercicio4Btn.addEventListener("click", function () {
        if (estadisticaProgress >= 3) {
            showVideo("videos/estadistica.mp4", "ejerciciosE/ejercicio4.html");
            localStorage.setItem("estadisticaProgress", 4);
        }
    });

    ejercicio5Btn.addEventListener("click", function () {
        if (estadisticaProgress >= 4) {
            showVideo("videos/estadistica.mp4", "ejerciciosE/ejercicio5.html");
            localStorage.setItem("estadisticaProgress", 5);
        }
    });

    ejercicio6Btn.addEventListener("click", function () {
        if (estadisticaProgress >= 5) {
            showVideo("videos/estadistica.mp4", "ejerciciosE/ejercicio6.html");
            localStorage.setItem("estadisticaProgress", 6);
        }
    });
});