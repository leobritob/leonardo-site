import { Button } from '../Button';

export type BoxProps = {
  title: string;
  subTitle: string;
  buttonLabel: string;
  href?: string;
  disabled?: boolean;
};

export const BoxItem: React.FC<BoxProps> = ({ title, subTitle, buttonLabel, href, disabled }) => {
  return (
    <div
      className="flex-1 w-full text-white border border-solid border-white border-opacity-25 rounded-md mb-2 sm:w-max sm:mx-1 p-4"
      style={{ minWidth: '350px' }}
    >
      <span className="text-white text-xs">{subTitle}</span>
      <p className="text-white text-xl">{title}</p>

      <Button label={buttonLabel} href={href || '#'} variant={`${disabled ? 'disabled' : 'default'} small`} />
    </div>
  );
};
