const canvas = document.getElementById("circle");
const ctx = canvas.getContext("2d");

const CTA = document.getElementById('cta');

const window = document.getElementById('page');

//dimentions of the canvas.
const width = 600;
const height = 600;


//method that check if the steps are odd to have an effect of 1 big and 1 small.
const isOdd = (num) => {
  return num % 2;
};



class Round {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();

    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);

    ctx.restore();
  }

  stroke(ctx, index) {
      ctx.strokeStyle = "white";
    if (isOdd(index) == 1) {
      ctx.lineWidth = 2;
    } else {
      ctx.lineWidth = 5;
    }

    ctx.stroke();
  }

  strokeBlack(ctx) {
    ctx.fillStyle = "black";
    ctx.fill();
  }

  clear(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

//number of round that will appear
const steps = 15;




// for(let i = 0; i <= steps; i++) {
let x = 0;

const id = setInterval(() => {
  const round = new Round(width * 0.5, height * 0.5, x * 20);
  round.draw(ctx);
  round.stroke(ctx, x);
  // round.clear(ctx);

  x += 1;

  let y = 0;

  if (x === steps) {
    clearInterval(id);

    const blacked = setInterval(() => {
      const roundBlack = new Round(width * 0.5, height * 0.5, y * 20);
      roundBlack.draw(ctx);
      roundBlack.strokeBlack(ctx);
      y += 1;

      if (y == steps) {
        clearInterval(blacked);
        canvas.classList.add('red');

        setTimeout(() => {
          CTA.classList.add('visible')
          
        }, 500);

      }
    }, 50);
  }
}, 50);

// }

console.log(canvas.style);


window.addEventListener('mousemove', (e) => {

  console.log(e);
  // CTA.innerText = e.screenX / 10
  canvas.style.transform = `rotate(${e.screenX / 10}deg)`
})

