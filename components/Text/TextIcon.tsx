type TextIconProps = {
  Icon: any;
  label?: string;
};

export const TextIcon: React.FC<TextIconProps> = ({ Icon, label }) => {
  return (
    <div className="flex items-center justify-center text-center">
      <Icon fontSize="24px" />
      <span className="ml-1">{label}</span>
    </div>
  );
};
