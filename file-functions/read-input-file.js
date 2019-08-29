const fs = require('fs');

function readInputFile() {
  if (fs.existsSync('input-output-files/input.txt')) {
    return fs.readFileSync('input-output-files/input.txt', err => {
      if (err) throw err;
    }).toString().split('\n');
  } else {
    console.error('Input-file does not exist.');
    return null;
  }
}

module.exports = { readInputFile };
