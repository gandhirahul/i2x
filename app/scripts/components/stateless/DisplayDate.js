/**
 * DisplayDate Component - Displays date in human readable format
 */

var React = require('react');

var DisplayDate = React.createClass({

  getDefaultProps: function() {
    return {
      created:''
    };
  },

  render: function() {
    
    return (
      	<div>
     		Created: <strong>{this.beautifyDate(this.props.created)}</strong>
        </div>
    );

  },
  /**
   * Beautifies the date object 
   * @Props
   * @param {Object} date - date object
   */
  beautifyDate: function (date){
      return new Date(date).toDateString();
  }

});


module.exports = DisplayDate;


