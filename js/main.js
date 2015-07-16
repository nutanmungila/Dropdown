'use strict';
import React from 'react';
import Popup from './popup';

class Dropdown extends React.Component {

  constructor(props) {
      super(props);
      this.onClickbox = this.onClickbox.bind(this);
      this.state = {showPopup:false};
  }

  componentWillMount(){
  }

  onItemSelectedHandler(vl){
      console.log(vl);
  }
  
  onClickbox(e){
    this.setState({showPopup:true});
  }

  render(){
    return( 
          <div>
              <div className="box" ref="menubox" onClick={this.onClickbox}>
              { this.state.showPopup ? <Popup elements={["aa","bb","cc"]} onItemSelected={this.onItemSelectedHandler}/> : null }
              </div> 
          </div>
        );
  }
  
}

React.render( <Dropdown/> , document.getElementById("div-bx"));
