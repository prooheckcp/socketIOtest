let socket = io();

function setup() {
    createCanvas(400, 400);
    background(0);

    socket.on('test2', data =>{

      fill(255);
      circle(data.x, data.y, 20)

    })

  }
 
  
function mouseDragged(){


  socket.emit('test', {x: mouseX, y: mouseY});

}

function draw() {
  
}