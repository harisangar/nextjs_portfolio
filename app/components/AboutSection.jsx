'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { dev } from '../../public/images';
import TabButton from '../components/TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Nodejs</li>
        <li>Express</li>
        <li>Nodejs</li>
        <li>Express</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Fullstack academy of code </li>
        <li>South easter university of srilanka</li>
        <li>GPA:3.42</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>certification1</li>
        <li>certification2</li>
        <li>certification3</li>
        <li>certification4</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending,startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  return (
    <section id='about' className='text-white '>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src={dev} width={500} height={500} className='rounded-lg' />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4 mt-2'>About Me</h2>
          <p className='text-base md:text-lg'>
            I am a Full stack developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            javascript, react, redux, nodejs, Express, PostgreSql, HTML, Css and
            git. I am a quick learner and i am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.{' '}
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              Certifications
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t)=>t.id === tab).content}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
