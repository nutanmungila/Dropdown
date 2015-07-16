'use strict';
import React from 'react';

class Popup extends React.Component{

  	constructor(props) {
	    super(props);
	    this.state = {itm:"aa"};
	    this.onClickhandler = this.onClickhandler.bind(this);
  }
  
  	componentWillMount(){
  	var elemts = this.props.elements; 
     // console.log(elemts);//returns ["aa", "bb", "cc"]  How to pass these list of elements to popup class ??!!
  }

  	onClickhandler(e){
  	var val = React.findDOMNode(this.refs.menuitems).value; // Something wrong here need to get selected (clicked) value
  	this.props.onItemSelected(val);
	console.log(val);
  }

	render(){
		// need to get values from Dropdown and display those values may be we can use array mapping 
		return(
			<div> 
				<div ref="menuitems" onClick={this.onClickhandler}>
					{ this.props.elements.map(function (item) { return (<div ref="menuitems">{item}</div>); } ) }
				</div>
			</div>
			);
	}

}
export default Popup;