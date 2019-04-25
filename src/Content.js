import React,{Component} from 'react';
import Placeholder from './Placeholder';
import About from './About.js';
import Work from './Work.js';
import Maths from './Maths.js';
import Life from './Life.js';
import Interests from './Interests.js';
import Contact from './Contact.js';

class Content extends Component{

  render(props){
    if (this.props.page == "About"){ return ( <About/> ) }
    else if (this.props.page == "Maths"){ return ( <Maths/> ) }
    else if (this.props.page == "Life"){ return ( <Life/> ) }
    else if (this.props.page == "Interests"){ return ( <Interests/> ) }
    else if (this.props.page == "Contact"){ return ( <Contact/> ) }
    else if (this.props.page == "Work"){ return ( <Work/> ) }
    else if (this.props.page != null){ return(<div> Sorry, I don't know the page {this.props.page}! </div>) }
    else { return (<div/>)}
  }
}

export default Content;
