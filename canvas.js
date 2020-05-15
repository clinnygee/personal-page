const canvas = document.querySelector('canvas');

const parent = canvas.parentElement;


canvas.width = parent.offsetWidth;
canvas.height = parent.offsetHeight;

const context = canvas.getContext('2d');

context.fillRect(100,100, 20,20, 'red');

// we can draw rectangles, lines, arcs, bezier curves, imgs, text

context.beginPath();

context.moveTo(50, 100);

context.lineTo(300, 100);

context.strokeStyle= 'rgba(146,20,12,0.5)'

context.stroke();

// circle
// just creates an outline
// begin path needs to be called again, otherwise the last path will draw to the start of this path
context.beginPath()
context.arc(50, canvas.height - 20, 50, 0, Math.PI * 2, false);

context.stroke();

console.log(canvas);

console.log(canvas.width);

console.log(canvas.height);

// 

const createBubbles = () => {
    // all bubbles must start at the bottom of the canvas
    // spread out, not necesarrily evenly,
    // bubbles should have a min radius, 
    // bubbles must have a min journey and a max journey

    createBubbles();
};

const bubble = (canvas) => {
    
}
