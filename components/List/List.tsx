import { ListItem, ListItemProps } from './ListItem';

type ListProps = {
  items: ListItemProps[];
};

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="sm:w-full w-full mb-1">
      {items.map((item, index) => (
        <ListItem key={index} label={item.label} />
      ))}
    </ul>
  );
};
