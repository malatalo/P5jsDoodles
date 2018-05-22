const HelloWorld = require('./HelloWorld').default;
const HelloWorldTest = require('./HelloWorldTest').default;

const sketches = {
  "HelloWorldTest": HelloWorldTest,
  "HelloWorld": HelloWorld,
}

module.exports = sketches;
