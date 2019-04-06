import React,{Component} from 'react';
import Placeholder from './Placeholder';

class Content extends Component{

  render(props){
    if (this.props.page == "About"){
      return (
        <div id="content">
          <p>About</p>
        </div>
      )
    }
    else if (this.props.page == "1"){
      return (
        <p> TENDIES </p>
      )
    }
    else {
      return (<Placeholder/>)
    }
  }
}

export default Content;
