export default function sketch(_) {

  _.setup = () => {
    _.createCanvas(600, 600);
    _.apple = new Apple(_);
    _.snake = new Snake(_);
    _.frameRate(4);
  };

  _.draw = () => {
    _.background(60);
    _.snake.move();
    _.snake.draw();
    _.appleHitReg();
    _.snakeHitReg();
    _.apple.draw();
  };

  _.appleHitReg = () => {
    if (_.snake.x === _.apple.x && _.snake.y === _.apple.y) {
      _.snake.snakeLength++;

      while (true) {
        let pos = {
          x: Math.floor(Math.random() * 30) * 20,
          y: Math.floor(Math.random() * 30) * 20
        };
        if (_.isFreeSpot(pos)) {
          _.apple.newPosition(pos);
          break;
        }
      }

    }
  }

  _.snakeHitReg = () => {
    if (_.dieded()) {
      _.noLoop();
      _.textStyle(_.BOLD);
      _.textSize(100);
      _.fill(50);
      _.text("DED", _.width / 4 - 3, _.height / 2 - 3);
      _.fill(255)
      _.text("DED", _.width / 4, _.height / 2);
      _.fill(50);
      _.text("DED", _.width / 4 + 3, _.height / 2 + 3);
      _.fill(255)
      _.text("DED", _.width / 4 + 6, _.height / 2 + 6);
    }
  }

  _.isFreeSpot = (pos) => {
    if (_.snake.x === pos.x && _.snake.y === pos.y) {
      return false;
    }
    return _.snake.snakeBody.filter(b => {
      return b.x === pos.x && b.y === pos.y
    }).length === 0;
  }

  _.dieded = () => {
    for (let i = 2; i < _.snake.snakeBody.length; i++) {
      if (_.snake.snakeBody[i].x === _.snake.x && _.snake.snakeBody[i].y === _.snake.y) {
        return true;
      }
    }
    return false;
  }


};

function Snake(_) {
  this.snakeSize = 20;
  this.snakeLength = 3;
  this.snakeBody = [{
    x: 80,
    y: 100
  }, {
    x: 60,
    y: 100
  }, {
    x: 40,
    y: 100
  }];
  this.x = 100;
  this.y = 100;
  this.xs = 20;
  this.ys = 0;
  this.lastKey = _.RIGHT_ARROW;
  this.hasMoved = true;

  _.keyPressed = () => {
    if (this.hasMoved) {
      if (_.keyCode === _.UP_ARROW && this.lastKey !== _.DOWN_ARROW) {
        this.lastKey = _.UP_ARROW;
        this.resetSpeed();
        this.ys = -20;
      } else if (_.keyCode === _.DOWN_ARROW && this.lastKey !== _.UP_ARROW) {
        this.lastKey = _.DOWN_ARROW;
        this.resetSpeed();
        this.ys = +20;
      } else if (_.keyCode === _.RIGHT_ARROW && this.lastKey !== _.LEFT_ARROW) {
        this.lastKey = _.RIGHT_ARROW;
        this.resetSpeed();
        this.xs = +20;
      } else if (_.keyCode === _.LEFT_ARROW && this.lastKey !== _.RIGHT_ARROW) {
        this.lastKey = _.LEFT_ARROW;
        this.resetSpeed();
        this.xs = -20;
      }
    }
  }

  this.resetSpeed = () => {
    this.xs = 0;
    this.ys = 0;
    this.hasMoved = false;
  }

  this.move = () => {
    this.hasMoved = true;
    this.snakeBody.unshift({
      x: this.x,
      y: this.y
    });
    if (this.snakeBody.length > this.snakeLength) {
      this.snakeBody.pop();
    }
    this.x += this.xs;
    this.y += this.ys;
    if (this.x > _.width - this.snakeSize) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = _.width - this.snakeSize
    } else if (this.y > _.height - this.snakeSize) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = _.height - this.snakeSize;
    }
  }

  this.draw = () => {
    _.fill(200);
    this.snakeBody.forEach(b => _.rect(b.x, b.y, this.snakeSize, this.snakeSize));
    _.fill(255);
    _.rect(this.x, this.y, this.snakeSize, this.snakeSize);
  }
}

function Apple(_) {
  this.appleSize = 16;
  this.x = Math.floor(Math.random() * 30) * 20;
  this.y = Math.floor(Math.random() * 30) * 20;

  this.newPosition = (pos) => {
    this.x = pos.x;
    this.y = pos.y;
  }

  this.draw = () => {
    _.fill(0, 255, 0);
    // (snakeSize - appleSize) / 2 = 2
    _.rect(this.x + 2, this.y + 2, this.appleSize, this.appleSize);
  }
}
