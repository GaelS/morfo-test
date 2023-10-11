import NextLink from "next/link";

export const Link = ({
  children,
  to,
}: {
  children: string;
  to: string;
}): JSX.Element => {
  return (
    <NextLink href={to}>
      <span className="text-blue-500 underline hover:no-underline">
        {children}
      </span>
    </NextLink>
  );
};
