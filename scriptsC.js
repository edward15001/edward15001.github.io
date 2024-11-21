document.addEventListener("DOMContentLoaded", function () {
    // Recuperar el progreso del usuario del localStorage
    let calculoProgress = localStorage.getItem("calculoProgress");

    // Si no hay progreso, inicializar en 0 (ningún ejercicio completado)
    if (!calculoProgress) {
        calculoProgress = 0;
        localStorage.setItem("calculoProgress", calculoProgress);
    }

    // Bloquear los botones de los ejercicios si no se han completado los anteriores
    const ejercicio1Btn = document.getElementById("ejercicio1");
    const ejercicio2Btn = document.getElementById("ejercicio2");
    const ejercicio3Btn = document.getElementById("ejercicio3");
    const ejercicio4Btn = document.getElementById("ejercicio4");
    const ejercicio5Btn = document.getElementById("ejercicio5");

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
    if (calculoProgress >= 1) {
        ejercicio2Btn.classList.remove("disabled");
    } else {
        ejercicio2Btn.classList.add("disabled");
        ejercicio2Btn.href = "#";
    }

    if (calculoProgress >= 2) {
        ejercicio3Btn.classList.remove("disabled");
    } else {
        ejercicio3Btn.classList.add("disabled");
        ejercicio3Btn.href = "#";
    }

    if (calculoProgress >= 3) {
        ejercicio4Btn.classList.remove("disabled");
    } else {
        ejercicio4Btn.classList.add("disabled");
        ejercicio4Btn.href = "#";
    }

    if (calculoProgress >= 4) {
        ejercicio5Btn.classList.remove("disabled");
    } else {
        ejercicio5Btn.classList.add("disabled");
        ejercicio5Btn.href = "#";
    }

    ejercicio1Btn.addEventListener("click", function () {
        showVideo("videos/calculo.mp4", "ejerciciosC/ejercicio1.html");
        localStorage.setItem("calculoProgress", 1);
    });

    ejercicio2Btn.addEventListener("click", function () {
        if (calculoProgress >= 1) {
            showVideo("videos/calculo.mp4", "ejerciciosC/ejercicio2.html");
            localStorage.setItem("calculoProgress", 2);
        }
    });

    ejercicio3Btn.addEventListener("click", function () {
        if (calculoProgress >= 2) {
            showVideo("videos/calculo.mp4", "ejerciciosC/ejercicio3.html");
            localStorage.setItem("calculoProgress", 3);
        }
    });

    ejercicio4Btn.addEventListener("click", function () {
        if (calculoProgress >= 3) {
            showVideo("videos/calculo.mp4", "ejerciciosC/ejercicio4.html");
            localStorage.setItem("calculoProgress", 4);
        }
    });

    ejercicio5Btn.addEventListener("click", function () {
        if (calculoProgress >= 4) {
            showVideo("videos/calculo.mp4", "ejerciciosC/ejercicio5.html");
            localStorage.setItem("calculoProgress", 5);
        }
    });
});
