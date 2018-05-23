export default function sketch(_) {

  _.setup = () => {
    _.createCanvas(800, 800);
    _.snek = new Snake(_);
  };

  _.draw = () => {
    _.background(60)
    _.snek.move();
    _.snek.draw();
  };

  _.keyPressed=()=>{
    if(_.keyCode === _.UP_ARROW){
      console.log("up");
    } else {
      console.log("nope");
    }
  }

};

function Snake(_) {
  this.x = 0;
  this.y = 0;
  this.xs = 1;
  this.ys = 0;

  this.move = () => {
    this.x += this.xs;
    this.y += this.ys;
  }

  this.draw = () => {
    _.fill(255);
    _.rect(this.x, this.y, 10, 10);
  }
}
