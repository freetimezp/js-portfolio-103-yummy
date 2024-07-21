/* eslint-disable no-unused-vars */
import React from "react";

import foodImage1 from "../../assets/food/food.png";
import foodImage2 from "../../assets/food/food2-plate.png";
import foodImage3 from "../../assets/food/banner.png";

import { motion } from "framer-motion";

import { SlideUp } from "../Hero/Hero";

const PopularRecipeData = [
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

const PopularRecipe = () => {
  return (
    <section>
      <div className="container py-24">
        <motion.h3
          className="text-4xl text-center font-league font-semibold uppercase py-8"
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
        >
          Our Popular Recipe
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {PopularRecipeData.map((item, index) => (
            <div
              key={index}
              className="group text-center bg-white/50 shadow-xl p-3 rounded-xl
                h-[340px] flex flex-col justify-between"
            >
              <img
                src={item.img}
                alt="popular"
                className="w-44 mx-auto img-shadow group-hover:scale-110 group-hover:translate-x-10
                  group-hover:translate-y-[-50px] group-hover:rotate-[50deg] transition-all 
                  duration-700"
              />

              <div>
                <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">
                  Buy Now
                </button>

                <p className="text-xl font-semibold">
                  {item.name}
                </p>

                <p className="text-xl font-bold text-yellow-700">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipe;
