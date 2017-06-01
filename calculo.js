'use strict';

document.addEventListener("DOMContentLoaded",main, false);

function main(){

/*Localizamos los inputs*/
	var precio = document.getElementById('precio');
	var descuento = document.getElementById('descuento');
	var iva = document.getElementById('iva');
	var resultado = document.getElementById('resultado');

/*Añadimos el evento a los input*/
	precio.addEventListener("change", calculo, false);
	descuento.addEventListener("change", calculo, false);
	iva.addEventListener("change", calculo, false);

/*Esta funcion hace los calculos*/
	function calculo(){
		var vPrecio = precio.value;
		var vDescuento = descuento.value;
		var vIva = iva.value;

		
		var precioConDescuento = vPrecio-(vPrecio*(vDescuento/100));
		var IVA = vIva/100+1;


		var resultadoFinal = precioConDescuento * IVA;
		var resultadoFormateado = resultadoFinal.toFixed(2);

		resultado.value = resultadoFormateado + " €."
	}
}