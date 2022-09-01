
var background;
var dientes;
var coete

//background
var inicio;
var inicioImg;
//jugador
var juego1;
var juego1img;
var jugador;
var suelo;
var gamestate = 1;


function preload(){
  inicioImg=loadImage("./imagenes/BOTON PLAY.png");
 sonrisa = loadImage("./imagenes/nyctophobia4.png");
//coete = loadImage("./imagenes/sprite_1.png")

//juego1img=loadImage("./imagenes/paredes.png");
sueloImg = loadImage("./imagenes/corredor.png");


  
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  //dientes = createSprite(270,200);
 //dientes.addImage(sonrisa);
 // dientes.scale= 1;
 

  inicio=createSprite(width/2,height/2);
  inicio.addImage(inicioImg);

  
  


 

  
 
}

function draw() {
  background("black");

  if(keyDown("space")){
    
    inicioJuego();
    gamestate = 2;
     
  }
piso1();
  
    
  
  drawSprites()
}

function inicioJuego(){
  
  inicio.visible=false;
  
  
    //juego1=createSprite(width/2,height/2,width,height*5);
   // juego1.addImage(juego1img);
   
    
    //juego1.scale=0.4; 
    jugador= createSprite(250,420,5,5);
    jugador.visible=false;
   
      suelo = createSprite(width/2,height/2,width/2  ,height*5);
      suelo.addImage(sueloImg);
      suelo.addImage(sonrisa);
    

  
 
  
    
   
}
function piso1(){
  if(gamestate === 2){
    if (jugador.position.x === 250){
      suelo.changeImage("suelo",sueloImg)
    }
    if(keyDown("up")){

      jugador.position.y=jugador.position.y-1;
    //juego1.position.y=juego1.position.y-1;
   camera.position.y=jugador.position.y;
   suelo.scale = suelo.scale +0.02;
  // juego1.scale=juego1.scale+0.2;
  }
  
  if(keyDown("down") && suelo.scale >=1){
    
    jugador.position.y=jugador.position.y+1;
    camera.position.y= jugador.position.y;
   // suelo.position.y = jugador.position.y;
  suelo.scale = suelo.scale-0.02;
    //juego1.position.y=juego1.position.y+1;
    //juego1.scale=juego1.scale-0.2;
  }
  if(keyDown("left")){

    jugador.position.x = jugador.position.x-1;
    
    
  
  }
  if(keyDown("right")){
    jugador.position.x = jugador.position.x+1
  }
 
  if(jugador.position.x < 247){
    suelo.changeImage("sonrisa", sonrisa);
   
    
  }
}
  
  
  
 




}
