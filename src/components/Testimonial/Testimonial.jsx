/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

import BannerImage from "../../assets/food/banner.png";

import { SlideUp } from "../Hero/Hero";

const Testimonial = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* text */}
          <div className="space-y-6 lg:max-w-[400px]">
            <motion.p
              className="text-xl font-serif relative z-10"
              variants={SlideUp(0.4)}
              initial="hidden"
              whileInView="show"
            >
              &quot; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              tempore rem, possimus fugiat repellendus aperiam facilis error porro
              maiores consequatur atque architecto sint cupiditate, excepturi vitae
              ducimus pariatur, dolores nam.
            </motion.p>

            <div className="flex items-center gap-3">
              <motion.img
                src="https://picsum.photos/id/237/200/300"
                alt="testimonial"
                className="w-14 h-14 rounded-full object-cover"
                variants={SlideUp(0.8)}
                initial="hidden"
                whileInView="show"
              />

              <motion.div
                variants={SlideUp(1.2)}
                initial="hidden"
                whileInView="show"
              >
                <h2 className="text-xl font-bold">
                  John Doe
                </h2>

                <p className="text-sm">
                  Designation
                </p>
              </motion.div>
            </div>
          </div>

          {/* image */}
          <div className="relative">
            <motion.img
              src={BannerImage}
              alt="banner"
              className="relative z-10 w-full max-w-[280px] img-shadow"
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.2, rotate: 25, x: 50, y: -50 }}
              transition={{ duration: .8, scale: { duration: .6 } }}
            />

            <motion.div
              className="absolute top-[50%] right-[50%] transform translate-x-[50%]
              translate-y-[-50%] h-[320px] w-[320px] bg-lightYellow rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: .6, delay: 0.8 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
