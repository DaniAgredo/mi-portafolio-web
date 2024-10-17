let menuVisible = false;

function mostrarOcultarMenu() {
	if (menuVisible) {
		document.getElementById('nav').classList = '';
		menuVisible = false;
	} else {
		document.getElementById('nav').classList = 'responsive';
		menuVisible = true;
	}
}

function seleccionar() {
	document.getElementById('nav').classList = '';
	menuVisible = false;
}

window.onscroll = function () {
	efectoHabilidades();
};

function efectoHabilidades() {
	// Tu código para el efecto de habilidades aquí
}
(function () {
	emailjs.init('SV1el1JoDnLwa91ma'); // Reemplaza con tu User ID real
})();

document
	.getElementById('contact-form')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		emailjs.sendForm('service_4uy53db', 'template_tu8aasu', this).then(
			function () {
				alert('¡Email enviado con éxito!');
			},
			function (error) {
				alert('Error al enviar el email: ' + JSON.stringify(error));
			},
		);
	});
