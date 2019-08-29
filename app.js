const {readInputFile} = require('./file-functions/read-input-file');
const {executeCommandsOfInputFile} = require('./file-functions/execute-commands-of-input-file');

const commandsArray = readInputFile();

if (commandsArray) {
  for (let i = 0; i < commandsArray.length; i++) {
    commandsArray[i] = commandsArray[i].split(' ');
  }

  executeCommandsOfInputFile(commandsArray);
}
