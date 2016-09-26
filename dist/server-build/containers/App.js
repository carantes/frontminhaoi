import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Isvg from 'react-inlinesvg';
import { bindActionCreators } from 'redux';

import * as Actions from './../actions';


class App extends Component {
  render() {  
    let { title, logo } = this.props
    return ( 
      <div ref="wrapper" className="wrapper">
        <div className="form__message">
          <span className="form__logo">
            <Isvg src={ logo } /> 
          </span>
          <h1 className="form__title">{ title }</h1>
        </div>
        <div className="form__fields">
           {this.props.children}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) { 
  return {
    title : state.App.get('title'),
    logo : state.App.get('logo')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
