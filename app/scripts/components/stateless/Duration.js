/**
 * Duration Component
 * @Props
 * @param {string} text - Text to be shown before duration
 * @param {number} duration - duration of audio
 */

var React = require('react');

var Duration = React.createClass({
  getDefaultProps: function() {
    return {
      text: 'Audio Duration: ',
      duration: 60
    };
  },
  render: function() {

    return (
      <div>
        {this.props.text}
        {this.computeMinutes(this.props.duration)}
      </div>
    );

  },
  /**
   * Computes the minutes from seconds
   * @Props
   * @param {number} sec - Seconds
   */
  computeMinutes: function (sec){

    var minutes = Math.floor(sec / 60) + 'm';
    var seconds = sec - minutes * 60;

    return minutes + (seconds ? seconds + 's' : '');
  }

});


module.exports = Duration;

