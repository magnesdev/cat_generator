import './label.scss';

interface LabelProps {
  label: string;
}

const Label = ({ label }: LabelProps) => {
  return (
    <label className='input-label' htmlFor={label}>
      {label}
    </label>
  );
};

export default Label;
