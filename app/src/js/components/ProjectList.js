/** 

 * @jsx React.DOM 
 */

var React = require('React');
var ProjectItem = require('./ProjectItem')
var ProjectList = React.createClass({
	render: function(){
		var list= this.props.items.map(function(item){
			return <ProjectItem title={item.title} desc={item.description} technology={item.technology} image={item.image} link={item.link} /> 
		})

		return(
			<div className="ProjectList">
				
				{list}
				
					

			</div>

			);
	}
});
module.exports = ProjectList;











