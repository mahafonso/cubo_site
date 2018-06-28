$(document).ready(function(){
	'use strict';

	var $form = $('#contato form');

	$form.find('input[type=tel]').inputmask('(99) 9999[9]-9999');


	// ===============================================================
	/* VALIDACAO FORMULARIO */
	// ===============================================================
	$form.validate({
		focusCleanup: true,
		focusInvalid: false,
		errorPlacement: function(error, element) {
			element.attr('placeholder', error.text() );
		},
		unhighlight: function(element, errorClass, validClass) {	
			$(element)
				.removeClass(errorClass)
				.addClass(validClass)
				.attr('placeholder', $(element).data('placeholder'));
		},
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			telefone: {
				required: true
			},
			mensagem: {
				required: true
			}
		}
	});


	// ===============================================================
	/* ENVIO FORMULARIO */
	// ===============================================================
	$form.ajaxForm({
		type: 'POST',
		url: 'forms.php',
		success: function(data){
			if( data ){
				if( data.status ) {
					console.log('mensagem enviada - ajax ok');
				} else {
					console.log('mensagem não enviada');
				}
			} else {
				console.log('mensagem não enviada');
			}
		},
		error: function(e){
			console.log('mensagem não enviada');
		}
	});
});