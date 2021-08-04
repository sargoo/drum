/*con el "window.addEventListener" se le agrega un "esuchador" en este caso a la accion 'keydown' (presionar tecla) y
la funcion "sonar" que va a hacer una accion cuando  el "escuchador" detecte que se presionó una tecla.
se creó una constante (también pudo haber sido una veriable (let ó var)) llamada "audio".
con "document.querySelector" seleccionamos lo primero que haya en el HTML con ese nombre.
la función querySelector va a buscar en la etiqueta audio(que esta en HTML) el keyCode de la teclaOprimida y la va a igualar
a algun data-key que tenga alguna de las etiquetas <audio> que haya en el HTML.
si hay alguna coincidencia va a reproducir el sonido igualado a esa tecla. esto ultimo pasa con "audio.play()".
el "audio.currentTime = 0" es para que puedan sonar varias teclas a la vez o no haya que esperar que deje de sonar una
para poder tocar otra.*/


function sonar(teclaOprimida) {
  const audio = document.querySelector(`audio[data-key = "${teclaOprimida.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${teclaOprimida.keyCode}"]`); //lo mimso que pasa con la etiqueta audio pero con la clase ".key".
  console.log(teclaOprimida);
  if (!audio) return; //para que no arroje error al tocar una tecla sin sonido.
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing'); //le agrega la clase "playing" (transición ó resplando amarillo).
};

function removerTransicion(e) {
  if (e.propertyName == 'transform') { //propertyName es una propiedad de 'playing' que se ve haciendo console.log en parametro e y trasform
    this.classList.remove('playing');  //es la única que cambia por eso cuando deja de ser verdad el boton vuelve a su tamaño original.
    console.log(e);
  } 
  
}

const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend', removerTransicion)); /* key => es una funcion flecha es este caso significa 
por cada key de keys (porque keys tiene seleccionada todas las clases key con el querySelector) agregale un un escuchador que finalice
 la trasicion llamando a la funcion "removerTransicion"*/
window.addEventListener('keydown', sonar);

