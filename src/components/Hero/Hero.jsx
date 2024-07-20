/* eslint-disable no-unused-vars */
import React from "react";

import FoodImage from "../../assets/food/food.png";
import Spoon from "../../assets/food/spoon.png";
import Banana from "../../assets/food/banana2.png";
import Leaf from "../../assets/food/leaf.png";

import { IoCardOutline, IoCartOutline } from "react-icons/io5";

import { motion } from "framer-motion";

const SlideUp = (delay) => {
  return {
    hidden: {
      y: "100%",
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .6,
        delay: delay
      }
    }
  }
};

const Hero = () => {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center
          justify-between">
          {/* content */}
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
            <motion.h1
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase
              text-outline text-transparent"
              variants={SlideUp(1.5)}
              initial="hidden"
              whileInView="show"
            >
              Yummy <img src={Leaf} alt="leaf" className="absolute w-[50px] top-0 right-0
                md:right-[100px]" />
            </motion.h1>

            <motion.h1
              className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
              variants={SlideUp(1)}
              initial="hidden"
              whileInView="show"
            >
              BREAKFAST
            </motion.h1>

            <motion.p
              className="text-sm"
              variants={SlideUp(1.8)}
              initial="hidden"
              whileInView="show"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit ut quisquam voluptatem natus voluptates nemo!
            </motion.p>

            <motion.button
              className="btn-primary inline-block !mt-10"
              variants={SlideUp(2.1)}
              initial="hidden"
              whileInView="show"
            >
              <IoCartOutline className="inline mr-2" /> Order Now
            </motion.button>
          </div>

          {/* image */}
          <div className="relative">
            <motion.img
              src={FoodImage}
              alt="food"
              className="w-[450px] img-shadow"
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: .8 }}
            />

            <motion.img
              src={Spoon}
              alt="spoon"
              className="w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"
              initial={{ opacity: 0, rotate: -120, x: -200, y: -100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 1.4 }}
            />

            <motion.img
              src={Banana}
              alt="banana"
              className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow"
              initial={{ opacity: 0, rotate: -70, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 1.9 }}
            />
          </div>
        </div>
      </div>

      {/* bg */}
      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        className="w-[1500px] h-[1500px] rounded-3xl bg-lightYellow absolute 
          top-[25%] left-[70%] z-0"
      >
      </motion.div>
    </main>
  );
};

export default Hero;
