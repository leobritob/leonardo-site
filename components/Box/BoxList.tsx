import { BoxItem, BoxProps } from './BoxItem';

type BoxListProps = {
  items: BoxProps[];
};

export const BoxList: React.FC<BoxListProps> = ({ items }) => {
  return (
    <div className="sm:flex sm:flex-wrap">
      {items.map((item, index) => (
        <BoxItem key={index} {...item} />
      ))}
    </div>
  );
};
