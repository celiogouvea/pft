import gifImage from '/Programmer.gif';  // Ajuste o caminho conforme necessário
import '../Home/Home.css';  // Certifique-se de criar e importar o arquivo CSS corretamente

function Home() {

  const restartGif = (event: React.MouseEvent<HTMLImageElement>) => {
      const gif = event.currentTarget;
      const src = gif.src;
      gif.src = '';
      gif.src = src;
    };
  

  return (
    <div className="container">
      <div className="image-container">
        <a href="#">
          <img src={gifImage} alt="Animated GIF" className="gif-imageHome" onMouseEnter={restartGif} />
        </a>
      </div>
      <div className="text-container">
        <h1>Bem-vindo ao meu portfólio!</h1>
        <p className='pHome'>
          Sou o Célio, um desenvolvedor apaixonado por tecnologia e
          especializado em qualidade de software QA. Com alguns anos de experiência,
           me dedico a garantir que cada linha de código e
          cada funcionalidade entreguem valor real, eficiência e
          confiabilidade. Tenho um compromisso com a excelência
          e busco constantemente aprimorar minhas habilidades e conhecimentos
          para acompanhar as rápidas evoluções tecnológicas.
        </p>
        <p className='pHome'>
          Minha abordagem ao desenvolvimento é centrada na qualidade,
          utilizando as melhores práticas e metodologias para assegurar
          que os produtos sejam robustos, escaláveis e fáceis de manter.
          Seja na criação de novas aplicações ou na melhoria de sistemas
          existentes, minha prioridade é sempre entregar resultados que
          superem as expectativas.
        </p>
        <p className='pHome'>
          Navegue pelas abas deste site para conhecer mais sobre meus projetos, ver
          minha trajetória e caso queira deixar alguma mensagem será muito bem vinda.
        </p>
      </div>
    </div>
  );
}

export default Home;
