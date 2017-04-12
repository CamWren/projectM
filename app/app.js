var React = require("react");
var ReactDOM = require("react-dom");


var Header = require("./components/Header");
var Body = require("./components/Body");

ReactDOM.render(
  <div className="main-container">
    <Header />
    <Body />
  </div>
  , document.getElementById("app")
);