import React from 'react';
import { BrowserRouter, Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import '../styles/components/script.css';
import { removeScript, viewScript, editScript } from './../actions/scripts';



const Script = withRouter(({history, props, dispatch, LastRunBy, LastDateModified, ScriptID, ScriptName, CreatedBy, CreatedDate, ScriptDesc, LastModifiedBy, LastDateRun, LastRunPass}) => {


    const buttonGroup = () => {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={() => {
                                
                }}>Run</Button>

                <Button  variant="contained" onClick={() => {
                     history.push(`/scripts/edit/${ScriptID}`);
                }}>Edit</Button>

                <Button variant="contained" color="secondary" onClick={(e) => {
                    dispatch(removeScript({ ScriptID }));
                    history.push("/scripts");
                }}>Delete</Button>
            </div>
        );
    }
    
    let runButton = false;

        return (
            

            <div className="view-script-div">
                <Card className="script-card">
                    <CardContent>
                    <div className="script-details-div" >
                        <Typography variant="headline" component="h1">{ScriptName}</Typography>
                        <Typography variant="headline" component="h5">Created By: {CreatedBy}</Typography>
                        <Typography variant="headline" component="h5">Last Modified: {LastDateModified}</Typography>
                        <Typography variant="headline" component="h5">Last Modified By: {LastModifiedBy}</Typography>
                        <Typography variant="headline" component="h5">Last Run: {LastDateRun}</Typography>
                        <Typography variant="headline" component="h5">Last Run By: {LastRunBy}</Typography>
                        <Typography variant="headline" component="h5">Last Run Pass/Fail: {LastRunPass == 1 ? <b style={{color: "green"}}>Pass</b> : <b style={{color: "red"}}>Fail</b>}</Typography>
                    </div>
                        <Typography component="p">{ScriptDesc}</Typography>
                    
                        <CardActions> 
                            <Button variant="contained" color="primary" onClick={() => {

                            }}>Run</Button>

                            <Button  variant="contained" onClick={() => {
                                history.push(`/scripts/edit/${ScriptID}`);
                            }}>Edit</Button>

                            <Button variant="contained" color="secondary" onClick={(e) => {
                                dispatch(removeScript({ ScriptID }));
                                history.push("/scripts");
                            }}>Delete</Button>
                        </CardActions>
                    </CardContent>
                
                </Card>
            </div>
        );
    }
);

export default connect()(Script);