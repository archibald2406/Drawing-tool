const fs = require('fs');

function executeDrawingCommand(command, canvas, canvasIsCreated, drawingCommand) {
  if (canvasIsCreated) {
    let canvasArray = parseCanvasToArray(canvas);

    return drawingCommand(command, canvasArray);
  } else {
    console.error('You can only draw if a canvas has been created.');
    return null;
  }
}

function parseCanvasToArray(canvas) {
  let canvasArray = canvas.split('\n');

  for (let i = 0; i < canvasArray.length; i++) {
    canvasArray[i] = canvasArray[i].split('');
  }
  return canvasArray;
}

module.exports = { executeDrawingCommand };
