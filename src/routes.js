import React from "react"
import { BrowserRouter, Switch , Route} from "react-router-dom"

import Main from "./pages/main/index"
import Profile from "./pages/profile/index"
import Profile2 from "./pages/profilehooks/index"

const Routes = () => (
    <BrowserRouter>
        <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/profile/:id" component={Profile}/>
                <Route exact path="/profilehooks/:id" component={Profile2}/>
        </Switch>
    </BrowserRouter>
    
)

export default Routes