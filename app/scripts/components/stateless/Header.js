/**
 * Header Component - Renders the headers for the app
 * @Props
 * @param {boolean} isToken - checks if token present or not
 * @param {requestCallback} logoutCB - logout user callback
 */
var React = require('react');

var Header = React.createClass({
  
  getDefaultProps: function() {
    return {
      isToken: false,
      logoutCB: function(){}
    };
  },
  render: function() {

    return (
      <div className="Header">
        <nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">i2x</a>
		    </div>
		    {
			this.props.isToken && 		    	
	    	<ul className="nav navbar-nav  navbar-right">
		      <li className="logout" onClick={this.props.logoutCB}><span >Log out</span></li>
		    </ul>
    		}
		  </div>
		</nav>
      </div>
    );

  }

});


module.exports = Header;

