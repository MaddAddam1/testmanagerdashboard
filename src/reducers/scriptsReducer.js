const scripts = [{"ScriptID":"1","ScriptName":"Login to Epic","LastDateRun":"2018-08-25 02:02:09","LastDateModified":"2012-06-18 10:34:09","LastModifiedBy":"Caleb Bass","LastRunBy":"Chris Moss","CreatedBy":"Justin Davis","ScriptDesc":"Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Amet porttitor eget dolor morbi non. Risus ultricies tristique nulla aliquet enim tortor at auctor. Amet tellus cras adipiscing enim. Senectus et netus et malesuada fames. Mi tempus imperdiet nulla malesuada pellentesque. Pharetra sit amet aliquam id diam maecenas ultricies mi.", "CreatedDate": "1999-09-01 09:25:00", "LastRunPass": 1},
{"ScriptID":"2","ScriptName":"Add a Vendor to Epic","LastDateRun":"2018-08-18 12:02:09","LastDateModified":"2018-06-18 10:02:09","LastModifiedBy":"Justin Davis","LastRunBy":"Justin Davis","CreatedBy":"Caleb Bass","ScriptDesc":"Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Et sollicitudin ac orci phasellus egestas tellus. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Velit laoreet id donec ultrices tincidunt arcu. Tortor consequat id porta nibh venenatis cras sed.", "CreatedDate": "1977-11-21 12:05:00", "LastRunPass": 0},
{"ScriptID":"3","ScriptName":"Delete User from Epic","LastDateRun":"2018-08-31 01:22:09","LastDateModified":"2018-08-18 12:02:09","LastModifiedBy":"Justin Davis","LastRunBy":"Caleb Bass","CreatedBy":"Chris Moss","ScriptDesc":"Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. In hac habitasse platea dictumst vestibulum. In vitae turpis massa sed elementum tempus. Turpis egestas maecenas pharetra convallis posuere morbi leo.", "CreatedDate": "1900-01-01 00:00:00", "LastRunPass": 1},
{"ScriptID":"4","ScriptName":"Add User to Salesforce","LastDateRun":"2018-07-30 08:35:44","LastDateModified":"2018-08-22 08:14:19","LastModifiedBy":"Chris Moss","LastRunBy":"Chris Moss","CreatedBy":"Chris Moss","ScriptDesc":"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.", "CreatedDate": "1988-11-01 10:15:33", "LastRunPass": 1},
{"ScriptID":"5","ScriptName":"Add User to Connecture","LastDateRun":"2018-01-31 04:31:11","LastDateModified":"2018-08-12 11:22:29","LastModifiedBy":"Caleb Bass","LastRunBy":"Justin Davis","CreatedBy":"Chris Moss","ScriptDesc":"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. .", "CreatedDate": "1992-12-023 04:35:00", "LastRunPass": 1},
{"ScriptID":"6","ScriptName":"Query HPMS for ....","LastDateRun":"2018-08-22 07:27:03","LastDateModified":"2018-08-18 02:52:02","LastModifiedBy":"Justin Davis","LastRunBy":"Caleb Bass","CreatedBy":"Chris Moss","ScriptDesc":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", "CreatedDate": "1944-05-01 10:00:00", "LastRunPass": 0}
]

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

