import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">About Me</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <img src="/Profile-picture.jpeg" alt="Your Name" className="rounded-full w-32 h-32 mx-auto mb-6 object-cover" />
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Hello! I'm Peter Thairu Muigai , a passionate full stack developer.
          I specialize in building robust and scalable solutions using modern technologies and best practices.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          My journey in software development began in 2019 at SEKU university . Since then,I have joine Kabarak University. 
          I always striving to deliver high-quality code and exceptional user experiences.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Experience</h2>
        <ul className="list-disc list-inside mb-6 text-gray-600 dark:text-gray-300">
        <li>Freelance Web Developer (since 2022 )</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Education</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Studying for Bachelor's Degree in Computer Science from Kabarak University 
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Interests</h2>
        <p className="text-gray-600 dark:text-gray-300">
          When I'm not coding, you can find me Gaming , Hiking and Reading novels and manga . I'm always eager to learn new technologies 
          and contribute to open-source projects in my free time.
        </p>
      </div>
    </div>
  );
};

export default About;