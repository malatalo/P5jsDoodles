export default function sketch(_) {

  let values = [];


  _.setup = () => {
    _.createCanvas(600, 600);
    [...Array(600)].map((x, i) => {
      values.push(randInt(1, _.height));
    });
  };

  _.draw = () => {
    console.log("draw bubblesort");
    _.background(0);
    _.stroke(210);
    values.map((val, i) => {
      _.line(i, _.height, i, _.height - val);
    });
    bsort();
  };

  const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const bsort = () => {
    let swapped = false;
    for (let i = 1; i < values.length; i++) {
      if (values[i - 1] > values[i]) {
        swapped = true;
        [values[i - 1], values[i]] = [values[i], values[i - 1]];
      }
    }

    if (!swapped) {
      _.noLoop();
    }
  }

};