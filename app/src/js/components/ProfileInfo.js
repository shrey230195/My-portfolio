/** 

 * @jsx React.DOM 
 */

var React = require('React');


var ProfileInfo=React.createClass({
	render:function(){
		return(
			<div className="Info">
				 <img className="photo" src="src/img/MyPhoto.jpg"/>
				 <h1>SHREY DIXIT</h1>
				 <span className="glyphicon glyphicon-map-marker">Delhi,India</span>
			</div>
			);
	}
});
module.exports = ProfileInfo;