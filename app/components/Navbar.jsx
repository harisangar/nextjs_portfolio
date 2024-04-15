"use client"
import Link from 'next/link';
import React,{useState} from 'react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid';



const navlinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];
const Navbar = () => {

    const [navbarOpen,setNavbarOpen]=useState(false);
  return (
    <nav className='fixed  border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link
          className=' text-2xl md:text-5xl text-white font-semibold'
          href={'/'}
        >
          Logo
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex item-center px-3 text-slate-200 py-2 border rounded hover:text-white hover:border-white border-slate-200'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex item-center px-3 text-slate-200 py-2 border rounded hover:text-white hover:border-white border-slate-200'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block  md:w-auto ' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} href={link.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={navlinks} /> : null}
    </nav>
  );
};

export default Navbar;
