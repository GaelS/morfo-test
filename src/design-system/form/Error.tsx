export const Error = ({ children }: { children: string }): JSX.Element => (
  <div className="text-red-600 text-sm mb-4">{children}</div>
);
