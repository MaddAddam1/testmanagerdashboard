import React from 'react';
import '../styles/components/editScriptPage.css';
import { connect } from 'react-redux';
import ScriptForm from './ScriptForm';
import { editScript } from '../actions/scripts'
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const EditScriptPage = (props) => {
  
    return (
    
        <div className="edit-script-div">
            <Card>
                <CardContent>
                    <div className="script-details-div">
                        <Typography variant="headline" component="h1">{props.script.ScriptName}</Typography>
                        <Typography variant="headline" component="h5">Created By: {props.script.CreatedBy}</Typography>
                        <Typography variant="headline" component="h5">Last Modified: {props.script.LastDateModified}</Typography>
                        <Typography variant="headline" component="h5">Last Modified By: {props.script.LastModifiedBy}</Typography>
                    </div>
                        <Typography component="p">{props.script.ScriptDesc}</Typography>
                    
            
                </CardContent>
            </Card>
        </div>
    );
}

const mapStateToProps = (state, props) => {

    return {
        script: state.scripts.find((script) => script.ScriptID === props.match.params.ScriptID)
    };
};

export default connect(mapStateToProps)(EditScriptPage);
