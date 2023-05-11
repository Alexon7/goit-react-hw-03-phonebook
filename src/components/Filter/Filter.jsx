import PropTypes from 'prop-types';
import { Input, Text } from './Filter.styled';

export const Filter = ({ onInputChange }) => {
  return (
    <>
      <Text>Find contact by name</Text>
      <Input type="text" onChange={onInputChange} />
    </>
  );
};

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
