import React, { Component } from 'react'
import Editor from './Editor';
import Preview from './Preview';

// let marked = require("marked");
const TextInitial =`
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
There's also [links](https://www.freecodecamp.com), and
> This is a paragraph inside
a blockquote.
**You can also make text bold... whoa!**
And if you want to get really crazy, even tables:

|Wild Header | Crazy Header | Another Header?|
|----+----| |----+----| |----+----|
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`
export default class Container extends Component {
    constructor(props){
        super(props)
        this.state = {
          markdown: TextInitial,
        }
      }

    //   updateMarkdown(markdown) {
    //     this.setState({ markdown });
    //   }

    ChangeTextArea=(e)=>{
        this.setState({
            markdown:e.target.value,
        });
      };

    render() {

    

        return (
            <div className="container-principal">
                <div className="principal">
                    <Editor
                       visual={this.state.markdown}
                        Change={this.ChangeTextArea}
                    />
                    <Preview
                        visual={this.state.markdown}
                    />
                </div>
            </div>
        )
    }
}
