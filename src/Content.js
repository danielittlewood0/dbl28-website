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
      return (<p>About</p>)
    }
    else {
      return (<Placeholder/>)
    }
  }
}

export default Content;
