/**
 * Login Component - Renders the login page
 */
var React = require('react');
var AppConstants = require('../constants/AppConstants');
var apiCall = require('../utils/apiCall');
var cookieHelpers = require('../utils/cookieHelpers');

var Login = React.createClass({
  getInitialState: function() {
    return {
      email:'challenge@i2x.ai',
      password:'pass123',
      showLoader:false
    };
  },
  componentWillMount: function(){

    var token = cookieHelpers.getCookie('token');
    if(token){
      this.props.history.push('/list');
      return false;
    }
  },

  render: function() {

    return (
      <div className="Login container">
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" className="form-control" id="email" value={this.state.email} onChange={this._handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" id="password" value={this.state.password} onChange={this._handleChange} />
            </div>
            {
              this.state.showLoader ?
              <div className="btn btn-default">Loading...</div>  
              :
              <button type="submit" className="btn btn-default" onClick={this.submitForm}>Submit</button>  
            }
          </div>
        </div>
      </div>
    );

  },
  /**
   * Binds the input box value
   * @Props
   * @param {object[]} event - Event object
   */
  _handleChange : function(event) {
    
    var state = {};
    state[event.target.id] = event.target.value;

    this.setState(state);
  },
  /**
   * Submits the Login form
   */
  submitForm:function(){
        
    var obj = {
     api : AppConstants.API_CLIENT.I2X_LOGIN,
     data : this.state,
     successCB: this.successCallback,
     failureCB: this.failureCallback,
    }
    apiCall.post(obj);
    this.toggleLoader(true);
    
  },
  /**
   * Success Callback 
   * @Props
   * @param {Object} res - res of api call
   */
  successCallback:function(res){

    var value = 'JWT '+res.token;
    cookieHelpers.addCookie('token',value);
    
    this.toggleLoader(false);
    this.props.history.push('/list');
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


module.exports = Login;

