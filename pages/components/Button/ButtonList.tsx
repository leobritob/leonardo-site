import { Button, ButtonProps } from './Button';

type ButtonListProps = {
  items: ButtonProps[];
};

export const ButtonList: React.FC<ButtonListProps> = ({ items }) => {
  return items.map((item, index) => <Button key={index} {...item} />);
};
