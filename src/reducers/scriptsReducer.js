const scripts = [{"ScriptID":"1","ScriptName":"Login to Epic","LastDateRun":"2018-08-25T02:02:09","LastDateModified":"2012-06-18T10:34:09","LastModifiedBy":"Caleb Bass","LastRunBy":"Chris Moss","CreatedBy":"Justin Davis","ScriptDesc":"Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Amet porttitor eget dolor morbi non. Risus ultricies tristique nulla aliquet enim tortor at auctor. Amet tellus cras adipiscing enim. Senectus et netus et malesuada fames. Mi tempus imperdiet nulla malesuada pellentesque. Pharetra sit amet aliquam id diam maecenas ultricies mi.", "CreatedDate": "1999-09-01 09:25:00"},
{"ScriptID":"2","ScriptName":"Add a Vendor to Epic","LastDateRun":"2018-08-18T12:02:09","LastDateModified":"2018-06-18T10:02:09","LastModifiedBy":"Justin Davis","LastRunBy":"Caleb Bass","CreatedBy":"Caleb Bass","ScriptDesc":"Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Et sollicitudin ac orci phasellus egestas tellus. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Velit laoreet id donec ultrices tincidunt arcu. Tortor consequat id porta nibh venenatis cras sed."},
{"ScriptID":"3","ScriptName":"Delete User from Epic","LastDateRun":"2018-08-31T01:22:09","LastDateModified":"2018-08-18T12:02:09","LastModifiedBy":"Justin Davis","LastRunBy":"Caleb Bass","CreatedBy":"Chris Moss","ScriptDesc":"Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. In hac habitasse platea dictumst vestibulum. In vitae turpis massa sed elementum tempus. Turpis egestas maecenas pharetra convallis posuere morbi leo.", "CreatedDate": "1900-01-01 00:00:00"}]


const scriptsReducer =  (state = scripts, action) => {
console.log(state);
    switch (action.type) {
        
        case 'CREATE_SCRIPT':
            return [
                ...state,
                action.script
            ];

        case 'VIEW_SCRIPT':
            return state.filter(({ ScriptID }) => ScriptID === action.ScriptID);
               // need to return an array or soemthing of all the current scripts and put in in a table or list

        case 'REMOVE_SCRIPT':
        return state.filter(({ ScriptID }) => ScriptID !== action.ScriptID);
        
        case 'EDIT_SCRIPT':

            return state.map((script) => {
                if (script.ScriptID === action.ScriptID){
                    return {
                        ...script,
                        ...action.updates   // adds all the object props then overrides any passed in with updates 
                    };
                } else {
                    return script;
                }
            });

        default: 
            return state;
    }
};

export default scriptsReducer;

