import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import moment from 'moment';


class TextEditor extends React.Component {
  constructor(props) {
    super(props)
      this.state = { 
    
          ScriptDesc: props.script ? props.script.ScriptDesc : '',
          ScriptName: props.script ? props.script.ScriptName : '',
          LastDateModified: props.script ? moment(props.script.LastDateModified) : moment().format('MMMM Do, YYYY : LT'),
          
      };
      
  }

  onHandleDescChange = (e) => {
    this.setState({ ScriptDesc: e });
    console.log(this.state.ScriptDesc);
  }

  onHandleNameChange = (e) => {
    this.setState({ ScriptName: e });
    console.log(this.state.ScriptName);
  }
  onScriptNameChange = (e) => {
    const ScriptName = e.target.value;
    this.setState(() => ({ ScriptName }));
}

  onSubmit = (e) => {
      e.preventDefault();
      if (!this.state.ScriptDesc) {
          this.setState(() => ({ error: 'Please prove a Name and the Details of the script'}));

      } else {
          this.setState(() => ({ error: ''}))
          console.log('Script created or edited...')
          this.props.onSubmit({
              ScriptName: this.state.ScriptName,
              ScriptDesc: this.state.ScriptDesc
          })
      }

      console.log(this.state.ScriptDesc);
  };

  render() {

    return (
      <div>
    
        <form onSubmit={this.onSubmit} style={{textAlign: "center", alignContent: "center"}}>
          <input
            className="script-name-input"
            type="text"
            placeholder="Script Name"
            autoFocus
            name="ScriptName"
            value={this.state.ScriptName}
            onChange={this.onScriptNameChange}
          />

          <ReactQuill
            name="ScripDesc" 
            value={this.state.ScriptDesc}
            onChange={this.onHandleDescChange}
            theme="snow" 
            modules={TextEditor.modules}
            formats={TextEditor.formats}
            placeholder={'Enter script details...'}
          />

          <button>
            Save
          </button>
        </form>
      </div>
      
    );
  }
}

TextEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
TextEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

export default connect()(TextEditor);