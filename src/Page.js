import React,{Component} from 'react';
import Placeholder from './Placeholder';
import Navbar from './Navbar';
import Content from './Content';


class Page extends Component{
  constructor(){
    super()
    this.state = {
      page:undefined
    }
  }

  ping(str){
    var content = document.getElementById('#content')
    console.log(str)
  }

  render() {
    return (
      <div>
        <Navbar handler={str => this.ping(str)}/>
        <Content />
      </div>
    )
  }
}

export default Page;
