var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("assets/BG.jpg");
  car1_img = loadImage("assets/FORD.png");
  car2_img = loadImage("assets/JAG.png");
  track = loadImage("assets/TRY1.jpg");
  fuelImage = loadImage("assets/BoostPads.png");
  powerCoinImage = loadImage("assets/coin2.png");
  obstacle1Image = loadImage("assets/OB.png");
  obstacle2Image = loadImage("assets/OB.png");
  lifeImage = loadImage("assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
