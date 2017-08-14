require('./index.css');
require('./utils/pacman.css');

var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/App');

$('.parallax').parallax();

ReactDom.render(
    <App />,
    document.getElementById('app')
);