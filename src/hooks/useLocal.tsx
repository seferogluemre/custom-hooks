import { useState } from "react";

const useLocal = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Hata var" + error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      const valueOfStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueOfStore);
      localStorage.setItem(key, JSON.stringify(valueOfStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];

  return <></>;
};

export default useLocal;
