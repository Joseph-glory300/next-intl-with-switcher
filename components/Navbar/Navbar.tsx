import React from 'react';
import Image from 'next/image';
import Logo from '../public/assets/Logo.svg';
import User from '../public/assets/User.svg';
import Menu from '../public/assets/Menu.svg';
import LocaleSwitcher from '../LocaleSwitcher';

type Props = {};

const navLinks = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Blog' },
  { name: 'Learn More' },
];

const Navbar = (props: Props) => {
  return (
    <nav className="flex w-full items-center justify-between py-[16px] px-[20px] lg:container lg:mx-auto ">
      {/* logo and navlinks */}
      <div className="flex items-center">
        <div className="hidden lg:flex pl-[74px] gap-[56px]">
          {navLinks.map((item, index) => (
            <p
              key={index}
              className="text-[#36485c] font-medium cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="flex items-center gap-2">
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
