import React from 'react';
import { connect } from 'react-redux';
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/components/script.css';


const ScriptForm = (props) => {

    return (

        <div>

            <div class="form-group">
                <label for="exampleFormControlTextarea3">Rounded corners</label>
                <textarea class="form-control" id="exampleFormControlTextarea3" rows="7"></textarea>
            </div>
            
        </div>
    );

}

export default connect()(ScriptForm);