import React from 'react';
import '../styles/components/editScriptPage.css';
import { connect } from 'react-redux';
import ScriptForm from './ScriptForm';
import { editScript } from '../actions/scripts'
import { Card, CardContent, Typography, Button, Paper } from '@material-ui/core';
import TextEditor from './TextEditor';
import ScriptTextEditorForm from './ScriptTextEditorForm';
import '../styles/components/editScriptPage.css';


const EditScriptPage = (props) => {
  
    return (
    
        <div className="edit-script-div">
            <Paper className="edit-script-page-paper">
                    <div className="script-details-div">
                        <Typography variant="headline" component="h1">{props.script.ScriptName}</Typography>
                        <Typography variant="headline" component="h5">Created By: {props.script.CreatedBy}</Typography>
                        <Typography variant="headline" component="h5">Last Modified: {props.script.LastDateModified}</Typography>
                        <Typography variant="headline" component="h5">Last Modified By: {props.script.LastModifiedBy}</Typography>
                    </div>
                          {/* <div dangerouslySetInnerHTML={{ __html: props.script.ScriptDesc }} /> */}
                    
                {/* <ScriptForm 
                        {...props.script}
                onSubmit={(script) => {
                    props.dispatch(editScript(props.script.ScriptID, script));
                    props.history.push("/scripts")
                    console.log('Script updated: ', script);
                }}/> */}

                <ScriptTextEditorForm
                    {...props.script}
                    onSubmit={(script) => {
                        props.dispatch(editScript(props.script.ScriptID, script));
                        props.history.push("/scripts")
                        console.log('Script updated: ', script);
                    }}
                    onCancel={() => {
                        props.history.push("/scripts")
                    }}
                    />
              
            </Paper>
        </div>
    );
}

const mapStateToProps = (state, props) => {

    return {
        script: state.scripts.find((script) => script.ScriptID === props.match.params.ScriptID)
    };
};

export default connect(mapStateToProps)(EditScriptPage);
