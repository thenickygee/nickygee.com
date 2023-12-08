'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faDashboard } from '@fortawesome/free-solid-svg-icons';
// import Image from 'next/image';

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        title: 'Project Title',
        description: 'Project sub heading and details here.',
        icon: faDashboard,
        link: 'https://github.com/thenickygee/pm2-ui/',
        image: '/pm2.png',
      },
      {
        id: 2,
        title: 'Project 2 Title',
        description: 'Project sub heading and details here.',
        icon: faBookmark,
        link: 'https://bookmarkbar.io/',
        image: '/bbb.2.png',
      },
    ]);
  }, []);

  return (
    <div className='mx-auto w-full justify-center'>
      <div className='flex md:flex-row flex-col gap-2 w-full'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='w-full shadow-sm bg-zinc-950 border-zinc-950 border-2 rounded-lg hover:bg-zinc-900 pb-2 p-3 cursor-pointer hover:shadow-md transition-shadow select-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {/* <Image
              src={project.image}
              alt='text'
              width={700}
              height={700}
              className='w-full rounded-b-none rounded-t-lg'
            /> */}
            <div className='px-2 p-1'>
              <h3 className='text-md font-bold text-gray-200'>
                <FontAwesomeIcon icon={project.icon} className='mr-1' />{' '}
                {project.title}
              </h3>
              <p className='text-gray-300 text-sm'>{project.description}</p>
            </div>

            {project.link && (
              <button className='mt-2 w-full px-2'>
                <Link
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='bg-zinc-950 hover:bg-black text-sm text-mono font-semibold shadow-sm p-1 px-3 w-full rounded-md text-gray-300 hover:text-gray-200 transitions duration-150'>
                    VISIT
                  </button>
                </Link>
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
