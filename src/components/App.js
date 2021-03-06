import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/Streamlist';
import Streamshow from './streams/StreamShow';

import history from '../history';
import Header from './Header';


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={Streamshow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;


//<Header /> hbe 15 line e but amra header er vitore link use korsi seijonne header <BrowserRouter /> er vitore hbe