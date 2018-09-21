import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@material-ui/core';

class TextEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  onSaveClick = (e) => {
      const
    }

  render() {

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

    

    return (
      <div>
        <ReactQuill 
        value={this.state.text}
        onChange={this.handleChange}
        theme="snow" modules={TextEditor.modules}
        formats={TextEditor.formats}
        placeholder={'Enter script details...'}
        />

      <Button variant="contained" color="primary">
        Save
      </Button>

      </div>
      
      
    
    
    
    );
  }
}

export default TextEditor;