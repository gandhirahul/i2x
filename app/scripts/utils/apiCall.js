/**
  * @desc Requests a network call via ajax
  * @param object obj- ajax call paramters
  * @return object - success or failure
*/
var $ = require('jquery')

var apiCall = {
	post:function(obj){
		$.ajax({
            url: obj.api,
            type: "POST",
            data: JSON.stringify(obj.data),
       		dataType: "json",
       		contentType: 'application/json; charset=UTF-8',
            success: function(res) {
                obj.successCB(res);
            },
            error: function(res) {
            	var responseText = res.responseText ? JSON.parse(res.responseText) : {};
            	var error_msg = responseText.non_field_errors && responseText.non_field_errors[0] || 'Some error occured';

                obj.failureCB(error_msg);
            },
        })
	},
	get:function(obj){

		$.ajax({
            url: obj.api,
            type: "GET",
            headers: { 'Authorization': obj.token},
       		contentType: 'application/json; charset=UTF-8',
            success: function(res) {
                obj.successCB(res);
            },
            error: function(res) {
            	var responseText = res.responseText ? JSON.parse(res.responseText) : {};
            	var error_msg = responseText.detail || 'Some error occured';

                obj.failureCB(error_msg);
            },
        })
	}
};
module.exports = apiCall;
