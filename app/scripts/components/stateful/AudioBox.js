/**
 * AudioBox Component
 * @Props
 * @param {object[]} data - state object of audio card
 */

var React = require('react');

var RatingSection = require('../stateless/RatingSection');
var PlayAudio = require('../stateless/PlayAudio');
var DisplayDate = require('../stateless/DisplayDate');
var Duration = require('../stateless/Duration');

var AudioBox = React.createClass({
 
  getDefaultProps: function() {
    return {
      results: []
    };
  },

  render: function() {
    var props = this.props,
        results = props.results;
    
    if(!results || !results.length){
      return null;
    }

    return (
      <div className="audio-section">
      {
        results.map(function(elm,index){
              
          return <div className="audio-box" key={index}>
                  <div className="row">
                    <div className="col-xs-12">

                      <div className="final-script mb5">
                        {elm.final_script}
                      </div>
                      <RatingSection rating={elm.rating} />
                      <Duration text="Audio Duration: " duration={elm.duration} />
                      <PlayAudio url={elm.url} />
                      <DisplayDate created={elm.created} />

                    </div>
                  </div>
                </div>
          })
      }
      </div>
    );
  }
  
});

module.exports = AudioBox;
