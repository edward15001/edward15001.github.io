document.addEventListener("DOMContentLoaded", function () {
    // Recuperar el progreso del usuario del localStorage
    let geometriaProgess = localStorage.getItem("geometriaProgess");

    // Si no hay progreso, inicializar en 0 (ningún ejercicio completado)
    if (!geometriaProgess) {
        geometriaProgess = 0;
        localStorage.setItem("geometriaProgess", geometriaProgess);
    }

    // Bloquear los botones de los ejercicios si no se han completado los anteriores
    const ejercicio1Btn = document.getElementById("ejercicio1");

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

        ejercicio1Btn.addEventListener("click", function () {
        showVideo("videos/geometria.mp4", "ejerciciosG/ejercicio1.html");
        localStorage.setItem("geometriaProgess", 1);
    });
});