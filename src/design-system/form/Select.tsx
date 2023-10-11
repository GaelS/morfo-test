import React from "react";
import { CommonInputProps } from "./types";
import { Label } from "./Label";
import { Error } from "./Error";

type SelectProps = React.HTMLProps<HTMLSelectElement> &
  CommonInputProps & {
    options: Array<{ id: string; value: string }>;
  };

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { id, label, placeholder, options, error, ...rest }: SelectProps,
    ref
  ): JSX.Element => {
    return (
      <div className="mb-4">
        <Label id={id}>{label}</Label>
        <select
          ref={ref}
          {...rest}
          id={id}
          name={id}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded p-2"
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          ))}
        </select>
        {error && <Error>Ce champ est requis</Error>}
      </div>
    );
  }
);
Select.displayName = "Select";
