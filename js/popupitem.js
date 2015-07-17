'use strict'
import React from 'react';
class Popupitem extends React.Component{

	constructor(props){
		super(props);
		this.onClickPopupitem = this.onClickPopupitem.bind(this);
	}

	onClickPopupitem(e){
     	this.props.onSelectedItem(this.props.itm);
	}

	render(){
		return(<div className="popupitem-box" onClick={this.onClickPopupitem}>{this.props.itm}</div>);
	}
}

export default Popupitem;

