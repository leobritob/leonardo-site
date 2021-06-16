import { List } from '../List';

export const Header = () => {
  return (
    <div className="bg-gray-100 rounded-md py-8 px-4 flex flex-wrap items-center justify-center shadow-xl">
      <div className="flex flex-wrap items-center justify-center mb-5">
        <div className="w-12 h-12 rounded-full bg-leonardo bg-no-repeat bg-top bg-cover mr-2"></div>
        <div className="text-left mr-5">
          <h2 className="text-sm">Olá, me chamo</h2>
          <h1 className="text-xl">
            <span className="font-bold">Leonardo Brito</span>
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-wrap">
        <List
          items={[
            { label: 'Te ajudo a ser um desenvolvedor desejado e bem pago no mercado de TI com Javascript' },
            { label: '🔥 Desenvolvedor Full Stack' },
            { label: '👨🏻‍💻 Programador desde 2011' },
          ]}
        />
      </div>
    </div>
  );
};
