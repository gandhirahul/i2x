/**
 * RatingSection Component
 * @Props
 * @param {number} rating - Rating of the audio
 */

var React = require('react');

var RatingSection = React.createClass({
  getDefaultProps: function() {
    return {
      rating: 1
    };
  },
  render: function() {

    var Rating = this.computeRating();

    return (
      <div className="rating-box mb5">
        <div className="rating">
          {Rating}
          </div>  
      </div>
    );

  },
  /**
   * Computes the Rating HTML 
   */
  computeRating:function(){
    
    var rating = [];
    for(var i =0; i<5; i++){
      var classVar = i<this.props.rating ? 'active' : '';
      rating.push(<span className={classVar} key={i}>☆</span>);
    }
    return rating;
  }

});


module.exports = RatingSection;

