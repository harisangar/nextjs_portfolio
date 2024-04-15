import React from 'react';
import github from '../../public/icons/github.svg';
import linkedin from '../../public/icons/linkedin.svg';
import Image from 'next/image';
import Link from 'next/link';

const EmailSection = () => {
  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I'm currently looking for new opportunities, my inbox is always open.
          whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className='socials flex flex-grow gap-2'>
          <Link href='github.com'>
            <Image height={90} width={90} src={github} alt='github' />
          </Link>
          <Link href='linkedin.com'>
            <Image height={100} width={100} src={linkedin} alt='linkedin' />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col gap-4'>
          <label
            className='text-white block mb-2 text-sm font-medium'
            htmlFor='email'
          >
            Your Email
          </label>
          <input
            type='email'
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100  text-sm rounded-lg block w-full p-2.5 '
            id='email'
            required
            placeholder='example@gmail.com'
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
