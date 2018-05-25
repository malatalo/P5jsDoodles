export default function sketch(_) {
  _.setup = () => {
    _.createCanvas(200, 200);
    _.background(255, 105, 180)
  };

  _.draw = () => {
    _.rect(_.width / 2 - 10, _.height / 2 - 10, 20, 20)
    _.rect(_.width / 4 - 10, _.height / 1.3 - 10, 20, 20)
    _.rect(_.width / 4 - 10, _.height / 4 - 10, 20, 20)
    _.rect(_.width / 1.3 - 10, _.height / 4 - 10, 20, 20)
    _.rect(_.width / 1.3 - 10, _.height / 1.3 - 10, 20, 20)
    _.noLoop();
  };
};
