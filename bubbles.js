// const canvas = document.querySelector('canvas');
// const parent = canvas.parentElement;
// canvas.width = parent.offsetWidth;
// canvas.height = parent.offsetHeight;
// const context = canvas.getContext('2d');

// const bubbles = [];
// const nOfBubbles=40;
// const bubbleSpeed = 2;

// const minBubbleWidth = 8;
// const maxBubbleWidth = 20;

// const bubbleColor = 'rgba(250,250,250,1)';
// const backgroundColor = '#ffcf99';

// const animateBubbles = function () {
//     // clear the canvas
//     context.clearRect(0,0, canvas.width, canvas.height);

//     // draw bubbles

//     context.beginPath();

//     for(let i = 0; i<bubbles.length; i++){
//         bubbles[i].position.x = Math.sin(bubbles[i].count/bubbles[i].distanceBetweenWaves) * 50 + bubbles[i].xOff;
//         bubbles[i].position.y = bubbles[i].count;
//         bubbles[i].render();
//         if(bubbles[i].count < 0 - bubbles[i].radius) {
//             bubbles[i].count = canvas.height + bubbles[i].yOffset;
//           } else {
//             bubbles[i].count -= bubbleSpeed;
//           }
//           window.requestAnimationFrame(animateBubbles);
//     }

// };
// window.requestAnimationFrame(animateBubbles);



// const bubble = function ()  {
//     this.position = {x: 0, y: 0};
//     this.radius = Math.floor(Math.random() * (maxBubbleWidth - minBubbleWidth)) + minBubbleWidth;
//     this.xOffset = Math.random() * canvas.width - this.radius;
//     this.yOffset = Math.random() * canvas.height;
//     this.distanceBetweenWaves = 50 + Math.random() * 40;
//     this.count = canvas.height + this.yOffset;
//     this.color = bubbleColor;
//     this.lines = [];
//     this.popping = false;
//     this.maxRotation = 360;
//     this.rotation = Math.floor(Math.random() * (this.maxRotation * (this.maxRotation * -1))) + (this.maxRotation * -1);
//     this.rotationDirection = 'forward';

//     this.render = function ()  {
//         if(this.rotationDirection === 'forward'){
//             if(this.rotation < this.maxRotation){
//                 this.rotation++;
//             } else {
//                 this.rotationDirection = 'backward';
//             }
//         } else {
//             if(this.rotation > this.maxRotation * -1){
//                 this.rotation --;
//             } else {
//                 this.rotationDirection = 'forward';
//             }
//         }
//         context.save();
//         context.translate(this.position.x, this.position.y);
//         context.rotate(this.rotation * Math.PI/180);

//         if(!this.popping){
//             // draws the small line on the bubble
//             context.beginPath();
//             context.strokeStyle = this.color;
//             context.lineWidth = 1;
//             context.arc(0,0, this.radius -3, 0, Math.PI * 1.5, true);
//             context.stroke()
//             // draws the bubble
//             context.beginPath();
//             context.arc(0,0, this.radius, 0, Math.PI*2, false);

            
//         }
//         context.restore();

//         // context.save();
//     }
// };

// for(let i = 0; i < nOfBubbles; i++){
//     let tempBubble = new bubble();
//     bubbles.push(tempBubble);
// }

// bubble();
// bubble()
// bubble()
// bubble()
// bubble()
// bubble()

var canvas = document.querySelector('canvas');
      canvas.width = canvas.parentElement.clientWidth - 20;
      canvas.height = canvas.parentElement.clientHeight - 20;
  var ctx = canvas.getContext('2d');
  var count = canvas.height;
  var bubbles = [];
  var bubbleCount = 30;
  var bubbleSpeed = 1;
  var popLines = 6;
  var popDistance = 40;
  var mouseOffset = {
    x: 0,
    y: 0
  }



  // --------------
  // Animation Loop
  // --------------

  function animate() {



    // ------------
    // Clear Canvas
    // ------------

    ctx.clearRect(0, 0, canvas.width, canvas.height);



    // ------------
    // Draw Bubbles
    // ------------

    ctx.beginPath();
    for (var i = 0; i < bubbles.length; i++) {
      // first num = distance between waves
      // second num = wave height
      // third num = move the center of the wave away from the edge
      bubbles[i].position.x = Math.sin(bubbles[i].count/bubbles[i].distanceBetweenWaves) * 50 + bubbles[i].xOff;
      bubbles[i].position.y = bubbles[i].count;
      bubbles[i].render();

      if(bubbles[i].count < 0 - bubbles[i].radius) {
        bubbles[i].count = canvas.height + bubbles[i].yOff;
      } else {
        bubbles[i].count -= bubbleSpeed;
      }
    }

    // ---------------
    // On Bubble Hover
    // ---------------

    for (var i = 0; i < bubbles.length; i++) {
      if(mouseOffset.x > bubbles[i].position.x - bubbles[i].radius && mouseOffset.x < bubbles[i].position.x + bubbles[i].radius) {
        if(mouseOffset.y > bubbles[i].position.y - bubbles[i].radius && mouseOffset.y < bubbles[i].position.y + bubbles[i].radius) {
          for (var a = 0; a < bubbles[i].lines.length; a++) {
            popDistance = bubbles[i].radius * 0.5;
            bubbles[i].lines[a].popping = true;
            bubbles[i].popping = true;
          }
        }
      }
    }

    window.requestAnimationFrame(animate);
  }

  window.requestAnimationFrame(animate);



  // ------------------
  // Bubble Constructor
  // ------------------

  var createBubble = function() {
    this.position = {x: 0, y: 0};
    this.radius = 8 + Math.random() * 6;
    this.xOff = Math.random() * canvas.width - this.radius;
    this.yOff = Math.random() * canvas.height;
    this.distanceBetweenWaves = 50 + Math.random() * 40;
    this.count = canvas.height + this.yOff;
    this.color = 'rgb(250,250,250)';
    this.lines = [];
    this.popping = false;
    this.maxRotation = 85;
    this.rotation = Math.floor(Math.random() * (this.maxRotation - (this.maxRotation * -1))) + (this.maxRotation * -1);
    this.rotationDirection = 'forward';

    // Populate Lines
    for (var i = 0; i < popLines; i++) {
      var tempLine = new createLine();
          tempLine.bubble = this;
          tempLine.index = i;

      this.lines.push(tempLine);
    }

    this.resetPosition = function() {
      this.position = {x: 0, y: 0};
      this.radius = 8 + Math.random() * 6;
      this.xOff = Math.random() * canvas.width - this.radius;
      this.yOff = Math.random() * canvas.height;
      this.distanceBetweenWaves = 50 + Math.random() * 40;
      this.count = canvas.height + this.yOff;
      this.popping = false;
    }

    // Render the circles
    this.render = function() {
      if(this.rotationDirection === 'forward') {
        if(this.rotation < this.maxRotation) {
          this.rotation++;
        } else {
          this.rotationDirection = 'backward';
        }
      } else {
        if(this.rotation > this.maxRotation * -1) {
          this.rotation--;
        } else {
          this.rotationDirection = 'forward';
        }
      }

      ctx.save();
      ctx.translate(this.position.x, this.position.y);
      ctx.rotate(this.rotation*Math.PI/180);

      if(!this.popping) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(250,250,250)';
        ctx.lineWidth = 1;
        ctx.arc(0, 0, this.radius - 3, 0, Math.PI*1.5, true);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI*2, false);
        ctx.stroke();
      }
      
      ctx.restore();

      // Draw the lines
      for (var a = 0; a < this.lines.length; a++) {
        if(this.lines[a].popping) {
          if(this.lines[a].lineLength < popDistance && !this.lines[a].inversePop) {
            this.lines[a].popDistance += 0.06;
          } else {
            if(this.lines[a].popDistance >= 0) {
              this.lines[a].inversePop = true;
              this.lines[a].popDistanceReturn += 1;
              this.lines[a].popDistance -= 0.03;
            } else {
              this.lines[a].resetValues();
              this.resetPosition();
            }
          }

          this.lines[a].updateValues();
          this.lines[a].render();
        }
      }
    }
  }



  // ----------------
  // Populate Bubbles
  // ----------------

  for (var i = 0; i < bubbleCount; i++) {
    var tempBubble = new createBubble();

    bubbles.push(tempBubble);
  }



  // ----------------
  // Line Constructor
  // ----------------

  function createLine() {
    this.lineLength = 0;
    this.popDistance = 0;
    this.popDistanceReturn = 0;
    this.inversePop = false; // When the lines reach full length they need to shrink into the end position
    this.popping = false;

    this.resetValues = function() {
      this.lineLength = 0;
      this.popDistance = 0;
      this.popDistanceReturn = 0;
      this.inversePop = false;
      this.popping = false;

      this.updateValues();
    }

    this.updateValues = function() {
      this.x = this.bubble.position.x + (this.bubble.radius + this.popDistanceReturn) * Math.cos(2 * Math.PI * this.index / this.bubble.lines.length);
      this.y = this.bubble.position.y + (this.bubble.radius + this.popDistanceReturn) * Math.sin(2 * Math.PI * this.index / this.bubble.lines.length);
      this.lineLength = this.bubble.radius * this.popDistance;
      this.endX = this.lineLength;
      this.endY = this.lineLength;
    }

    this.render = function() {
      this.updateValues();

      ctx.beginPath();
      ctx.strokeStyle = 'rgb(250,250,250)';
      ctx.lineWidth = 2;
      ctx.moveTo(this.x, this.y);
      if(this.x < this.bubble.position.x) {
        this.endX = this.lineLength * -1;
      }
      if(this.y < this.bubble.position.y) {
        this.endY = this.lineLength * -1;
      }
      if(this.y === this.bubble.position.y) {
        this.endY = 0;
      }
      if(this.x === this.bubble.position.x) {
        this.endX = 0;
      }
      ctx.lineTo(this.x + this.endX, this.y + this.endY);
      ctx.stroke();
    };
  }



  // ---------------
  // Event Listeners
  // ---------------

  canvas.addEventListener('mousemove', mouseMove);

  function mouseMove(e) {
    mouseOffset.x = e.offsetX;
    mouseOffset.y = e.offsetY;
  }

  window.addEventListener('resize', function() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
  });


  // ---------------
  // Event Listeners
  // ---------------
