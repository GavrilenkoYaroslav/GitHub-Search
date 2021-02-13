import React from 'react';
import './App.css';
import {withSuspense} from "./hoc/withSuspense";
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Header} from "./components/Header";

const NotFound = React.lazy(() => import('./pages/NotFound'));
const UserPage = React.lazy(() => import('./pages/UserPage'));

export const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="app">
                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => <HomePage/>}/>
                    <Route exact path={'/user/:login'} render={ withSuspense(UserPage) }/>
                    <Route exact path={'/404'} render={ withSuspense(NotFound) }/>
                    <Route path={'*'} render={() => <Redirect to={'/404'}/>}/>
                </Switch>
            </div>
        </HashRouter>
    );
};