/**
 * List Component - Renders the list view of audio meta data
 */
var React = require('react');
var AppConstants = require('../constants/AppConstants');
var apiCall = require('../utils/apiCall');
var cookieHelpers = require('../utils/cookieHelpers');
var AudioBox = require('../components/stateful/AudioBox');
var Loader = require('../components/stateless/Loader');

var List = React.createClass({
  getInitialState: function() {
    return {
      results:[],
      showLoader:true
    };
  },
  componentWillMount: function(){

    var token = cookieHelpers.getCookie('token');
    if(!token){
      this.props.history.push('/login');
      return false;
    }

    var obj = {
     api : AppConstants.API_CLIENT.AUDIO_REC_DATA,
     token : token,
     successCB: this.successCallback,
     failureCB: this.failureCallback,
    }
    
    apiCall.get(obj);

  },
  render: function() {
    
    return (
      <div className="List container">
        <div className="row">
          <div className="col-xs-12">
            <h1 className="text-center">Audio Recordings</h1>
            {
              this.state.showLoader ?
              <Loader />
              :
              <AudioBox results={this.state.results} />
            }
          </div>
        </div>
      </div>
    );

  },
  /**
   * Success Callback 
   * @Props
   * @param {Object} res - res of api call
   */
  successCallback:function(res){
    this.toggleLoader(false);
    this.setState({'results': res.results});
  },
  /**
   * Failure Callback 
   * @Props
   * @param {Object} res - failure res of api call
   */
  failureCallback:function(res){
    this.toggleLoader(false);
    alert(res);
  },
  /**
   * Toggles the loader depending on the value 
   * @Props
   * @param {bool} value - boolean value
   */
  toggleLoader:function(value){
    this.setState({showLoader:value})
  }

});


module.exports = List;

