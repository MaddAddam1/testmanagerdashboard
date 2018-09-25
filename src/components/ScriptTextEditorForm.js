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
        
        value: {
          ScriptDesc: props.script ? props.script.ScriptDesc : '',
          ScriptName: props.script ? props.script.ScriptName : '',
          LastDateModified: props.script ? moment(props.script.LastDateModified) : moment().format('MMMM Do, YYYY : LT'),
          }, 
      } 
  }

  handleChange(value) {
    this.setState( {ScriptDesc: value })
    console.log("Body: " + value);
  }
  onScriptDescriptionChange = (e) => {
    const ScriptDesc = e.target.value;
    this.setState(() => ({ ScriptDesc }));
}

  onSubmit = (e) => {
      e.preventDefault();
      if (!this.state.ScriptDesc || !this.state.ScriptName) {
          this.setState(() => ({ error: 'Please prove a Name and the Details of the script'}));

      } else {
          this.setState(() => ({ error: ''}))
          console.log('Script created or edited...')
          this.props.onSubmit({
              ScriptDesc: this.state.ScriptDesc
          })
      }

      console.log(this.state.ScriptDesc);
  };

  onHandleSubmit(e) {
    e.preventDefault();
    const body = {
      ScriptDesc: this.state.ScriptDesc
    };
    this.setState({
      ScriptDesc: this.state.ScriptDesc
    })
    console.log(this.state.ScriptDesc);
  }

  render() {

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            className="script-name-input"
            type="text"
            placeholder="Script Name"
            autoFocus
            value={this.state.ScriptName}
            onChange={this.onScriptNameChange}
          />
          <ReactQuill
          name="editor" 
          value={this.state.ScriptDesc}
          onChange={this.onScriptDescriptionChange}
          theme="snow" modules={TextEditor.modules}
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