import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Main from "../routes/Main";
import Quiz from "../routes/Quiz";
import Result from "../routes/Result";

function AppRouter ({typeObj}) {
    return (
        <Router>
            <Switch>
                <div style={{maxWidth: 890, width: "100%", margin: "0 auto", marginTop: 80, display: "flex", justifyContent: "center",}}>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/quiz">
                        <Quiz typeObj={typeObj} />
                    </Route>
                    <Route exact path="/result">
                        <Result typeObj={typeObj} />
                    </Route>
                </div>
            </Switch>
        </Router>
    )
}

export default AppRouter;