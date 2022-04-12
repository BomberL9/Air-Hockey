var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["af1cdc15-43a8-420f-8e87-4e93fc29a0a4","51ede240-f4c7-4261-bcca-e20472f079ff","33f7802d-08dc-49aa-94ba-46127cee1199"],"propsByKey":{"af1cdc15-43a8-420f-8e87-4e93fc29a0a4":{"name":"disco","sourceUrl":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png","frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png"},"51ede240-f4c7-4261-bcca-e20472f079ff":{"name":"rebatedor_red","sourceUrl":"assets/v3/animations/chG5xUEKA7c6jpRfxCCHl_MCbmxC6t_ALS3Mz4CO1oQ/51ede240-f4c7-4261-bcca-e20472f079ff.png","frameSize":{"x":47,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"Qp.Nn9Uq1Hlr_VzYgRMpGHQiYyE8j7dG","loadedFromSource":true,"saved":true,"sourceSize":{"x":47,"y":50},"rootRelativePath":"assets/v3/animations/chG5xUEKA7c6jpRfxCCHl_MCbmxC6t_ALS3Mz4CO1oQ/51ede240-f4c7-4261-bcca-e20472f079ff.png"},"33f7802d-08dc-49aa-94ba-46127cee1199":{"name":"rebatedor_blue","sourceUrl":"assets/v3/animations/chG5xUEKA7c6jpRfxCCHl_MCbmxC6t_ALS3Mz4CO1oQ/33f7802d-08dc-49aa-94ba-46127cee1199.png","frameSize":{"x":47,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"43Hi.T3iXX3RFMPHZyIuWRU_6F0VynwF","loadedFromSource":true,"saved":true,"sourceSize":{"x":47,"y":50},"rootRelativePath":"assets/v3/animations/chG5xUEKA7c6jpRfxCCHl_MCbmxC6t_ALS3Mz4CO1oQ/33f7802d-08dc-49aa-94ba-46127cee1199.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("black");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("black");


//criando quadra
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "blue";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "blue";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "blue";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "blue";

//criando a música
playSound("assets/category_background/repitition.mp3",true);

// criando objetos e lhes dando cores
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";

//variáveis de pontuação
var playerScore=0;
var compScore=0;

//variável de estado de jogo
var gameState = "serve";

//coloca as animações
striker.setAnimation("disco");
playerMallet.setAnimation("rebatedor_blue");
computerMallet.setAnimation("rebatedor_red");

//tamanho das animações
striker.scale = 0.1;
playerMallet.scale = 1.2;
computerMallet.scale = 1.2;

function draw() {
  //limpar a tela
  background("white");
 
  if (gameState == "serve"){
    //exibir texto
    textSize(20);
    textFont("Comic Sans MS");
    fill("black");
    text("Pressione Espaço para Atacar",70,170);
  
    if(striker.isTouching(goal2)){
      //use show grid para identificar o valor de x e y para trazer o atacante para o centro
      striker.x=200;
      striker.y=200;
      striker.velocityX=0;
      striker.velocityY=0;
      playSound("assets/category_achievements/vibrate_success_1_up.mp3");
      }
      
    if(striker.isTouching(goal1)){
     //Redefina o atacante adicionando o valor central de x e y
     striker.x=200;
     striker.y=200;
     striker.velocityX=0;
     striker.velocityY=0;
     playSound("assets/category_achievements/vibrate_success_1_up.mp3");
     }
  
  if (keyDown("space")) {
    //lance o atacante quando a tecla espaço for pressionada
    serve();
    gameState = "play";
  }
  }
  
  if (gameState == "play"){
    if (striker.isTouching(goal2)){
      gameState = "serve";
     //aumente a pontuação do jogador
      compScore = compScore+1 ;
    }

    if (striker.isTouching(goal1)){
      gameState = "serve";
      playerScore =  playerScore+ 1;
    }
    //faça o bastão do jogador se mover com as teclas de seta
    paddleMovement();
  
    if(compScore == 5||playerScore == 5){
      gameState = "end";
    }
  //inteligência artificial para o bastão do computador
  //faça com que se mova com a posição y do atacante
  computerMallet.x = striker.x;
  }
  
  if (gameState == "end"){
    if(playerScore == 5)//adicione a condição para verificar se a pontuação do jogador chegou a 5

      {
        fill("maroon");
        textSize(18);
        //adicione o texto para fim de jogo
        text("Fim de Jogo!",170,160);
        striker.destroy();
        stopSound("assets/category_background/repitition.mp3");
      }
  }

  //exibir pontuação
  textSize(18);
  fill("maroon");
  text(0+playerScore, 25,225);
  text(0+compScore,25,185);
  

  
  //desenhe uma linha no centro
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
   }
  
  //crie bordas de limite

  createEdgeSprites();

  //faça com que o atacante rebata nas bordas de cima e de baixo
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);

  //cria o som de quando o atacante acerta os jogadores
  if (striker.isTouching(playerMallet)){
    playSound("assets/category_hits/retro_game_hit_block_4.mp3");
  }
  
  if (striker.isTouching(computerMallet)){
    playSound("assets/category_hits/retro_game_hit_block_4.mp3");
  }
  
  drawSprites();
}
function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
} 
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
