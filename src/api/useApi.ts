import { useEffect, useState } from 'react';

interface inputsData {
  name: string;
  value: null | string;
}

const useApi = (inputsData: inputsData[]) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState(inputsData);

  const controller = new AbortController();
  const signal = controller.signal;

  const getValueByName = (inputName: string) => {
    return value.find(({ name }) => name === inputName)?.value;
  };

  const apiCall = async () => {
    try {
      const response = await fetch(
        `https://cataas.com/cat/says/${getValueByName(
          'Text'
        )}?color=${getValueByName('Color')}`,
        {
          signal,
        }
      );
      if (response.status !== 200) {
        setError('Cat could not be generated');
      }
      const body = await response.arrayBuffer();
      const blob = new Blob([body]);
      const url = URL.createObjectURL(blob);

      setData(url);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError('Cat could not be generated');
      return error;
    }
  };

  useEffect(() => {
    setError(null);
    if (!getValueByName('Text')) {
      setData(null);
      setIsLoading(false);
      controller.abort();
      return;
    }

    const delay = setTimeout(() => {
      setData(null);
      setIsLoading((prevStatus) => !prevStatus);
      apiCall();
    }, 1000);

    return () => {
      setData(null);
      setIsLoading(false);
      controller.abort();
      clearTimeout(delay);
    };
  }, [value]);

  return { isLoading, setValue, data, error };
};

export default useApi;
