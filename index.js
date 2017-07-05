function ClearTerminalReporter() {
  this.onRunStart = function() {
    console.log("\033c");
  };
}

module.exports = {
  'reporter:clear-terminal': ['type', ClearTerminalReporter]
};
