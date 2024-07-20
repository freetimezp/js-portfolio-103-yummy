import React from "react";

import { IoCartOutline } from "react-icons/io5";

import logoImage from "../../assets/food/logo.png";

import { motion } from "framer-motion";

const navMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    delay: 0.1
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2
  },
  {
    id: 3,
    title: "Menu",
    path: "/menu",
    delay: 0.3
  },
  {
    id: 4,
    title: "Delivery",
    path: "/delivery",
    delay: 0.4
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    delay: 0.5
  }
];

const SlideDown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .8,
        delay: delay
      }
    }
  }
};

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center font-league">
        {/* logo */}
        <motion.img
          src={logoImage}
          alt="logo"
          className="w-36"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: .8,
            delay: .5
          }}
        />

        {/* menu */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {navMenu.map((menu, i) => (
              <motion.li
                key={i}
                className="nav-menu"
                data-delay={menu.delay}
                variants={SlideDown(menu.delay)}
                initial="initial"
                animate="animate"
              >
                <a href={menu.path} className="inline-block px-2 py-2 text-2xl">
                  {menu.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* btn*/}
        <motion.div
          variants={SlideDown(1)}
          initial="initial"
          animate="animate"
        >
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full text-white
            bg-dark">
            <IoCartOutline />
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
