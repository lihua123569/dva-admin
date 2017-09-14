import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import main from './routes/main';
import Users from "./routes/Users.js";
 
function RouterConfig({ history,app }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/main"   component={main} >
      	<Route path="/error404"   component={require("./routes/error404")} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
