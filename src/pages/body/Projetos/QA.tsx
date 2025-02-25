import { useState } from "react";
import "./Frontend.css";


const projects = [
  {
    name: "Cypress CRUD",
    link: "https://github.com/celiogouvea/QACypress",
    description: "Testes automatizados simulando inserção de dados em API"
  },
  {
    name: "Cypress Ecomerce",
    link: "https://github.com/celiogouvea/QACypressEcomerce",
    description: "Testes automatizados simulando compra basica loja online"
  },
  {
    name: "K6 performance",
    link: "https://github.com/celiogouvea/QAPerformanceK6",
    description: "Modelo de teste em scripts para de teste de desempenho"
  },
];


function QA() {

  
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  
    return (
      <div className="container">
        {/* Lista de Projetos */}
        <div className="sidebar">
          <h1>QA</h1>
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
  export default QA