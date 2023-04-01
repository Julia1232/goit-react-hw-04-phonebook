import React from 'react';
import PropTypes from 'prop-types';

export function Filter({ onChangeFilter }) {
  return (
    <div>
      Find contacts by name
      <input type="text" onChange={onChangeFilter} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func,
};
