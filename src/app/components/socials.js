'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faFacebook,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  const [projects, setSocials] = useState([]);

  useEffect(() => {
    setSocials([
      {
        id: 1,
        title: 'LinkedIn',
        description: '',
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/thenickygee/',
        backgroundColor: 'bg-zinc-950',
        hoverbg: 'bg-black',
        shadow: 'shadow-[#0A66C2]',
      },
      {
        id: 2,
        title: 'Github',
        description: '',
        icon: faGithub,
        link: 'https://github.com/thenickygee',
        backgroundColor: 'bg-zinc-950',
        hoverbg: 'bg-black',
        shadow: 'shadow-[#0A66C2]',
      },
      {
        id: 3,
        title: 'Twitter',
        description: '',
        icon: faXTwitter,
        link: 'https://twitter.com/thenickygee/',
        backgroundColor: 'bg-zinc-950',
        hoverbg: 'bg-black',
        shadow: 'shadow-[#0A66C2]',
      },
      {
        id: 4,
        title: 'Instagram',
        description: '',
        icon: faInstagram,
        link: 'https://bookmarkbar.io/nixxogee',
        backgroundColor: 'bg-zinc-950',
        hoverbg: 'bg-black',
        shadow: 'shadow-[#D300C595]',
      },
      {
        id: 5,
        title: 'Facebook',
        description: '',
        icon: faFacebook,
        link: 'https://bookmarkbar.io/nixxogee',
        backgroundColor: 'bg-zinc-950',
        hoverbg: 'bg-black',
        shadow: 'shadow-[#0A66C2]',
      },
      {
        id: 5,
        title: 'Behance',
        description: '',
        icon: faBehance,
        link: 'https://behance.com',
        backgroundColor: 'bg-zinc-950',
        hoverbg: 'bg-black',
        shadow: 'shadow-[#105BF2]',
      },
    ]);
  }, []);

  return (
    <div className='mx-auto w-full flex '>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-2 w-full'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className=' shadow-sm w-full border-zinc-950 border-2 rounded-lg cursor-pointer hover:shadow-md transition-shadow select-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {project.link && (
              <button className='w-full'>
                <Link
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className={`${project.backgroundColor} ${project.hoverbg} ${project.shadow} shadow-sm p-1 h-14 px-3 flex justify-between items-center align-middle gap-2 font-semibold rounded-md text-gray-300 hover:text-gray-200 w-full transitions duration-150`}
                  >
                    <FontAwesomeIcon icon={project.icon} className='h-5 w-5' />{' '}
                    {project.title}
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

export default Socials;
