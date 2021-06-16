import { Fragment } from 'react';
import { Button, ButtonProps } from './Button';

type ButtonListProps = {
  items: ButtonProps[];
};

export const ButtonList: React.FC<ButtonListProps> = ({ items }) => {
  return (
    <Fragment>
      {items.map((item, index) => (
        <Button key={index} {...item} />
      ))}
    </Fragment>
  );
};
