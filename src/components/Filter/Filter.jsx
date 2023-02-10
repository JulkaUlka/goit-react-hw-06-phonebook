import React from 'react';
import PropTypes from 'prop-types';
import { Block } from './Filter.styled';

export function Filter(props) {
  const { value, onChange } = props;
  return (
    <Block>
      <p>Find contacts by name</p>
      <input value={value} onChange={onChange} />
    </Block>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
