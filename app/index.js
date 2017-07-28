require('./index.css');
require('./utils/pacman.css');
require('./utils/gallery-materialize.min.opt.css');

var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/App');

ReactDom.render(
    <App />,
    document.getElementById('app')
);