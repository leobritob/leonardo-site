import classNames from 'classnames';

export type ButtonProps = {
  label: string | JSX.Element;
  href?: string;
  variant?: string;
};

export const Button: React.FC<ButtonProps> = ({ label, href, variant = 'default' }) => {
  return (
    <a
      className={classNames(
        'w-full block rounded-md text-center space-y-4 my-2',
        { 'bg-gradient-to-r from-blue-500 to-green-500': variant.includes('default') },
        { 'bg-gray-700': variant.includes('disabled') },
        { 'p-4': !variant.includes('small') },
        { 'p-2': variant.includes('small') }
      )}
      {...(variant.includes('disabled') ? {} : { href, target: '_blank' })}
    >
      <p className="text-white">{label}</p>
    </a>
  );
};
