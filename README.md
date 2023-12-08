# Clone of nickygee.com

## Framework clone of nickygee.com.
![nickygee com](https://github.com/thenickygee/nickygee.com/assets/75292383/ee4098f2-fb86-4265-83cd-51b24be0a019)
![website](https://github.com/thenickygee/nickygee.com/assets/75292383/37581cc9-5767-40cb-8b73-2a0130d20f29)

## Features
A next.js site build with tailwind.css enhanced with framer motion and headlessUI.
- Terminal emulated header.
- Social links with Font Awesome Business Icons.
- Tools with tool tip.
- Contact form.
- Email sign up.
- Certificates.

## Code
All components are build with consts and mapping functions for scalabity: 
``` javascript

'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub ...
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
        backgroundColor: 'bg-blue-800',
        hoverbg: 'hover:bg-blue-700',
      },
      {
        id: 2,
        title: 'Github',
        description: '',
        icon: faGithub,
        link: 'https://github.com/thenickygee',
        backgroundColor: 'bg-zinc-800',
        hoverbg: 'hover:bg-zinc-950',
      },
    ]);
  }, []);

  return (
    <div className='mx-auto w-full flex '>
      <div className='grid grid-cols-2 gap-2 w-full'>
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
                    className={`${project.backgroundColor} ${project.hoverbg} shadow-sm p-1 h-14 px-3 flex justify-between items-center align-middle gap-2 font-semibold rounded-md text-gray-300 hover:text-gray-200 w-full transitions duration-150`}
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
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
