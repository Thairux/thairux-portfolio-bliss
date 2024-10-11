import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/profile-picture.jpg" alt="Peter Thairu Muigai" className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Welcome to Thairux</h1>
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
            Hi, I'm Peter Thairu Muigai, a passionate full stack developer with expertise in modern web technologies.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Skills</h2>
            <div className="flex flex-wrap justify-center md:justify-start">
              {['React', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL', 'AWS'].map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;