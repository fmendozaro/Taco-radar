require('./assets/css/index.css');
require('./assets/css/pacman.css');

var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/App');

$('.parallax').parallax();

ReactDom.render(
    <App />,
    document.getElementById('app')
);