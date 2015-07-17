'use strict';
import React from 'react';
import Dropdown from './dropdown';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return( 
            <div>
              <Dropdown items={["aa","bb","cc","dd","ff","gg","hh","ii"]}/>
            </div> 
        );
  }
  
}

React.render( <Main /> , document.getElementById("div-bx"));
