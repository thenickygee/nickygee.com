'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TerminalAnimation = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = '\na human, a developer, an artist';

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText((prev) =>
        prev.length < fullText.length
          ? fullText.slice(0, prev.length + 1)
          : prev
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=''
      >
        <div className='bg-zinc-900 border-zinc-950 border-2 select-none text-white font-mono min-w-full w-full rounded-lg shadow-lg overflow-hidden'>
          <div className='bg-zinc-700 px-4 py-2 flex items-center'>
            <div className='flex space-x-1'>
              <div className='w-3 h-3 bg-red-500 rounded-full'></div>
              <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>
            <div className='ml-auto flex items-center gap-2'>
              <h2 className='text-lg font-bold ml-2 flex-grow'>Your Name</h2>
            </div>
          </div>
          <div className='p-4 text-green-400 glow'>
            <p>#.../yoursite.com:</p>
            <p> → whois yourname</p>
            <div className='flex'>
              <motion.code>
                {typedText.split('\n').map((line, index) => (
                  <>
                    <div
                      key={index}
                      className='text-green-400 text-shadow-green-500 glow'
                    >
                      {line}
                    </div>
                  </>
                ))}{' '}
              </motion.code>{' '}
              <span className='cursor-blink'>|</span>
            </div>
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        .cursor-blink {
          animation: blink-animation 1s steps(5, start) infinite;
        }
        @keyframes blink-animation {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </>
  );
};

export default TerminalAnimation;
