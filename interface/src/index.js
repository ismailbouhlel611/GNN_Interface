import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from "history"; 

import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RTLLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import store from "./store";
import { Provider } from "react-redux";
import ResetPasswordConfirm from './views/auth/resetconfirm';
import ResetPassword from "./views/auth/reset";
import Activate from "./views/auth/activate";
import SignIn from "views/auth/signIn/index";
import SignUp from "views/auth/signUp";
import UserList from "views/admin/ListUser"
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <ThemeEditorProvider>
          <Router history={history}>
            <Switch>
              <Route path={`/auth`} component={AuthLayout} />
              <Route path={`/admin`} component={AdminLayout} />
              <Route path={`/rtl`} component={RTLLayout} />
              <Route path='/reset-password' component={ResetPassword} />
              <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
              <Route exact path='/activate/:uid/:token' component={Activate} />
              <Route exact path={'/'} component={SignIn}/>
              <Route exact path={'/sign-up'} component={SignUp}/>
              <Route exact path={'/list-users'} component={UserList}/>
            </Switch>
          </Router>
        </ThemeEditorProvider>
      </React.StrictMode>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
