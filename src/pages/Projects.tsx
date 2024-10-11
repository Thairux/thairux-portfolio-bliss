import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
//projecst go here
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                  GitHub
                </a>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;