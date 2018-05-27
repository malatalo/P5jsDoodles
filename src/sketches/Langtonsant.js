export default function sketch(_) {
  // canvasSize % pixelSize == 0!
  const canvasSize = 600;
  const pixelSize = 10;
  const gridSize = canvasSize / pixelSize;
  let grid = [];
  // ant coordinates and starting position
  let antX = Math.floor(gridSize / 2);
  let antY = Math.floor(gridSize / 2);
  const directions = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
  };
  let heading = 0;
  const steps = 5;

  _.setup = () => {
    _.createCanvas(canvasSize, canvasSize);
    //fill grid-array with arrays of falses (aka init grid)
    for (let x = 0; x < gridSize; x++) {
      grid[x] = [];
      for (let y = 0; y < gridSize; y++) {
        grid[x][y] = false;
      }
    }
  };

  _.draw = () => {
    for (let i = 0; i < steps; i++) {
      _.background(255);
      _.text("may be heavy to run", 0, 10);
      _.fill(0);

      if (grid[antX][antY]) {
        grid[antX][antY] = false;
        turnLeft();
      } else {
        grid[antX][antY] = true;
        turnRight();
      }
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          if (grid[x][y]) {
            _.rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
          }
        }
      }
      move();
      if (antX <= 0 || antX > (gridSize - 1)  || antY < 0 || antY > (gridSize - 1)) {
        console.log("noloop");
        _.noLoop()
      };
    }
  };

  const move = () => {
    if (heading === directions.UP) {
      antY--;
    } else if (heading === directions.DOWN) {
      antY++;
    } else if (heading === directions.RIGHT) {
      antX++;
    } else if (heading === directions.LEFT) {
      antX--;
    }
  }

  const turnRight = () => {
    heading++;
    if (heading > directions.LEFT) {
      heading = directions.UP;
    }
  }

  const turnLeft = () => {
    heading--;
    if (heading < directions.UP) {
      heading = directions.LEFT;
    }
  }

};
