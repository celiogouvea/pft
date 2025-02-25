import { useState } from "react";
import "./Frontend.css"; // Importando os estilos

const projects = [
  {
    name: "Afs Termo Responsabilidade",
    link: "https://github.com/celiogouvea/AfsTermoResponsabilidade",
    description: "Aplicação para preenchimento de termos de responsabilidade de uso de equipamentos."
  },
  {
    name: "Pomodoro Web",
    link: "https://github.com/celiogouvea/pomodoro",
    description: "Aplicação web baseada na técnica Pomodoro para produtividade."
  },
  {
    name: "Portfólio",
    link: "https://github.com/celiogouvea/pft",
    description: "Meu portfólio pessoal para apresentar meus projetos."
  }
];

function Frontend() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="container">
      {/* Lista de Projetos */}
      <div className="sidebar">
        <h1>Frontend</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <button onMouseEnter={() => setSelectedProject(project)}>
                {project.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Detalhes do Projeto */}
      <div className="details">
        <h2>{selectedProject.name}</h2>
        <p>{selectedProject.description}</p>
        <a href={selectedProject.link} target="_blank">Ver no GitHub</a>
      </div>
    </div>
  );
}

export default Frontend;
