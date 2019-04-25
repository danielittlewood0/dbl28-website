import React,{Component} from 'react';
import Placeholder from './Placeholder';
import Navbar from './Navbar';
import Content from './Content';


class Page extends Component{
  constructor(){
    super()
    this.state = {
      page: undefined
    }
    this.setPage = this.setPage.bind(this)
  }

  setPage(page){
    this.setState({
      "page":page
    })
  }

  render() {
    return (
      <div>
        <Navbar handler={this.setPage}/>
        <Content page={this.state.page}/>
      </div>
    )
  }
}

export default Page;
