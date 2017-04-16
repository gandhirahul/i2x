/**
 * Index Component - Bootstraps the application and manaages routing
 */
var React = window.React = require('react');
var ReactDOM = require("react-dom");
var mountNode = document.getElementById("app");

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history').createBrowserHistory;
var history = createBrowserHistory();

var App = require("./components/App");
var Root = require("./components/Root");
var Login = require("./pages/Login");
var List = require("./pages/List");

var Index = React.createClass({

	  render: function() {

		return	<Router history={history}>
				  <Root>
				   	<Route path="/" component={App} />
				    <Route path="/login" component={Login} />
				    <Route path="/list" component={List} />
				  </Root>
				</Router>
	  }
});
ReactDOM.render(<Index />, mountNode);
