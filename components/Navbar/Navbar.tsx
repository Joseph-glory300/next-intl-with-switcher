import React from 'react';
import LocaleSwitcher from '../LocaleSwitcher';
import { useTranslations } from 'next-intl';

type Props = {};

const Navbar = (props: Props) => {
  const t = useTranslations('Navbar');

  const navLinks = [
    { name: t('home') },
    { name: t('about') },
    { name: t('blog') },
    { name: t('learnMore') },
  ];

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
