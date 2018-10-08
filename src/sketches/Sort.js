export default function sketch(_) {

  const sortSize = 600;

  let values = [];
  let alg = "selection";
  let stopped = false;

  let selectionSlot = 0;
  let selection = 0;

  _.setup = () => {
    _.createCanvas(sortSize, 600);
    values = [...Array(sortSize)].map(x => x = randInt(1, sortSize));
    _.frameRate(30);
  };

  _.draw = () => {
    console.log("sortdraw")
    _.background(0);
    _.stroke(210);
    values.map((val, i) => _.line(i, _.height, i, _.height - val));
    sortFuncs[alg]();
  };

  _.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (props.status) {
      if (props.status === "stop") {
        console.log("stop");
        _.noLoop();
        stopped = true;
        return;
      } else if (props.status === "resume") {
        console.log("resume");

        _.loop();
        stopped = false;
        return;
      }
    }
    if (props.sortAlg) {
      resetValues();
      alg = (props.sortAlg);
      values.map((x, i) => values[i] = randInt(1, _.height));
      if (!stopped) {
        _.noLoop();
        stopped = true;
      };
      try {
        _.background(0);
        _.stroke(210);
        values.map((val, i) => _.line(i, _.height, i, _.height - val));
      } catch (e) {
        // :)
      }
      window.setTimeout(() => {
        _.loop();
        stopped = false
      }, 1500);
    }
  };

  const randInt = (min, sortSize) => Math.floor(Math.random() * (sortSize - min + 1)) + min;

  const resetValues = () => {
    selection = 0;
    selectionSlot = 0;
  }

  let sortFuncs = {

    bubble: () => {
      let swapped = false;
      for (let i = 1; i < values.length; i++) {
        if (values[i - 1] > values[i]) {
          swapped = true;
          [values[i - 1], values[i]] = [values[i], values[i - 1]];
        }
      }
      if (!swapped) {
        stopped = true;
        _.noLoop();
      }
    },

    selection: () => {
      selection = selectionSlot;
      for (let i = selectionSlot + 1; i < sortSize; i++) {
        if (values[i] < values[selection]) {
          selection = i
        };
      }
      [values[selectionSlot], values[selection]] = [values[selection], values[selectionSlot]]
      selectionSlot++;
      if (selectionSlot === sortSize) {
        stopped = true;
        _.noLoop();
      }
    },

    bogo: () => {
      let sorted = true;
      values = [...Array(sortSize)].map(x => x = randInt(1, sortSize));
      for (let i = 1; i < sortSize; i++) {
        if (values[i]<values[i-1]) {
          sorted = false;
          break;
        }
      }
      if(sorted){
        stopped = true;
        _.noLoop();
      }
    },

  }

};