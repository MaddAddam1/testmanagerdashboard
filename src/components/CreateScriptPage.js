import React from 'react';
import '../styles/components/createScriptPage.css';
import { connect } from 'react-redux';
import ScriptForm from './ScriptForm';
import { createScript } from '../actions/scripts'
import { Card, CardHeader, CardContent, Typography, Button, Paper } from '@material-ui/core';

const CreateScriptPage = (props) => {
  
    return (
    
        <div className="create-script-div">
            <Paper className="create-script-paper">
                <Card>
                
                    <Typography variant="headline" component="h1">Create Script</Typography>
                  
                    <ScriptForm onSubmit={(script) => {
                        props.dispatch(createScript(script));
                        props.history.push("/scripts");
                        console.log(script);
                    }}/>
                </Card>
            </Paper>
        </div>
    );
}


export default connect()(CreateScriptPage);
