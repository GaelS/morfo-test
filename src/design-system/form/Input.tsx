import React from "react";
import { Error } from "@/design-system/form/Error";
import { CommonInputProps } from "./types";
import { Label } from "./Label";
type InputProps = React.HTMLProps<HTMLInputElement> & CommonInputProps;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type, error, placeholder, ...rest }, ref): JSX.Element => {
    return (
      <div className="mb-4">
        <Label id={id}>{label}</Label>
        <input
          ref={ref}
          {...rest}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded p-2"
        />
        {error && <Error>Ce champ est requis</Error>}
      </div>
    );
  }
);

Input.displayName = "Input";
