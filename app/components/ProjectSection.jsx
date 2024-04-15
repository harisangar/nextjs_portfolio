'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { delay, motion, useInView } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: 'react portfolio website',
    description: 'project 1 description',
    image: '/images/1.jpg',
    tag: ['All', 'Web'],
    giturl: '/',
    previewurl: '/',
  },
  {
    id: 2,
    title: 'react portfolio website',
    description: 'project 2 description',
    image: '/images/2.jpg',
    tag: ['All', 'Mobile'],
    giturl: '/',
    previewurl: '/',
  },
  {
    id: 3,
    title: 'react portfolio website',
    description: 'project 3 description',
    image: '/images/3.jpg',
    tag: ['All', 'Web'],
    giturl: '/',
    previewurl: '/',
  },
  {
    id: 4,
    title: 'react portfolio website',
    description: 'project 4 description',
    image: '/images/4.jpg',
    tag: ['All', 'Mobile'],
    giturl: '/',
    previewurl: '/',
  },
  {
    id: 5,
    title: 'react portfolio website',
    description: 'project 5 description',
    image: '/images/5.jpg',
    tag: ['All', 'Web'],
    giturl: '/',
    previewurl: '/',
  },
  {
    id: 6,
    title: 'react portfolio website',
    description: 'project 6 description',
    image: '/images/6.jpg',
    tag: ['All', 'Mobile'],
    giturl: '/',
    previewurl: '/',
  },
];


const cardVarients={
  initial:{y:50,opacity:0},
  animate:{y:0,opacity:1},

 
}

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView= useInView(ref,{once:true});

  const [tag, setTag] = useState('All');

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filterProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section>
      <div id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4 '>
          My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
          <ProjectTag
            onClick={handleTagChange}
            name='All'
            isSelected={tag === 'All'}
          />
          <ProjectTag
            onClick={handleTagChange}
            name='Web'
            isSelected={tag === 'Web'}
          />
          <ProjectTag
            onClick={handleTagChange}
            name='Mobile'
            isSelected={tag === 'Mobile'}
          />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {filterProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVarients}
              initial='initial'
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgurl={project.image}
                giturl={project.giturl}
                previewurl={project.previewurl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
