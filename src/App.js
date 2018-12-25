import React, { Component } from 'react';
import './assets/App.css';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import StatisticPage from './pages/StatisticPage/StatisticPage';
import ContactDetails from './pages/ContactDetailsPage/ContactDetailsPage'
import UserService from './services/UserService'
import SignupPage from './pages/Signup/Signup'
import ContactEditPage from './pages/ContactEditPage/ContactEditPage'
import { inject } from 'mobx-react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';


const PrivateRoute = (props) => {
  return props.user ? <Route {...props} /> : <Redirect to="/signup" />
}

@inject('store')
class App extends Component {
  state = {
    user: UserService.loadUser()
  }

  setUser(user) {
    this.setState({ user })
  }

  render() {
    return (
      <Router>

        <div className="App">
          <nav>
            <ul>
              <NavLink exact to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/contact">
                <li>contact page</li>
              </NavLink>
              <NavLink to="/StatisticPage">
                <li>Statistic Page</li>
              </NavLink>
            </ul>
          </nav>

          <Switch>
            <PrivateRoute user={this.state.user} path="/" exact component={HomePage} />
            <PrivateRoute user={this.state.user} path="/StatisticPage" component={StatisticPage} />
            <PrivateRoute
              user={this.state.user}
              path="/contact/edit/:id?"
              render={props => {
                return <ContactEditPage {...props} />;
              }}
            />
            <PrivateRoute
              user={this.state.user}
              path="/contact/:id"
              render={props => {
                return <ContactDetails {...props} />;
              }}
            />

            <Route path="/signup" render={props => {
              return <SignupPage {...props} setUser={this.setUser.bind(this)} />
            }} />
            <PrivateRoute user={this.state.user} path="/contact" component={ContactPage} />

          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
