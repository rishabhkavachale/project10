var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

//creating the player Sofia
var sofia =createSprite(20,20,20,20)
sofia.shapeColor="red";


//creating the maze walls (wall1 - wall2)
  var wall1 =createSprite(80,10,10,100)
  
  var wall2 =createSprite(86,49,100,10)
  var wall3 =createSprite(70,131,100,10)
  var wall4=createSprite(78,151,10,100)
  var wall5=createSprite(152,70,10,100)
  var wall6=createSprite(196,147,10,100)
  var wall7=createSprite(148,198,10,100)
  var wall8=createSprite(200,248,100,10)
  var wall9=createSprite(198,297,100,10)
  var wall10=createSprite(246,297,10,100)
  var wall11=createSprite(296,198,10,100)
  var wall12=createSprite(244,48,10,100)
  var wall13=createSprite(252,148,100,10)
  var wall14=createSprite(297,4,10,100)
  var wall15=createSprite(70,246,10,100)
  var wall16=createSprite(14,300,100,10)
  var wall17=createSprite(99,340,100,10)
  var wall18=createSprite(348,142,10,100)
  var wall19=createSprite(268,348,100,10)
  var wall20=createSprite(345,44,100,10)
  var wall21=createSprite(299,249,100,10)
  var wall22=createSprite(299,249,100,10)
      
//create cup
var cup= createSprite(370,360,10,100);
cup.shapeColor="yellow";
  
function draw() {
  //setting the background color to pink
  background("pink");
  
  if (keyDown("UP_ARROW")) {
       sofia.y=sofia.y-3;
       }   
      
      if (keyDown("DOWN_ARROW")) {
          sofia.y=sofia.y+3;
      }  
      
      if (keyDown("RIGHT_ARROW")) {
          sofia.x=sofia.x+3;
      }  
      if (keyDown("LEFT_ARROW")) {
          sofia.x=sofia.x-3;
      }
      createEdgeSprites();
      sofia.bounceOff(edges);
      sofia.bounceOff(wall1);
      sofia.bounceOff(wall2);
      
      
      
      
      
          
      if (sofia.collide(cup)) {
        background("white");
      }


drawSprites();

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
