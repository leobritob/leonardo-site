export type ListItemProps = {
  label: string;
};

export const ListItem: React.FC<ListItemProps> = ({ label }) => {
  return <li className="text-sm text-left mb-2">{label}</li>;
};
