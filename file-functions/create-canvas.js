const fs = require('fs');

function createCanvas(command) {
  if (fs.existsSync('input-output-files/output.txt')) {
    fs.unlinkSync('input-output-files/output.txt');
  }

  if (command[1].match(/^[1-9]+[0-9]*$/) && command[2].match(/^[1-9]+[0-9]*$/)) {
    let canvas = '--';
    let canvasWidth = command[1];
    let canvasHeight = command[2];

    canvas = createTopOfCanvas(canvas, canvasWidth);
    canvas = createBodyOfCanvas(canvas, canvasWidth, canvasHeight);
    canvas = createBottomOfCanvas(canvas, canvasWidth, canvasHeight);

    fs.writeFileSync('input-output-files/output.txt', canvas);
    console.log('Canvas created.');
    return canvas;
  } else {
    console.error('Wrong width or height data of canvas.');
    return null;
  }
}

function createTopOfCanvas(canvas, canvasWidth) {
  for (let i = 0; i < canvasWidth; i++) {
    canvas += '-';
  }
  return canvas += '\n';
}

function createBodyOfCanvas(canvas, canvasWidth, canvasHeight) {
  for (let i = 0; i < canvasHeight; i++) {
    canvas += '|';
    for (let j = 0; j < canvasWidth; j++) {
      canvas += ' ';
    }
    canvas += '|\n';
  }
  return canvas;
}

function createBottomOfCanvas(canvas, canvasWidth) {
  for (let i = 0; i < canvasWidth; i++) {
    canvas += '-';
  }
  return canvas += '--';
}

module.exports = { createCanvas };
