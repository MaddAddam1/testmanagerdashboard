import React from 'react';
import { connect } from 'react-redux';
import { Link, Router} from 'react-router-dom';


const ScriptListItem = (props) => {

    const item = props.scripts.map(script => {
        return (
            <tr key={script.ScriptID}>
            <td scope="row" data-label="Script Name">
              <div className="slds-truncate"><Link to={`/scripts/${script.ScriptID}`}>{script.ScriptName}</Link></div>
            </td>
            <td data-label="Created By">
              <div className="slds-truncate">{script.CreatedBy}</div>
            </td>
            <td data-label="Created Date">
              <div className="slds-truncate">{script.CreatedDate}</div>
            </td>
            <td data-label="Last Modified">
              <div className="slds-truncate">{script.LastDateModified}</div>
            </td>
            <td data-label="Last Modified">
              <div className="slds-truncate">{script.LastModifiedBy}</div>
            </td>
            <td data-label="Last Run Pass">
              <div className="slds-truncate">{script.LastRunPass}</div>
            </td>
            <td className="slds-text-align--right" data-label="Action">
            <button className="slds-button slds-button--icon" title="edit">
                <span className="slds-assistive-text">View</span>
            </button>

              <button className="slds-button slds-button--icon" title="edit">
                <span className="slds-assistive-text">Edit</span>
            </button>

            <button>
                <span className="slds-assistive-text">Delete</span>
            </button>
            </td>
          </tr>
        )
    })

    return(
        <div>
            
            <table className="scripts-table">
                <thead>
                    <tr className="slds-text-title--caps">
                    <th scope="col">
                        <div className="slds-truncate" title="Script Name">Script Name</div>
                    </th>
                    <th scope="col">
                        <div className="slds-truncate" title="Created By">Created By</div>
                    </th>
                    <th scope="col">
                        <div className="slds-truncate" title="Created Date">Created Date</div>
                    </th>
                    <th scope="col">
                        <div className="slds-truncate" title="Last Modified">Last Date Modified</div>
                    </th>
                    <th scope="col">
                        <div className="slds-truncate" title="Last Modified">Last Modified By</div>
                    </th>
                    <th scope="col">
                        <div className="slds-truncate" title="Last Modified">Last Run Pass?</div>
                    </th>
                    <th className="slds-text-align--right" scope="col">
                        <div className="slds-truncate" title="Action">Action</div>
                    </th>
                    </tr>
                </thead>
                <tbody>
                {item}
                </tbody>
                </table>



        </div>
    );


};


const mapStateToProps = (state) => {
    return {
        scripts: state.scripts
    };
};

export default connect(mapStateToProps)(ScriptListItem);