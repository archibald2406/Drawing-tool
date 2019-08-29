const {writeCurrentCanvasStateToFile} = require('./write-current-canvas-state-to-file');
const {isValidCommand} = require('./check-command-validity');

function createRectangle(command, canvasArray) {
  if (isValidCommand(command, canvasArray)) {
    let x1_coordinate = +command[1];
    let y1_coordinate = +command[2];
    let x2_coordinate = +command[3];
    let y2_coordinate = +command[4];

    canvasArray = drawRectangle(canvasArray, x1_coordinate, x2_coordinate, y1_coordinate, y2_coordinate);
    console.log('Rectangle created.');
    return writeCurrentCanvasStateToFile(canvasArray);
  } else {
    console.error(`Wrong coordinates data in "Create rectangle" function.`);
    return null;
  }
}

function drawRectangle(canvasArray, x1_coordinate, x2_coordinate, y1_coordinate, y2_coordinate) {
  for (let i = y1_coordinate; i < y2_coordinate + 1; i++) {
    for (let j = 1; j < canvasArray[i].length - 1; j++) {
      if ((i < y2_coordinate && i > y1_coordinate && (j === x1_coordinate || j === x2_coordinate))
        || (j <= x2_coordinate && j >= x1_coordinate && (i === y1_coordinate || i === y2_coordinate))) {
        canvasArray[i][j] = 'x';
      }
    }
  }
  return canvasArray;
}

module.exports = { createRectangle };
