import React from 'react';

{/* <Rank
  name={this.state.user.name}
  entries={this.state.user.entries}
/>  */}

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;