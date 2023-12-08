'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faLinux,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const ToolPopover = ({ tool }) => {
  return (
    <div className='relative group'>
      <button
        className={`${tool.backgroundColor} ${tool.hoverbg} ${tool.shadow} bg-zinc-950 backdrop-blur-sm transition duration-150 items-center flex align-middle justify-center gap-2 shadow-sm p-1 h-14 px-3 font-semibold rounded-md text-gray-300 hover:text-gray-200 w-full`}
      >
        <FontAwesomeIcon icon={tool.icon} className='h-8 w-8' />
      </button>
      <div className='hidden absolute z-10 min-w-full p-4 mt-2 bg-zinc-950 shadow-white/10 rounded-md shadow-xl group-hover:block'>
        <h3 className='text-lg font-semibold text-gray-50'>{tool.title}</h3>
        <p className='text-sm text-gray-100 md:w-40'>{tool.description}</p>
      </div>
    </div>
  );
};

// Tools component
const Tools = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        title: 'Node.js',
        description:
          "A JavaScript runtime built on Chrome's V8 engine, used for building fast and scalable network applications.",
        icon: faNodeJs,
        hoverbg: 'hover:bg-black',
        shadow: 'shadow-blue-500',
      },
      {
        id: 2,
        title: 'Git',
        description:
          'A distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
        icon: faGit,
        hoverbg: 'hover:bg-black',
        shadow: 'shadow-red-500',
      },
      {
        id: 3,
        title: 'HTML5',
        description:
          'The latest version of the HTML standard, providing the structure and content for the web.',
        icon: faHtml5,
        hoverbg: 'hover:bg-black',
        shadow: 'shadow-orange-500',
      },
      {
        id: 4,
        title: 'CSS',
        description:
          'A style sheet language used for describing the presentation of a document written in a markup language like HTML.',
        icon: faCss3,
        hoverbg: 'hover:bg-black',
        shadow: 'shadow-blue-500',
      },
      {
        id: 5,
        title: 'JavaScript',
        description:
          'A high-level, often just-in-time compiled language that conforms to the ECMAScript specification.',
        icon: faJs,
        hoverbg: 'hover:bg-black',
        shadow: 'shadow-yellow-500',
      },
      {
        id: 6,
        title: 'Linux',
        description:
          'A family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.',
        icon: faLinux,
        hoverbg: 'hover:bg-black',
        shadow: 'shadow-blue-500',
      },
    ]);
  }, []);

  return (
    <div className='mx-auto w-full flex'>
      <div className='gap-2 w-full grid grid-cols-3'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='rounded-md shadow-sm w-full cursor-pointer hover:shadow-md transition-shadow select-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <ToolPopover tool={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
