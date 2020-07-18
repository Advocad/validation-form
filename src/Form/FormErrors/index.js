import React from 'react';
import uuid from 'react-uuid';

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={uuid()}>
            {fieldName}
            {' '}
            {formErrors[fieldName]}
          </p>
        );
      }
      return '';
    })}
  </div>
);

export default FormErrors;
