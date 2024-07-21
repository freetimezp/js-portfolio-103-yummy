/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

import BannerImage from "../../assets/food/banner.png";

import { SlideUp } from "../Hero/Hero";

const Banner = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* image */}
          <div className="relative">
            <motion.img
              src={BannerImage}
              alt="banner"
              className="relative z-10 w-full max-w-[450px] img-shadow"
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.2, rotate: 25, x: 50, y: -50 }}
              transition={{ duration: .8, scale: { duration: .6 } }}
            />

            <motion.div
              className="absolute top-[50%] right-[50%] transform translate-x-[50%]
              translate-y-[-50%] md:translate-x-[48%] h-[420px] md:h-[520px] w-[420px] 
              md:w-[520px] bg-lightYellow rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: .6, delay: 0.8 }}
            />
          </div>

          {/* text */}
          <div className="space-y-6 lg:max-w-[400px]">
            <motion.h1
              className="text-6xl uppercase font-semibold font-league"
              variants={SlideUp(1)}
              initial="hidden"
              whileInView="show"
            >
              The Best Yummy Food in Your Town
            </motion.h1>

            <motion.p
              variants={SlideUp(1.3)}
              initial="hidden"
              whileInView="show"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Optio placeat consequuntur incidunt magni nesciunt.
            </motion.p>

            <motion.button
              className="btn-primary"
              variants={SlideUp(1.6)}
              initial="hidden"
              whileInView="show"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
