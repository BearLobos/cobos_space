import React from 'react'
import Nav from "./components/Nav"
import About from "./components/About"
import MemeForm from './components/MemeForm'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/cobos_space" component={About}/>
                <Route path="/meme-generator" component={MemeForm}/>
            </Switch>
        </Router>
    )
}

export default App
