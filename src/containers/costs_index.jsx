import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CostsIndex extends Component {
  renderCosts() {
    return this.props.costs.map((cost) => {
      return (
        <Link to={`/costs/${cost.id}`} key={cost.id}>
          <div className="cost-item">
            <h3>{cost.title}</h3>
            <p>{cost.content}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog</h3>
          <Link className="btn-expense" to="/costs/new">
            Let&apos;s add an expense.
          </Link>
        </div>
        {this.renderCosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    costs: state.costs
  };
}

export default connect(mapStateToProps)(CostsIndex);
