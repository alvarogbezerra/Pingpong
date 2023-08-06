//observações: lá para o final, busque resolver os bugs criados a partir da divergência do seu código com o do professor.

function setup() {
  createCanvas(500, 400);
}

//variáveis da bolinha
let xbolinha = 250;
let ybolinha = 200;
let raio = 20
let velocidadexbolinha = 5;
let velocidadeybolinha = 5;
//ainda estou editando
let cordenadaYdaminharaquete = 150
let cordenadaXdaminharaquete = 5
let raqueteComprimento = 10;
let raqueteAltura = 90;
//variáveis da raquete do oponente




function draw() {
   background(51);
  mostraBolinha();
  movimentaBolinha ();
  verificaColisaoBorda ();
  mostraRaquete() 
  movimentaMinhaRaquete ();
  verificaColisaoRaquete ();
  }
 




function mostraBolinha(){
  circle(xbolinha,ybolinha,raio);
   describe('white circle with white outline in mid of white canvas')
}

function movimentaBolinha (){
   xbolinha += velocidadexbolinha; 
  ybolinha += velocidadeybolinha;
}

function verificaColisaoBorda (){
  if (xbolinha > width-7 || xbolinha < 7){
    velocidadexbolinha *= -1
  } 
  if (ybolinha > height-7 || ybolinha < 7){
    velocidadeybolinha *= -1
}
}
  
function mostraRaquete() {
    rect(cordenadaXdaminharaquete, cordenadaYdaminharaquete, raqueteComprimento, raqueteAltura);
}
  
function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        cordenadaYdaminharaquete -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        cordenadaYdaminharaquete += 5;
    }
} 

function verificaColisaoRaquete() {
    if (xbolinha - raio < cordenadaXdaminharaquete + raqueteComprimento
        && ybolinha - raio < cordenadaYdaminharaquete + raqueteAltura
        && ybolinha + raio > cordenadaYdaminharaquete) {
        velocidadexbolinha *= -1;
    }
}
  
function raquetedooponente(){
rect (485,150,10,90)}
