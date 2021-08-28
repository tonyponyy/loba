var textos = [
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<b> Ut enim ad minim veniam</b>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  "Una mañana,<b> tras un sueño intranquilo</b>, Gregorio Samsa se despertó convertido en un monstruoso insecto. Estaba echado de espaldas sobre un duro caparazón y, al alzar la cabeza, vio su vientre convexo y oscuro, surcado por curvadas callosidades, sobre el que casi no se aguantaba la colcha, que estaba a punto de escurrirse hasta el suelo. Numerosas patas, penosamente delgadas en comparación con el grosor normal de sus piernas,<b> se agitaban sin concierto.</b> - ¿Qué me ha ocurrido?",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,<b> totam rem aperiam</b>, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
  "Reina en mi espíritu una alegría admirable, muy parecida a las dulces alboradas de la primavera, de que gozo aquí con delicia. Estoy solo, y me felicito de vivir en este país, el más a propósito para almas como la mía, soy tan dichoso, mi querido amigo,<b> me sojuzga de tal modo la idea de reposar</b>, que no me ocupo de mi arte.",
];
//segundos en los que cambiará los textos
var segundos = 6;

var timer = 0;

var iniciaTrans = () => {
  elementos = document.getElementsByClassName("transicion");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.opacity = 1;
  }
};

var imprimeTextos = () => {
  espacio_texto = document.getElementById("texto_des");
  espacio_texto.innerHTML = textos[timer];
  timer++;
  if (timer >= textos.length) {
    timer = 0;
  }
};

window.onload = function () {
  window.setTimeout(iniciaTrans, 4 * 1000);
  iniciaTextos();
};

var iniciaTextos = () => {
  fader();
  window.setTimeout(iniciaTextos, segundos * 1000);
};

var fader = () => {
  elementos = document.getElementsByClassName("transicion");
  espacio_texto = document.getElementById("texto_des");
  espacio_texto.style.opacity = 0;
  window.setTimeout(function () {
    espacio_texto.style.opacity = 1;
  }, 1000);
  window.setTimeout(function () {
    imprimeTextos();
  }, 1000);
};
