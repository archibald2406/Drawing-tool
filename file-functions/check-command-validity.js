function isValidCommand(command, canvasArray) {
  return command[1].match(/^[1-9]+[0-9]*$/) && command[2].match(/^[1-9]+[0-9]*$/)
    && command[3].match(/^[1-9]+[0-9]*$/) && command[4].match(/^[1-9]+[0-9]*$/)
    && (command[1] <= canvasArray[0].length - 2 && command[3] <= canvasArray[0].length - 2)
    && (command[2] <= canvasArray.length - 2 && command[4] <= canvasArray.length - 2);
}

module.exports = { isValidCommand };
