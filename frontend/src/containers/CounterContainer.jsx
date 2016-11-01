import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import Counter from '../components/Counter';

const CounterContainer = ({
  counter,
  actions,
}) => (
  <Counter
    count={counter.count}
    onClick={actions.increaseCount}
    //onClick={actions.increaseCountWithDelay}
  />
);

const mapState = (state, ownProps) => ({
  counter: state.counter,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(CounterContainer);
