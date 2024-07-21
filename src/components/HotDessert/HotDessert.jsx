import React from "react";

import foodImage1 from "../../assets/food/food.png";
import foodImage2 from "../../assets/food/food2-plate.png";
import foodImage3 from "../../assets/food/banner.png";

import { motion } from "framer-motion";

import { SlideUp } from "../Hero/Hero";

const HotDesertData = [
  {
    id: 1,
    name: "HotDesert",
    img: foodImage1,
    price: "$5.99",
    delay: 0.4
  },
  {
    id: 2,
    name: "Hot Cake",
    img: foodImage2,
    price: "$5.00",
    delay: 0.8
  },
  {
    id: 3,
    name: "Hot Cake",
    img: foodImage3,
    price: "$4.80",
    delay: 1.2
  },
];

const HotDessert = () => {
  return (
    <section>
      <div className="container py-12">
        <motion.h3
          className="text-2xl font-semibold text-darkGreen uppercase py-8"
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
        >
          Hot Dessert
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HotDesertData.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white/20 shadow-md p-3 flex items-center gap-3"
              variants={SlideUp(item.delay)}
              initial="hidden"
              whileInView="show"
            >
              <img
                src={item.img}
                alt="desert"
                className="w-36 rounded-full img-shadow group-hover:scale-125 transition-all
                  duration-700 group-hover:rotate-[50deg]"
              />

              <div>
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-2xl text-yellow-700">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDessert;
