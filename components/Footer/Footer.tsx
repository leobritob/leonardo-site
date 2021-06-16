export const Footer: React.FC = () => {
  return (
    <div className="mt-20">
      <p className="text-white text-xs text-center">
        Leonardo Brito Bittencourt &copy; {new Date().getFullYear()} - Todos os direitos reservados
        <br />
        <span className="text-gray-300">CNPJ 30.718.759/0001-75</span>
      </p>
    </div>
  );
};
