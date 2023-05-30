/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, id, className }) => (
  <input type={type} id={id} className={className} />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Input;
