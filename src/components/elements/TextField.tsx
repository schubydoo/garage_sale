interface OwnProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextField = ({ ...props }: OwnProps) => {
  return (
    <input
      className="text-sm placeholder-gray-400 rounded-xs border border-gray-300 appearance-none focus:outline-hidden focus:border-primary-600"
      type="text"
      {...props}
    />
  );
};
