export default function sketch(p) {
  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(255, 105, 180)
  };

  p.draw = () => {
    p.rect(p.width / 2 - 10, p.height / 2 - 10, 20, 20)
    p.rect(p.width / 4 - 10, p.height / 1.3 - 10, 20, 20)
    p.rect(p.width / 4 - 10, p.height / 4 - 10, 20, 20)
    p.rect(p.width / 1.3 - 10, p.height / 4 - 10, 20, 20)
    p.rect(p.width / 1.3 - 10, p.height / 1.3 - 10, 20, 20)
  };
};
