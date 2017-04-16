/**
 * Root Component - Renders the children
 */

var React = require('react');

var Root = React.createClass({
  render: function() {

    return <div>{this.props.children}</div>

  }
});

module.exports = Root;
