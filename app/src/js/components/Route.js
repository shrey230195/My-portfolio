/** 

 * @jsx React.DOM 
 */

var React = require('React');
var	FrontPage = require('./FrontPage');
var Menu = require('./Menu');
var skills =require('./skills');
var ProjectList=require('./ProjectList');

var Route=React.createClass({
	getInitialState:function(){
		var PROJECT_ITEMS=[
				{key:1, title:'dasd', description:'hjbhjjb', technology:'cbchjbjs', image:'src/img/MyPhoto.jpg',link:'ssdaf'},
				{key:2, title:'dafggggsd', description:'hjbhjjb', technology:'cbchjbjs', image:'src/img/MyPhoto.jpg',link:'ssdafrrrr'},
				{key:3, title:'dasddasd', description:'hjbhjjb', technology:'cbchjbjs', image:'src/img/MyPhoto.jpg',link:'ssdadsff'},
				{key:4, title:'dasddasd', description:'hjbhjjb', technology:'cbchjbjs', image:'src/img/MyPhoto.jpg',link:'ssdadsff'},
		];
		return{
			items: PROJECT_ITEMS
		}
		
	},
	render:function(){
		return(
			<div>
			<FrontPage/>
			<Menu/>
			<skills/>
			<ProjectList items={this.state.items}/>
			</div>
			);
	}
});
module.exports = Route;