import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCosts } from '../actions';
import { fetchMonthsCosts } from '../actions';

// const can only be used in ts file ? (when placing in class)
const getCurrentMonth = () => {
  const currentDate = Date.now();
  const options = { month: 'long' };
  return new Intl.DateTimeFormat('en-US', options).format(currentDate);
};

class CostsIndex extends Component {
  componentWillMount() {
    // this.props.fetchCosts();
    this.props.fetchMonthsCosts(this.props.monthsCostsFromUrl);
    console.log(this.props.monthsCostsFromUrl);
  }

  renderCosts = (monthsCosts) => {
    console.log(monthsCosts);
    return this.props.monthsCosts.map((cost) => {
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
          <Link to="/costs/new">
            <i className="fas fa-arrow-left" />
          </Link>
          <h2>{getCurrentMonth()}</h2>
          <Link to="/costs/new">
            <i className="fas fa-arrow-right" />
          </Link>
          <Link className="btn-expense" to="/costs/new">
            <span>Let&apos;s add an expense.</span>
          </Link>
        </div>
        {this.renderCosts()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    costs: state.costs,
    monthsCosts: state.monthsCosts,
    monthsCostsFromUrl: parseInt(ownProps.match.params.id, 10),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCosts, fetchMonthsCosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CostsIndex);
