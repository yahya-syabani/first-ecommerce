import React from "react";
import ManCategory from "../assets/Images/Man.png";
import WomanCategory from "../assets/Images/Woman.png";
import KidCategory from "../assets/Images/Kid.png";

const categories = [
  {
    id: 1,
    title: "Man",
    imageUrl: ManCategory,
  },
  {
    id: 2,
    title: "Women",
    imageUrl: WomanCategory,
  },
  {
    id: 3,
    title: "Kids",
    imageUrl: KidCategory,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-3">
      {categories.map((category) => (
        <div
          key={category.id}
          className="relative h-64 transform cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <img
            src={category.imageUrl}
            alt=""
            className="h-full w-full rounded-lg object-cover shadow-md"
          />
          <div className="absolute left-12 top-20">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategorySection;
