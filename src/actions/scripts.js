import uuid from 'uuid';
import moment from 'moment';
 
 
// add expense
export const createScript = (
    {
        ScriptName = 'default',
        CreatedDate = '',
        LastRunDate = '',
        LastDateFail,
        LastDateModified = '',
        LastModifiedBy = '',
        LastRunBy = '', 
        CreatedBy = 'default',
        ScriptDesc = ''
    } = {}
) => ({
    type: 'CREATE_SCRIPT',
    script: {
        ScriptID: uuid(),
        ScriptName,
        CreatedDate: moment().format('MMMM Do, YYYY : LT'),
        LastRunDate,
        LastDateFail,
        LastDateModified,
        LastModifiedBy,
        LastRunBy,
        CreatedBy,
        ScriptDesc
    }
});


// edit expense
export const editScript = (ScriptID, updates) => ({
    type: 'EDIT_SCRIPT',
    ScriptID, 
    updates
});
// remove expense
export const removeScript = ({ ScriptID } = {}) => ({
    type: 'REMOVE_SCRIPT',
    ScriptID 
});

export const viewScript = ({ ScriptID } = {}) => ({
    type: 'VIEW_SCRIPT',
    ScriptID 
});