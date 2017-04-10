var React = require("react");

var Header = React.createClass({
  render: function() {
    return (
      
      <div className="container">

        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <img id="logo" src="../assets/img/logo.png" />
                <a className="navbar-brand" href="index.html"><h1>m<span style={{color: '#efa656'}}>i</span>grate</h1></a>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><i className="fa fa-pencil" id="btn-login" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-bell" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </nav>

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Header;
