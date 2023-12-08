'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const Creds = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        title: 'Product-led',
        icon: faCertificate,
        link: 'https://www.credly.com/badges/c93861e9-cb80-47c4-ab1d-5daadb0ef2a5/public_url',
        image: '/certificate.png',
      },
      {
        id: 2,
        title: 'PSM I',
        icon: faCertificate,
        link: 'https://www.credly.com/badges/7e2420f4-f49d-4650-abdc-83e70ced552c/public_url',
        image: '/certificate.png',
      },
    ]);
  }, []);

  return (
    <motion.div
      className='rounded-md shadow-sm w-full items-center cursor-pointer hover:shadow-md transition-shadow select-none'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.75 }}
      class='div'
    >
      <div className='mx-auto w-full flex'>
        <div className='flex gap-4 w-full justify-end rounded-md p-2'>
          {projects.map((project) => (
            <motion.div key={project.id} className='flex flex-col items-center'>
              {project.link && (
                <>
                  <div className=' w-full justify-center flex flex-col items-center align-middle rounded-md p-1'>
                    <Link
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {' '}
                      <Image
                        src={project.image}
                        alt='text'
                        width={100}
                        height={100}
                      />
                      {/* <button className='mt-2 mb-2 mx-auto'>
                        <button className='bg-zinc-600 shadow-sm p-1 px-3 rounded-md text-gray-300 hover:text-gray-200'>
                          <FontAwesomeIcon icon={project.icon} />{' '}
                          {project.title}
                        </button>
                      </button>{' '} */}
                    </Link>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Creds;
