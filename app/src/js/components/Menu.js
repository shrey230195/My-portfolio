/** 

 * @jsx React.DOM 
 */

var React = require('React');

var Menu = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-md-4" id="AboutMe">
				<h1>About Me</h1>
				</div>
				<div className="col-md-4" id="Projects">
				<h1>Projects</h1>
				</div>
				<div className="col-md-4" id="Skills">
				<h1>Skills</h1>
				</div>
				<div className="col-md-4" id="Contact">
				<h1>Contact</h1>
				</div>

			</div>

			);
	}
});
module.exports = Menu;











