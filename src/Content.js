import React,{Component} from 'react';
import Placeholder from './Placeholder';

class Content extends Component{
  constructor(){
    super()
    this.state = { 
      page:undefined,
    }
  }


  render(){
    if (this.state.page == "About"){
      return (
        <div id="content">
          <p>About</p>
        </div>
      )
    }
    else {
      return (<Placeholder/>)
    }
  }
}

export default Content;
