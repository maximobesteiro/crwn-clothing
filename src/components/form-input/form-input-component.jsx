import PropTypes from 'prop-types';
import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string
};

export default FormInput;
