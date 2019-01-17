import React from 'react';
import './styles.scss';

const Value = ({ value }) => {
  const evenEnabled = typeof value === 'object';
  if (!value) {
    return null;
  }
  return (
    <div className="value">
      <h1>{evenEnabled ? value.number : value}</h1>
      {evenEnabled ? <h3>{value.status ? 'Even' : 'Odd'}</h3> : null}
    </div>
  );
};

export default Value;
