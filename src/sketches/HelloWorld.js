export default function sketch(p) {
  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(0)
  };

  p.draw = () => {
    p.rect(p.width/2-10, p.height/2-10, 20, 20)
  };
};
