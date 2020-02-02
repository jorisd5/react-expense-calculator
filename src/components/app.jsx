import React from 'react';

import CostsIndex from '../containers/costs_index';

const App = (props) => {
  return (
    <div className="app-container">
      <CostsIndex monthsCostsFromParams={props.match.params.monthsCosts} />
    </div>
  );
};

export default App;
