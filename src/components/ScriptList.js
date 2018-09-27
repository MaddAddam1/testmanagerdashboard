import React from 'react';
import { connect } from 'react-redux';
import { Paper, Card, Typography, CardContent, CardHeader, Button} from '@material-ui/core';
import '../styles/components/scriptlist.css';
import { MDBTableHead, MDBTableBody, MDBTable, MDBDataTable } from 'mdbreact';
import ReactTable from 'react-table';
import ScriptListItem from './ScriptListItem';


const ScriptList = (props) =>  {

const createScript = (e) => {
    e.preventDefault();
    props.history.push("/create");
    console.log('Going to Create Script');
    
}
        return (
            // table goes in here, with ScriptListItem being injected in the rows

            <div> 
               <Paper className="script-list">
                   <ScriptListItem />
                   <Button variant="contained" color="primary" onClick={createScript}>
                       Create New Script
                   </Button>
               </Paper>
                    
             
                
                    
             
            </div>
        );
    


}

const mapStateToProps = (state) => {
    return {
        scripts: state.scripts
    };
};

export default connect(mapStateToProps)(ScriptList);
 