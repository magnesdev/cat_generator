import { ChangeEvent } from 'react';

export type InputProperties = {
  label: string;
  defaultValue?: string;
};

export type RadioInputProperties = InputProperties & {
  type: 'radio';
  values: string[];
};

export type TextInputProperties = InputProperties & {
  type: 'text';
};

export type InputList = TextInputProperties | RadioInputProperties;

export type InputProps<T> = T & {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
