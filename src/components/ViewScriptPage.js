import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { Card, CardActions, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import Script from './Script';


const ViewScriptPage = (props) => {

    return (

        <div>
            <h3>View the Script</h3>
            <Script {...props.script}/>
              
        </div>

    );


}


const mapStateToProps = (state, props) => {
    return {
        script: state.scripts.find((script) => script.ScriptID === props.match.params.ScriptID)
    };
};


export default connect(mapStateToProps)(ViewScriptPage);