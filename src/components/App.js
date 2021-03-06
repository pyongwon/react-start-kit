import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import {connect} from 'react-redux';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ContactPage from './contact/ContactPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="route-def container-fluid">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  //loading: PropTypes.bool.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

//export default connect(mapStateToProps)(App);
export default App;