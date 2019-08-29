const {writeCurrentCanvasStateToFile} = require('./write-current-canvas-state-to-file');
const {isValidCommand} = require('./check-command-validity');

function createLine(command, canvasArray) {
  if (isValidCommand(command, canvasArray) && (command[1] === command[3] || command[2] === command[4])) {
    let x1_coordinate = +command[1];
    let y1_coordinate = +command[2];
    let x2_coordinate = +command[3];
    let y2_coordinate = +command[4];
    let isHorizontalLine = false;

    if (y1_coordinate === y2_coordinate) {
      isHorizontalLine = true;
    }

    if (isHorizontalLine) {
      canvasArray = drawHorizontalLine(canvasArray, x1_coordinate, x2_coordinate, y1_coordinate);
    } else {
      canvasArray = drawVerticalLine(canvasArray, x1_coordinate, y1_coordinate, y2_coordinate);
    }
    console.log('Line created.');
    return writeCurrentCanvasStateToFile(canvasArray);
  } else {
    console.error(`Wrong coordinates data in "Create line" function.`);
    return null;
  }
}

function drawHorizontalLine(canvasArray, x1_coordinate, x2_coordinate, y1_coordinate) {
  for (let j = 1; j < canvasArray[y1_coordinate].length - 1; j++) {
    if (j <= x2_coordinate && j >= x1_coordinate) {
      canvasArray[y1_coordinate][j] = 'x';
    }
  }
  return canvasArray;
}

function drawVerticalLine(canvasArray, x1_coordinate, y1_coordinate, y2_coordinate) {
  for (let i = 1; i < canvasArray.length - 1; i++) {
    if (i <= y2_coordinate && i >= y1_coordinate) {
      canvasArray[i][x1_coordinate] = 'x';
    }
  }
  return canvasArray;
}

module.exports = { createLine };
