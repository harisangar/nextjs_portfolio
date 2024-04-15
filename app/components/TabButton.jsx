import React from 'react';
import { motion } from 'framer-motion';

const varients = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white ' : 'text-[#ADB7BE] ';
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        variants={varients}
        animate={active ? 'active' : 'default'}
        className='h-1 bg-purple-500 mt-2 mr-3'
      ></motion.div>
    </button>
  );
};

export default TabButton;
