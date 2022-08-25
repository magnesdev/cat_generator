import './formResult.scss';

interface FormResultProps {
  isLoading: boolean;
  data: string | null;
  error: string | null;
}

const FormResult = ({ isLoading, data, error }: FormResultProps) => {
  if (error) {
    return <>{error}</>;
  }
  if (!isLoading && data) {
    return <img className='image' src={data} alt='cat' />;
  }
  return <>{isLoading ? 'Loading...' : 'Use form to generate a cat'}</>;
};

export default FormResult;
