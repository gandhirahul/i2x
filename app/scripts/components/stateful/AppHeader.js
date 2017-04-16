/**
 * AppHeader Component - Renders the headers for the app
 */

var React = require('react');
var cookieHelpers = require('../../utils/cookieHelpers');
var Header = require('../stateless/Header');

var AppHeader = React.createClass({
  
  render: function() {
    var isToken = cookieHelpers.getCookie('token') ? true : false;

    return (
    	<Header isToken={isToken} logoutCB={this.logout} />
    );

  },
  /**
   * Logouts the user 
   */
  logout: function(){
  	cookieHelpers.removeCookie('token');
  	this.props.history.push('/login');
  }

});


module.exports = AppHeader;

