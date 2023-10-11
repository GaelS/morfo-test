export const Label = ({
  id,
  children,
}: {
  id: string;
  children: string;
}): JSX.Element => (
  <label htmlFor={id} className="block text-gray-600 text-sm font-bold mb-2">
    {children}
  </label>
);
