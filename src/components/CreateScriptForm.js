import React from 'react';
import { connect } from 'react-redux';
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/components/script.css';
import moment from 'moment';
import { Field, reduxForm, reducer, Form, FormSection, Fields } from "redux-form";

import Former from './ScriptTextEditorForm';



class CreateScriptForm extends React.Component {

    constructor(props) {
        super(props);
        
            this.state = {
                value: {
                ScriptDesc: props.script ? props.script.ScriptDesc : '',
                ScriptName: props.script ? props.script.ScriptName : '',
                LastDateModified: props.script ? moment(props.script.LastDateModified) : moment().format('MMMM Do, YYYY : LT'),
                },
        };
    }

    
    onScriptNameChange = ({e}) => {
        const ScriptName = e.target.value;
        this.setState(() => ({ ScriptName }));
    }

    onScriptDescriptionChange = ({e}) => {
        const ScriptDesc = e.target.value;
        this.setState(() => ({ ScriptDesc }));
    }

    onSubmit = ({e}) => {
        e.preventDefault();
        if (!this.state.ScriptDesc || !this.state.ScriptName) {
            this.setState(() => ({ error: 'Please prove a Name and the Details of the script'}));
            

        } else {
            this.setState(() => ({ error: ''}))
            console.log('Script created or edited...')
            this.props.onSubmit({
              
                ScriptName: this.state.ScriptName,
                ScriptDesc: this.state.ScriptDesc,
                LastDateModified: this.state.LastDateModified
            })
        }
    };

        render () {
            return (

                <div >
                    <form onSubmit={this.onSubmit}>
                        <input
                        type="text"
                        placeholder="Script Name"
                        autoFocus
                        value={this.state.ScriptName}
                        onChange={this.onScriptNameChange}
                        />
                        <textarea
                        placeholder="Script Details"
                        value={this.state.ScriptDesc}
                        onChange={this.onScriptDescriptionChange}
                        />
                        <button>
                        Add Script
                        </button>
                    </form>


                </div>
            );
    }

}

export default connect()(CreateScriptForm);