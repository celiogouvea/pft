import './Sobre.css'
import { useState, useEffect } from 'react';
import QA from '../../../assets/QA engineers.gif';
import CPS from '../../../assets/Cross-platform software.gif';
import Remote from '../../../assets/Remote meeting.gif';
import Public from '../../../assets/Public health.gif';
import Live from '../../../assets/Live collaboration.gif';

function Sobre() {


  function calcularIdade(dataNascimento: any) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let meses = hoje.getMonth() - nascimento.getMonth();

    if (meses < 0) {
      idade--;
      meses += 12;
    }

    return { idade: idade, meses: meses };
  }
  const dataNascimento = '1986-12-21';
  const [idade, setIdade] = useState({ idade: 0, meses: 0 });

  useEffect(() => {
    const idadeCalculada = calcularIdade(dataNascimento);
    setIdade(idadeCalculada);
  }, [dataNascimento]);

  return (
    <div className='container'>

      <div>
        <p className='pSobre'>
          Olá! Sou Célio Gomes Gouvêa, tenho {idade.idade} anos meses, minha carreira começou com o serviço público e à tecnologia. Ao longo de minha trajetória profissional, tive a oportunidade de atuar em diversos setores, sempre com respeito e dedicação aos usuários que confiaram no meu trabalho.
        </p>
        <div className="hint"><a className='aHint'>+</a></div>
        <img src={Public} alt="Animated GIF" className="gif-image" />
        <p className='pSobre'>
          Iniciei minha carreira no setor público, onde estive por vários anos, comprometido com o serviço de qualidade para a população. Durante esse tempo, aprendi a importância do comprometimento com o trabalho e com as pessoas. Essa experiência foi fundamental para minha transição para a área de tecnologia, onde encontrei novos desafios e possibilidades de crescimento.
        </p>
      </div>
      <div>
        <p className='pSobre'>
          Há 12 anos, decidi migrar para a área de tecnologia ingressando ensino superior no Curso de Sistema da Informação pela Faculdade Estadual do Tocantins - UNITINS e a 6 anos alcei definitivamente para a área e aceitei o desafio de atuar como responsável pelo núcleo de TI do Instituto de Previdência do Município de Palmas. Nesse período, fui encarregado de tarefas como:
        </p>
        <p className='pSobre'>
          Desenvolvimento da página institucional (backend e frontend)
          Gerenciamento da infraestrutura local
          Atendimento e suporte através de helpdesk
          Esses desafios, embora exigentes, foram fundamentais para o meu crescimento. Durante esse tempo, pude aprimorar habilidades tanto técnicas quanto de gestão, sempre com foco na melhoria contínua.
        </p>
        <div className="hint"><a className='aHint'>+</a></div>
        <img src={CPS} alt="Animated GIF" className="gif-image" />
      </div>
      <div>
        <p className='pSobre'>
          Aprofundamento no Desenvolvimento e Qualidade de Software
          Após minha experiência em TI institucional, decidi dar um passo a mais em minha carreira, assumindo a posição de engenheiro de software. Nesse novo desafio, pude aprofundar ainda mais os conhecimentos acadêmicos que adquiri ao longo dos anos, especialmente em linguagens como Node.js, PHP e no trabalho com bancos de dados.
        </p>
        <div className="hint"><a className='aHint'>+</a></div>
        <img src={QA} alt="Animated GIF" className="gif-image" />
        <p className='pSobre'>
          Contudo, o maior aprendizado que tive foi na área de Qualidade de Software (QA), onde pude me especializar e aplicar os conceitos do ciclo de vida de desenvolvimento de software de forma prática e detalhada. O trabalho de um QA, com ênfase em automação, me permitiu realizar atividades como:
        </p>
      </div>
      <div>
        <div className="hint"><a className='aHint'>+</a></div>
        <img src={Remote} alt="Animated GIF" className="gif-image" />
        <p className='pSobre'>
          Planejamento e execução de testes automatizados: Desenvolver scripts que garantem que o software se comporte como esperado em diferentes cenários e plataformas.
          Desenvolvimento de estratégias de testes: Identificar e planejar as melhores abordagens para garantir a qualidade de cada versão do software.
          Acompanhamento de performance e segurança: Garantir que o software seja eficiente, seguro e livre de falhas.
        </p>
        <p className='pSobre'>
          Integração de ferramentas de automação: Implementação de ferramentas como Selenium, JUnit, TestNG, entre outras, para automatizar os testes e acelerar o processo de validação de código.
          Documentação e report de falhas: Analisar e reportar problemas encontrados durante os testes, fornecendo feedback para a equipe de desenvolvimento.
          Esse processo me ensinou a importância da qualidade e confiabilidade em todas as etapas do ciclo de vida do software, não só para melhorar a experiência do usuário, mas também para garantir a eficiência e o sucesso dos projetos.
        </p>
      </div>
      <div>
        <p className='pSobre'>
          Hoje, continuo minha jornada na área de tecnologia com a missão de melhorar constantemente a qualidade dos sistemas e processos em que estou envolvido. Busco sempre aprimorar minhas habilidades técnicas e também minhas capacidades de liderança e trabalho em equipe, pois acredito que o sucesso é fruto do esforço coletivo e da dedicação constante.
        </p>
        <p className='pSobre'>
          Se você está procurando alguém com experiência em desenvolvimento, infraestrutura de TI e controle de qualidade de software, estou sempre disposição para novos desafios.
        </p>
        <div className="hint"><a className='aHint'>+</a></div>
        <img src={Live} alt="Animated GIF" className="gif-image" />
      </div>
    </div>
  );
}

export default Sobre;
