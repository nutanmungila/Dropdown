'use strict';
import React from 'react';
import Popup from './popup';

class Dropdown extends React.Component {

  constructor(props) {
      super(props);
      this.onClickbox = this.onClickbox.bind(this);
      this.onItemSelectedHandler = this.onItemSelectedHandler.bind(this);
      this.state = {showPopup:false,selectedItemvalue:""};
  }

  onItemSelectedHandler(vl){
      React.findDOMNode(this.refs.menubox).value = vl;
      this.setState({selectedItemvalue:vl});
  }
  
  onClickbox(e){
      this.setState({showPopup:!(this.state.showPopup)});
  }

  render(){
      return( 
            <div className="box" ref="menubox" onClick={this.onClickbox}>{this.state.selectedItemvalue}
              { this.state.showPopup ? <Popup elts={this.props.items} onItemSelected={this.onItemSelectedHandler}/> : null }
            </div> 
        );
  }
  
}

export default Dropdown;