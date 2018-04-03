import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import {connect} from 'react-redux';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />           
          <div className="route-def">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  //children: PropTypes.object.isRequired,
  //loading: PropTypes.bool.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}


//export default connect(mapStateToProps)(App);
export default App;