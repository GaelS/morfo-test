import React from "react";
import { Label } from "./Label";
import { Error } from "./Error";
import { CommonInputProps } from "./types";

type TextAreaProps = React.HTMLProps<HTMLTextAreaElement> & CommonInputProps;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, label, type, error, placeholder, ...rest }, ref): JSX.Element => {
    return (
      <div className="mb-4">
        <Label id={id}>{label}</Label>
        <textarea
          ref={ref}
          {...rest}
          id={id}
          name={id}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded p-2"
          rows={4}
        />
        {error && <Error>Ce champ est requis</Error>}
      </div>
    );
  }
);

TextArea.displayName = "DisplayName";
