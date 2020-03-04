const plugins = require('postcss-plugins');

//  Sample usage: get the name of every plugin in the dataset
const namesOfEveryPlugin = plugins.map(plugin => plugin.name);

console.log(namesOfEveryPlugin)