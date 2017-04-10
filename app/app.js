var React = require("react");
var ReactDOM = require("react-dom");


var Header = require("./components/Header");
var Body = require("./components/Body");
var Mapp = require("./components/Mapp");
var Footer = require("./components/Footer");

ReactDOM.render(
  <div className="main-container">
    <Header />
    <Body />
    <Mapp />
    <Footer />
  </div>
  , document.getElementById("app")
);