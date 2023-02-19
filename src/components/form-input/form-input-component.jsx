import PropTypes from 'prop-types';
import { Group, Input, FormInputLabel } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
    </Group>
  );
};

FormInput.propTypes = {
  label: PropTypes.string
};

export default FormInput;
