# karma-clear-terminal-reporter

> Reporter that clears the screen before each test run and also scroll history.

## Installation

Install by using following command
```bash
npm install karma-clear-terminal-reporter --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'clear-terminal']
  });
};
```

You can pass list of reporters as a CLI argument too:
```bash
karma start --reporters clear-terminal,dots
```
