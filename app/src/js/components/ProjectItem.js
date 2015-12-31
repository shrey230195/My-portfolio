/** 

 * @jsx React.DOM 
 */

var React = require('React');

var ProjectItem= React.createClass({
	render: function(){
		return(
			<div className="ProjectItem">
				<div>	
				 	<h2>{this.props.title}</h2>
				 	<h4>{this.props.technology}</h4>
				 	<h4>{this.props.desc}</h4>
				 	<h4>{this.props.link}</h4>
			 	</div>
			 	<img src={this.props.image}/>
			 </div>
			);
	}
})
module.exports = ProjectItem;











