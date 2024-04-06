import { useEffect, useState } from 'react';

type DebouncedInputProps = {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
  className: string;
  placeholder: string;
};

export const DebouncedInput = ({
  value: initValue,
  onChange,
  debounce = 500,
  className,
  placeholder,
  ...props
}: DebouncedInputProps) => {
  const [value, setValue] = useState(initValue);
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  // *  0.5s after set value in state
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value, onChange, debounce]);

  return (
    <input
      {...props}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
