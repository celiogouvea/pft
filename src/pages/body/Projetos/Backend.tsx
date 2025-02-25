import { useState } from "react";
import "./Frontend.css";


const projects = [
  {
    name: "CRUD",
    link: "https://github.com/celiogouvea/crudTesteQA.git",
    description: "Aplicação simular CRUD alocado na memoria do navegador."
  },
  {
    name: "API - login NestJS",
    link: "https://github.com/celiogouvea/pomodoro",
    description: "Aplicação de desenvolvimetno de autenticação de usuário"
  },
];


function Backend() {

const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="container">
      {/* Lista de Projetos */}
      <div className="sidebar">
        <h1>Backend</h1>
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
  export default Backend