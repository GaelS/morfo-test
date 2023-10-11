import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { Error } from "@/design-system/form/Error";

const IMAGE_FALLBACK = "https://placehold.co/150x150/3B8BF6/FFFFFF/?text=...";

export const FileInput = ({
  name,
  currentFile,
  defaultUrl,
  onChange,
  error,
}: {
  name: string;
  currentFile?: File;
  defaultUrl?: string;
  onChange: (event: File) => void;
  error: boolean;
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const src = currentFile
    ? /*useful to generate the image's src to display an image preview*/ URL.createObjectURL(
        currentFile
      )
    : defaultUrl;
  return (
    <div className="flex flex-col">
      <Image
        alt="Image to upload"
        src={src ?? IMAGE_FALLBACK}
        loader={() =>
          /* hacky way to get a fallback image from placeholder.co*/ src
            ? src
            : IMAGE_FALLBACK
        }
        height={160}
        width={160}
        className="self-end w-full"
      />
      <input
        ref={fileInputRef}
        hidden
        name={name}
        type="file"
        defaultValue={currentFile?.name}
        onChange={(event) => {
          if (event.target.files) {
            onChange(event.target.files[0]);
          }
        }}
      />
      <div className="w-full flex justify-center -mt-24 md:mt-2">
        <Button
          variant="secondary"
          size="small"
          onClick={() => fileInputRef.current?.click()}
        >
          Uploader une image
        </Button>
      </div>
      {error ? (
        <div className="w-full flex justify-end mt-2">
          <Error>Un fichier est requis !</Error>
        </div>
      ) : null}
    </div>
  );
};
