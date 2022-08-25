import { ChangeEvent, useState } from 'react';
import { InputProps, RadioInputProperties } from '../types';

import './radioInput.scss';

const RadioInput = ({
  type,
  values,
  onChange,
  label,
  defaultValue,
}: InputProps<RadioInputProperties>) => {
  const [value, setValue] = useState(defaultValue);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setValue(e.target.value);
  };

  return (
    <fieldset className='radio-inputs-container'>
      {values.map((name) => (
        <label
          className='radio-inputs-container__box'
          key={name}
          htmlFor={name}
        >
          <input
            className='radio-inputs-container__input'
            type={type}
            value={name}
            name={label}
            checked={name === value}
            onChange={onChangeValue}
          />
          {name}
        </label>
      ))}
    </fieldset>
  );
};

export default RadioInput;
