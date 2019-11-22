window.addEventListener('scroll', function (event) {
  const linea = document.getElementById("linea");
  const abeja = document.getElementById("abeja");
  const scroll = event.target.scrollingElement.scrollTop;
  // al ser posición absoluta, tenemos que sumar también el offsetTop del contenedor
  const lineaInicio = linea.offsetTop + linea.offsetParent.offsetTop;
  const lineaHeight = linea.offsetHeight;
  const distanciaDesdeAbajo = 300; // esto es para que no se quede la abeja atorada hasta abajo de la pantalla, si no 300 px para arriba.

  console.log("scroll", scroll);
  console.log("lineaInicio", lineaInicio);
  console.log("lineaAHeight", lineaHeight);

  const inicioAbeja = lineaInicio < scroll + window.innerHeight - distanciaDesdeAbajo;

  const finAbeja = scroll + window.innerHeight - distanciaDesdeAbajo - abeja.offsetHeight < lineaInicio + lineaHeight;


  if (inicioAbeja && finAbeja) {
    abeja.style.top = scroll + window.innerHeight - lineaInicio - distanciaDesdeAbajo + "px";
  }
});
