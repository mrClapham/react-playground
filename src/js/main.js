// using React v0.12.2


var APP                 = require('./components/app');
var GenericButton       = require('./components/GenericButton');
var DashBoard           = require('./components/DashBoard');
var MainApp             = require('./components/MainApp');
var Twitter             = require('./components/twitter/twitter-component');

var React               = require('react');
var Flux                = require('flux');


React.render(
    <APP  />,
    document.getElementById("main")
);

React.render(
    <GenericButton  />,
    document.getElementById("sub")
);

React.render(
    <DashBoard  />,
    document.getElementById("dash")
);

React.render(
    <MainApp  />,
    document.getElementById("main-app")
);


React.render(
    <Twitter  />,
    document.getElementById("twitter-app")
);




