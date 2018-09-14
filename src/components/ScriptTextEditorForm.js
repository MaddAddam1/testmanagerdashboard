// Import React!
import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { connect } from 'react-redux';



const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
});




class Former extends React.Component {
  // Set the initial value when the app is first constructed.
  state = {
    value: initialValue,
  };
  
  
  onChange = ({ value }) => {
    this.setState({ value })
  };

  render() {
    return (
    
    
      <Editor value={this.state.value} onChange={this.onChange} />

      );


  };

  
};

export default connect()(Former);