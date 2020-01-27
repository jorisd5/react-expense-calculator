import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CostsIndex extends Component {
  renderCosts() {
    // TODO
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog</h3>
          <Link to="/costs/new">
            Let`&apos`s add an expense.
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
