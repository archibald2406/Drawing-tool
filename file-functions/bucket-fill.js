const {writeCurrentCanvasStateToFile} = require('./write-current-canvas-state-to-file');

function bucketFill(command, canvasArray) {
  if (command[1].match(/^[1-9]+[0-9]*$/) && command[2].match(/^[1-9]+[0-9]*$/)
    && command[1] <= canvasArray[0].length - 2 && command[2] <= canvasArray.length - 2
    && command[3] && command[3].match(/^.$/)) {
    let x_coordinate = +command[1];
    let y_coordinate = +command[2];
    let colour = command[3];

    if (canvasArray[y_coordinate][x_coordinate] === 'x') {
      console.error('Point coordinates must be in an empty place of the canvas.');
      return null;
    }

    canvasArray[y_coordinate][x_coordinate] = colour;

    fillArea(canvasArray, x_coordinate, y_coordinate, colour);
    console.log(`Selected area filled by colour '${colour}'.`);
    return writeCurrentCanvasStateToFile(canvasArray);
  } else {
    console.error(`Wrong coordinates data or "colour" in "Bucket fill" function.`);
    return null;
  }
}

function fillArea(canvasArray, x_coordinate, y_coordinate, colour) {
  if (canvasArray[y_coordinate + 1][x_coordinate] !== 'x'
    && canvasArray[y_coordinate + 1][x_coordinate] !== colour
    && canvasArray[y_coordinate + 1][x_coordinate] !== '-') {
    canvasArray[y_coordinate + 1][x_coordinate] = colour;
    fillArea(canvasArray, x_coordinate, y_coordinate + 1, colour);
  }
  if (canvasArray[y_coordinate][x_coordinate + 1] !== 'x'
    && canvasArray[y_coordinate][x_coordinate + 1] !== colour
    && canvasArray[y_coordinate][x_coordinate + 1] !== '|') {
    canvasArray[y_coordinate][x_coordinate + 1] = colour;
    fillArea(canvasArray, x_coordinate + 1, y_coordinate, colour);
  }
  if (canvasArray[y_coordinate - 1][x_coordinate] !== 'x'
    && canvasArray[y_coordinate - 1][x_coordinate] !== colour
    && canvasArray[y_coordinate - 1][x_coordinate] !== '-') {
    canvasArray[y_coordinate - 1][x_coordinate] = colour;
    fillArea(canvasArray, x_coordinate, y_coordinate - 1, colour);
  }
  if (canvasArray[y_coordinate][x_coordinate - 1] !== 'x'
    && canvasArray[y_coordinate][x_coordinate - 1] !== colour
    && canvasArray[y_coordinate][x_coordinate - 1] !== '|') {
    canvasArray[y_coordinate][x_coordinate - 1] = colour;
    fillArea(canvasArray, x_coordinate - 1, y_coordinate, colour);
  }
  return null;
}

module.exports = { bucketFill };
