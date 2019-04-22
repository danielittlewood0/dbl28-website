import React,{Component} from 'react';
import Placeholder from './Placeholder';
import about from './about.md';
class About extends Component {

  parseMarkdown(){
    var text = ""
    const Http = new XMLHttpRequest();
    const url='https://api.github.com/markdown/raw';
    Http.open("POST", url);
    Http.send(text);
    Http.onreadystatechange=(e)=>{
        if (Http.readyState == 4 && Http.status == 200) {
          this.setState({content: Http.responseText})
          var readme = document.getElementById('readme')
          readme.innerHTML = Http.responseText
      }
    }
  }

  fetchContent(){
    const Local = new XMLHttpRequest();
    Local.open("GET",about);
    Local.send();
    Local.onreadystatechange = function() {
      if (Local.readyState== 4 && Local.status == 200) {
        alert(this.parseMarkdown)
        this.parseMarkdown(Local.responseText);
      }
    }
  }

  constructor(){
    super()
    this.state = {
      content: "Parsing markdown..."
    }
    this.parseMarkdown = this.parseMarkdown.bind(this);
    this.fetchContent = this.fetchContent.bind(this);
    this.fetchContent()
  }

  render(){
    return (
    <div id="readme">
      {this.state.content}
    </div>
  )}
}

export default About;
