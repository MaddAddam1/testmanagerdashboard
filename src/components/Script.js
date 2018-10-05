import React from 'react';
import { BrowserRouter, Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import '../styles/components/script.css';
import { removeScript, viewScript, editScript } from './../actions/scripts';



class Script extends React.Component {
 constructor (props){
     super(props);
     this.state = {
         runClick: false,
         ScriptID: this.props.ScriptID,
         LastRunPass: this.props.LastRunPass
     }
 }
      buttonGroup = 
            <div>
                <Button variant="contained" color="primary" onClick={() => {
                    this.setState({runClick: true})
                    console.log('Running the script! : ' + this.state.runClick);
                }}>Run</Button>

                <Button  variant="contained" onClick={() => {
                     this.props.history.push(`/scripts/edit/${this.state.ScriptID}`);
                }}>Edit</Button>

                <Button variant="contained" color="secondary" onClick={(e) => {
                    const script = this.state.ScriptID;
                    console.log(script);
                   this.props.dispatch(removeScript(script));
                   this.props.history.push("/scripts");
                }}>Delete</Button>
            </div> ;
      
        runButtons = 
            <div>
                <Button variant="fab" color="primary" onClick={() => {
                    this.setState({LastRunPass: 1})
                    if (this.props.LastRunPass == 1) {console.log('Pass!')}
                }}> Pass</Button>
                <Button variant="fab" color="secondary" onClick={() => {
                    this.setState({LastRunPass: 0})
                    if (this.props.LastRunPass == 0) {console.log('Fail!')}
                }}>Fail</Button>
                <Button variant="fab" color="default" onClick={() => {
                    this.setState({runClick: false})
                    console.log('Cancelling run : ' + this.state.runClick);
                }}>Cancel</Button>
            </div>;
    render () {

        return (
            

            <div className="view-script-div">
                <Card className="script-card">
                    <CardContent>
                    <div className="script-details-div" >
                        <Typography variant="headline" component="h1">{this.props.ScriptName}</Typography>
                        <Typography variant="headline" component="h1">{this.props.ScriptID}</Typography>
                        <Typography variant="headline" component="h5">Created By: {this.props.CreatedBy}</Typography>
                        <Typography variant="headline" component="h5">Last Modified: {this.props.LastDateModified}</Typography>
                        <Typography variant="headline" component="h5">Last Modified By: {this.props.LastModifiedBy}</Typography>
                        <Typography variant="headline" component="h5">Last Run Pass/Fail: {this.props.LastRunPass == 1 ? <b style={{color: "green"}}>Pass</b> : <b style={{color: "red"}}>Fail</b>}</Typography>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: this.props.ScriptDesc }} />
                    
                        <CardActions> 
                                       {this.state.runClick ? this.runButtons : this.buttonGroup}            
                        </CardActions>
                    </CardContent>
                
                </Card>
            </div>
        );
    }
    }

    // const mapStateToProps = (state, props) => {

    //     return {
    //         script: state.scripts.find((script) => script.ScriptID === props.match.params.ScriptID)
    //     };
    // };
export default withRouter(connect()(Script));