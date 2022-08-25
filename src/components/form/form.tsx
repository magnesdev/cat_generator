import { InputList } from '../inputs/types';
import Input from '../inputs/input';

import './form.scss';
import useApi from '../../api/useApi';
import FormResult from '../formResult/formResult';
import { ChangeEvent } from 'react';

const searchInputList: InputList[] = [
  { type: 'text', label: 'Text' },
  {
    type: 'radio',
    defaultValue: 'Green',
    label: 'Color',
    values: ['Green', 'Red', 'Blue'],
  },
];

const Form = () => {
  const { data, setValue, isLoading, error } = useApi(
    searchInputList.map((input) => ({
      name: input.label,
      value: input.defaultValue || null,
    }))
  );

  const onChangeValueUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const inputTargetName = e.target.name as string;
    const inputTargetValue = e.target.value as string;

    setValue((values) => {
      return values.map((element) =>
        element.name === inputTargetName
          ? { ...element, value: inputTargetValue }
          : element
      );
    });
  };

  return (
    <form className='search-container'>
      <div className='search-container__inputs-box'>
        {searchInputList.map((input) => (
          <Input key={input.label} {...input} onChange={onChangeValueUpdate} />
        ))}
      </div>

      <div className='search-container__result-box'>
        <FormResult isLoading={isLoading} data={data} error={error} />
      </div>
    </form>
  );
};

export default Form;
