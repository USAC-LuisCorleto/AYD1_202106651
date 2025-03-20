document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('infoButton');
    const infoDisplay = document.getElementById('infoDisplay');

    button.addEventListener('click', function () {
        const name = "Luis Carlos Corleto Marroquín";
        const carnet = "202106651";
        const curso = "Análisis y Diseño de Sistemas 1";

        infoDisplay.innerHTML = `
            <h3 class="mb-3">Información del Estudiante</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Carné:</strong> ${carnet}</p>
            <p><strong>Curso:</strong> ${curso}</p>
        `;

        infoDisplay.classList.remove('hidden');
    });
});