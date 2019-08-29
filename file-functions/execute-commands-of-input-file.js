const {createCanvas} = require('./create-canvas');
const {createLine} = require('./create-line');
const {createRectangle} = require('./create-rectangle');
const {bucketFill} = require('./bucket-fill');
const {executeDrawingCommand} = require('./execute-drawing-command');

function executeCommandsOfInputFile(commandsArray) {
  let currentCanvasState = '';
  let canvasIsCreated = false;

  for (const command of commandsArray) {
    switch (command[0]) {
      case 'C':
        currentCanvasState = createCanvas(command);
        if (currentCanvasState) canvasIsCreated = true;
        break;
      case 'L':
        currentCanvasState = executeDrawingCommand(command, currentCanvasState, canvasIsCreated, createLine);
        if (!currentCanvasState) return;
        break;
      case 'R':
        currentCanvasState = executeDrawingCommand(command, currentCanvasState, canvasIsCreated, createRectangle);
        if (!currentCanvasState) return;
        break;
      case 'B':
        currentCanvasState = executeDrawingCommand(command, currentCanvasState, canvasIsCreated, bucketFill);
        if (!currentCanvasState) return;
        break;
      default:
        console.error('Input-file contains wrong commands or it is empty.');
        break;
    }
  }
}

module.exports = { executeCommandsOfInputFile };
