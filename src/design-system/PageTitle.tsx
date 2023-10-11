"use client";
import { useRouter } from "next/navigation";
import { IconButton } from "./IconButton";

export const PageTitle = ({
  children,
  showBackLink = false,
}: {
  children: string;
  showBackLink?: boolean;
}): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex items-center">
      {showBackLink ? (
        <div className="mr-10">
          <IconButton icon="back" onClick={() => router.back()} />
        </div>
      ) : null}
      <h1 className="text-4xl font-extrabold text-blue-600 my-10">
        {children}
      </h1>
    </div>
  );
};
