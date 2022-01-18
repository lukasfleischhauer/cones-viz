function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('steelblue');
  
  noStroke();
  
  let x
  let y
  

  x = 200
  y = 200
  
  cono(200, 80,       x, y, 'green');
  cono(200, 400 - 80, x, y, 'orange');
  cono(80, 200,       x, y, 'blue');
  cono(400 - 80, 200, x, y, 'red');
}


function cono(x1, y1, x2, y2, col) {
  for (let i = 0; i < 20; i++) {
    let a = lerpColor(color('white'), color(col), sin(i) * 0.5 + 0.5);
    fill(a);
    let x = lerp(x1, x2, i / 20);
    let y = lerp(y1, y2, i / 20);
    circle(x, y, 100 - i * 5);
  }
}
