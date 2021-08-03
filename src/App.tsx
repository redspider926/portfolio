import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PageMain from './pages/main'
import './styles/index.scss'

const App: React.FC = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <PageMain />
            </Route>
            <Redirect to="/not-found" />
        </Switch>
    </BrowserRouter>
}

export default App