export default function sketch(_) {
  _.setup = () => {
    _.createCanvas(200, 200);
    _.background(0)
  };

  _.draw = () => {
    _.rect(_.width/2-10, _.height/2-10, 20, 20)
    _.noLoop();
  };
};
