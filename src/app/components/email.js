'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/yourendpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success('Form submitted successfully');
        setEmail('');
      } else {
        toast.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.65 }}
      className='flex flex-col items-center justify-center select-none border-zinc-950 border-2 rounded-lg p-3 bg-zinc-950 px-2 shadow-lg w-full'
    >
      <form
        onSubmit={handleSubmit}
        className='w-full px-2 bg-zinc-800 rounded-lg'
      >
        <div className='flex items-center py-2'>
          <input
            className='appearance-none bg-zinc-800 border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
            type='email'
            placeholder='Enter your email'
            aria-label='Email'
            value={email}
            autoComplete='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className='bg-zinc-950 hover:bg-black text-sm font-semibold  text-white p-2 px-4 rounded-md cursor-pointer select-none'
            type='submit'
          >
            Subscribe
          </button>
        </div>
      </form>
      <p className='pt-4 text-sm text-zinc-400 select-none font-semibold'>
        Some catchy text about joining your newsletter.
      </p>
    </motion.div>
  );
};

export default SubscribeForm;
