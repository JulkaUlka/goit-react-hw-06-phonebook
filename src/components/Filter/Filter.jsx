import React from 'react';
import PropTypes from 'prop-types';
import { Block } from './Filter.styled';
import { addFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();
  return (
    <Block>
      <p>Find contacts by name</p>
      <input onChange={event => dispatch(addFilter(event.target.value))} />
    </Block>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
