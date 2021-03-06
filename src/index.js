import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import DashboardContainer from './components/DashboardContainer';
import scriptsReducer from './reducers/scriptsReducer';
import './styles/base/base.css';
import Home from './components/Home';

const store = createStore(
    combineReducers({
        scripts: scriptsReducer
    })
);

const jsx = (

    <Provider store={store}>
        <Home/>
    </Provider>
)



ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
