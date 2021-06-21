import { AiOutlineYoutube, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

import { Header, ButtonList, BoxList, Title, VideoList, Footer, TextIcon, Newsletter } from '../components';

export default function Home() {
  return (
    <div className="mx-auto mt-2 p-8">
      <Header />

      <Title>Links 🔗</Title>
      <ButtonList
        items={[
          {
            label: <TextIcon label="YouTube" Icon={AiOutlineYoutube} />,
            href: 'https://youtube.com/channel/UCRGKl-hBInWSeAHoQanqPCA',
          },
          {
            label: <TextIcon label="GitHub" Icon={AiOutlineGithub} />,
            href: 'https://github.com/leobritob',
          },
          {
            label: <TextIcon label="Instagram" Icon={AiOutlineInstagram} />,
            href: 'https://instagram.com/leobritob',
          },
        ]}
      />
      <div className="mb-4" />

      <Title>Cursos ⚡️</Title>
      <BoxList
        items={[
          { subTitle: 'CURSO', title: 'NestJS', buttonLabel: 'EM BREVE', disabled: true },
          { subTitle: 'CURSO', title: 'ReactJS', buttonLabel: 'EM BREVE', disabled: true },
          { subTitle: 'CURSO', title: 'React Native', buttonLabel: 'EM BREVE', disabled: true },
        ]}
      />

      <Title>Fique sabendo ANTES de todo mundo 🔥</Title>
      <Newsletter />
      <div className="mb-4" />

      <Title>Vídeos recentes 🚀</Title>
      <VideoList
        items={[
          { youtubeId: 'AW_rSUpDBRo', title: 'Criando Projeto React com TypeScript do Zero - TODOApp' },
          { youtubeId: 'p1hzHVgG6bI', title: 'Testes Unitários com NestJS do ZERO - Parte 1 - TODOApp' },
          { youtubeId: 'igrlZqviOiI', title: 'Testes Unitários com NestJS do ZERO - Parte 2 - TODOApp' },
        ]}
      />

      <Footer />
    </div>
  );
}
