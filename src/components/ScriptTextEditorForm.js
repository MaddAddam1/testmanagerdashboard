import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Card } from '@material-ui/core';
import { connect } from 'react-redux';
import moment from 'moment';
import '../styles/components/editScriptForm.css';


class ScriptTextEditorForm extends React.Component {
  constructor(props) {
    super(props)
      this.state = { 
          ScriptDesc: this.props.ScriptDesc,
          ScriptName: this.props.ScriptName,
          LastDateModified: props.script ? moment(props.script.LastDateModified) : moment().format('MMMM Do, YYYY : LT'),
      };
  }

  onHandleDescChange = (e) => {
    this.setState({ ScriptDesc: e });
    console.log(this.props.ScriptDesc);
  }

  onScriptNameChange = (e) => {
    this.setState({ ScriptName: e });
    console.log(this.props.ScriptName);
}

  onSubmit = (e) => {
      e.preventDefault();
      if (!this.props.ScriptDesc) {
          this.setState(() => ({ error: 'Please prove a Name and the Details of the script'}));

      } else {
          this.setState(() => ({ error: ''}))
          console.log('Script successfully edited...')
          this.props.onSubmit({
              ScriptName: this.state.ScriptName,
              ScriptDesc: this.state.ScriptDesc,
              LastDateModified: this.props.script ? moment(this.props.script.LastDateModified) : moment().format('MMMM Do, YYYY : LT'),
          })
      }

  };

  onCancel = (e) => {
    e.preventDefault();
    if (!this.props.ScriptDesc) {
      this.setState(() => ({ error: 'Please prove a Name and the Details of the script'}));

  } else {
      this.setState(() => ({ error: ''}))
      console.log('Script edit cancelled...')
      this.props.onSubmit({
          ScriptName: this.props.ScriptName,
          ScriptDesc: this.props.ScriptDesc,
      })
    }
  }

  render() {

    return (
      <div>
        
            {/* <input
              className="script-name-input"
              type="text"
              placeholder="Script Name"
              autoFocus
              name="ScriptName"
              value={this.state.ScriptName}
              onChange={this.onScriptNameChange}
            /> */}
            <div>
            <ReactQuill
              name="ScriptDesc" 
              value={this.state.ScriptDesc}
              onChange={this.onHandleDescChange}
              theme="snow" 
              modules={ScriptTextEditorForm.modules}
              formats={ScriptTextEditorForm.formats}
              placeholder={'Enter script details...'}
              //bounds={'.app'}
              //className="quill-editor"

            />
            </div>
            {/* <br/>
            <br/>
            <br/>
            <br/>
            <br/> */}
            <div className="button-div">
               <button className="script-edit-button-save" onClick={this.onSubmit}>
              Save
            </button>
            <button className="script-edit-button-cancel" onClick={this.onCancel}>
              Cancel
            </button>
            </div>
           
      </div>
      
    );
  }
}


ScriptTextEditorForm.modules = {
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
ScriptTextEditorForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

export default connect()(ScriptTextEditorForm);