import RadioInput from './radioInput/radioInput';
import TextInput from './textInput/textInput';
import Label from './label/label';

import { InputList, InputProps } from './types';

import './input.scss';

const Input = (props: InputProps<InputList>) => {
  const renderInput = () => {
    switch (props.type) {
      case 'text':
        return <TextInput {...props} />;
      case 'radio':
        return <RadioInput {...props} />;
      default:
        return <div>WRONG INPUT TYPE</div>;
    }
  };

  return (
    <div className='input-container'>
      <Label label={props.label} />
      {renderInput()}
    </div>
  );
};

export default Input;
