import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCosts } from '../actions';
import { fetchMonthsCosts } from '../actions';

const getCurrentMonth = () => {
  const currentDate = Date.now();
  const options = { month: 'long' };
  return new Intl.DateTimeFormat('en-US', options).format(currentDate);
};

class CostsIndex extends Component {
  componentWillMount() {
    this.props.fetchCosts();
    this.props.fetchMonthsCosts();
  }

  renderCosts() {
    console.log(this.props.costs);
    return this.props.costs.map((cost) => {
      return (
        <Link to={`/costs/${cost.id}`} key={cost.id}>
          <div className="cost-item">
            <h3>{cost.description}</h3>
            <p>Total this month: {cost.amount} €</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Costs</h3>
          <h2>{getCurrentMonth()}</h2>
          <Link className="btn-expense" to="/costs/new">
            <span>Let&apos;s add an expense.</span>
          </Link>
        </div>
        {this.renderCosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    costs: state.costs,
    monthsCosts: state.monthsCosts
  };
  console.log(costs);
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCosts, fetchMonthsCosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CostsIndex);
