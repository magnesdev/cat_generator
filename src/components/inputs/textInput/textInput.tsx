import { InputProps, TextInputProperties } from '../types';
import './textInput.scss';

const TextInput = ({
  label,
  type,
  onChange,
}: InputProps<TextInputProperties>) => {
  return (
    <input
      name={label}
      className='text-input'
      type={type}
      onChange={onChange}
    />
  );
};

export default TextInput;
