/** 

 * @jsx React.DOM 
 */
var ProfileInfo=require('./ProfileInfo');

var React = require('React');

var FrontPage = React.createClass({
	render: function(){
		return(
			
			<div className="jumbotron">
				<ProfileInfo/>
				
			</div>
			
		
			);
	}
});
module.exports = FrontPage;











