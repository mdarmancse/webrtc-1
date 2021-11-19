import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Switch from "react-router";
import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";

class App extends Component {
    render() {
        return (
            <>

             <BrowserRouter>
                 <Switch>

                     <Route exact path='/' component={HomePage}/>
                     <Route exact path='/join' component={JoinPage}/>

                 </Switch>

             </BrowserRouter>

            </>
        );
    }
}

export default App;
