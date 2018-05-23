const HelloWorld = require('./HelloWorld').default;
const HelloWorldTest = require('./HelloWorldTest').default;

const sketches = {
  "Hello World 5": HelloWorldTest,
  "Hello World": HelloWorld,
}

module.exports = sketches;
