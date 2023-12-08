'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataJSON = JSON.stringify(formData);

    try {
      const response = await fetch('/api/general', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formDataJSON,
      });

      if (response.ok) {
        toast.success('Form submitted successfully');
        setFormData({ name: '', email: '', message: '' });
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
      transition={{ duration: 0.5, delay: 0.55 }}
      className='flex flex-col  justify-center p-2 w-full select-none bg-zinc-950 shadow-md border-zinc-950 border-2 rounded-lg'
    >
      <form onSubmit={handleSubmit} className='w-full px-2'>
        <h1 className='font-bold text-gray-200 mb-2'>Wanna chat?</h1>
        <div className='mb-4'>
          <input
            className='shadow appearance-none bg-zinc-800 placeholder:text-gray-400  rounded-md w-full py-2 px-3 text-gray-100  leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Your Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <input
            className='shadow bg-zinc-800 placeholder:text-gray-400 appearance-none  rounded-md w-full py-2 px-3 text-gray-100  leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Your Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mb-2'>
          <textarea
            className='shadow appearance-none bg-zinc-800 placeholder:text-gray-400  rounded-md w-full py-2 px-3 text-gray-100  leading-tight focus:outline-none focus:shadow-outline'
            id='message'
            placeholder='Your Message'
            name='message'
            rows='4'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <button
            className='bg-zinc-950 ml-auto text-sm hover:bg-black  text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline'
            type='submit'
          >
            <FontAwesomeIcon icon={faPaperPlane} /> Send
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
