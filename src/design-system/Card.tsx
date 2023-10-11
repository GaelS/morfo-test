"use client";

import React from "react";
import { LoadingSpinner } from "./Loader";
import { IconButton } from "./IconButton";

export function Card({
  id,
  title,
  description,
  imageUrl,
  actions,
}: {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  actions?: {
    delete?: (id: string) => any;
    edit?: (id: string) => Promise<void>;
  };
}): JSX.Element {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl relative mb-3 h-36">
      <div className="flex h-full">
        <div className="md:flex-shrink-0 h-full w-1/3">
          <img
            className="h-full object-cover md:w-48"
            src={imageUrl}
            alt="Image Alt Text"
          />
        </div>
        <div className="p-8 flex-grow-1">
          <a
            href={`/edit/${id}`}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500">{description}</p>
          {actions?.delete !== undefined ? (
            <div className="absolute bottom-2 right-2">
              <IconButton
                icon="delete"
                onClick={async () => {
                  await actions.delete?.(id);
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
