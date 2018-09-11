import React from 'react';
import { connect } from 'react-redux';
import { Paper, Card, Typography, CardContent, CardHeader} from '@material-ui/core';
import '../styles/components/scriptlist.css';
import { MDBTableHead, MDBTableBody, MDBTable, MDBDataTable } from 'mdbreact';
import ReactTable from 'react-table';
import ScriptListItem from './ScriptListItem';


const ScriptList = (props) =>  {



        return (
            // table goes in here, with ScriptListItem being injected in the rows

            <div> 
               <Paper className="script-list">
                   <ScriptListItem />
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
 