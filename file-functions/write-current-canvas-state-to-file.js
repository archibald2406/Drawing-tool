const fs = require('fs');

function writeCurrentCanvasStateToFile(canvasArray) {
  let canvas = '';

  for (let i = 0; i < canvasArray.length; i++) {
    for (let j = 0; j < canvasArray[i].length; j++) {
      canvas += canvasArray[i][j];
    }

    if (i + 1 !== canvasArray.length) {
      canvas += '\n';
    }
  }
  fs.appendFileSync('input-output-files/output.txt', `\n${canvas}`);
  return canvas;
}

module.exports = { writeCurrentCanvasStateToFile };

