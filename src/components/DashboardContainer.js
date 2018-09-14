import React from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ScriptList from './ScriptList';
import SideBar from './SideBar';
import DefaultPageContent from './DefaultContentPage';
import ViewScriptPage from './ViewScriptPage';
import EditScriptPage from './EditScriptPage';
import CreateScriptPage from './CreateScriptPage';


class DashboardContainer extends React.Component {
    render () {

        return (  

            <div>
                <div>
                    <Header/>
                    <SideBar/>
                </div>

                <BrowserRouter>
                    <div>
                        <Route path="/" component={DefaultPageContent} exact={true} />
                        <Route path="/scripts" component={ScriptList} exact={true}/>
                        <Route path="/scripts/:ScriptID" component={ViewScriptPage} exact={true}/>
                        <Route path="/scripts/edit/:ScriptID" component={EditScriptPage} exact={true}/>
                        <Route path="/create" component={CreateScriptPage} exact={true}/>
                    </div>
                </BrowserRouter>
            </div>
                


          
           
        );
    }
}

export default DashboardContainer;