export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "normal",
  expand = false,
}: {
  children: string;
  onClick?: () => any;
  type?: "submit" | "button";
  variant?: "primary" | "secondary";
  size?: "small" | "normal";
  expand?: boolean;
}): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        variant === "primary"
          ? "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
          : "bg-slate-400 hover:bg-slate-500 focus:ring-blue-200"
      } text-white ${
        size === "normal" ? "text-base" : "text-xs"
      }  font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring
      ${expand ? "w-full" : ""}
      `}
    >
      {children}
    </button>
  );
};
