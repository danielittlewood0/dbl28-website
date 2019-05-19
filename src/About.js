import React,{Component} from 'react';
import Placeholder from './Placeholder';
import about from './about.md';
class About extends Component {
  constructor(){
    super()
    this.state = {
      content: "Parsing markdown..."
    }
    this.parseMarkdown = this.parseMarkdown.bind(this);
    this.fetchContent = this.fetchContent.bind(this);
    this.fetchContent()
  }


  parseMarkdown(text){
    const Http = new XMLHttpRequest();
    const url='https://api.github.com/markdown/raw';
    const This = this;
    Http.open("POST", url);
    Http.send(text);
    Http.onreadystatechange=(e)=>{
        if (Http.readyState == 4 && Http.status == 200) {
          This.setState({content: Http.responseText})
          var readme = document.getElementById('readme')
          readme.innerHTML = Http.responseText
      }
    }
  }

  fetchContent(){
    const Local = new XMLHttpRequest();
    const This = this;
    Local.open("GET",about);
    Local.send();
    Local.onreadystatechange = function() {
      if (Local.readyState== 4 && Local.status == 200) {
        This.parseMarkdown(Local.responseText);
      }
    }
  }

  render(){
    return (
    <div id="readme">
      {this.state.content}
    </div>
  )}
}

export default About;
