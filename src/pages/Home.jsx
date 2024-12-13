import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/Images/HeroImage.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <div className="mt-2 bg-white px-4 md:px-16 lg:px-24">
      <div className="container mx-auto flex flex-col space-x-2 py-4 md:flex-row">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 px-2 py-2.5 text-xs font-bold text-white">
            SHOP BY CATEGORY
          </div>
          <ul className="space-y-4 border bg-gray-100 p-3">
            {Categories.map((category) => (
              <li
                key={category.id}
                id={category.id}
                className="flex items-center text-sm font-medium"
              >
                <div className="mr-2 h-2 w-2 rounded-full border border-red-500"></div>
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-8 h-96 w-full md:mt-0 md:w-9/12">
          <img src={HeroImage} alt="" className="h-full w-full" />
          <div className="absolute left-8 top-16">
            <p className="mb-4 font-bold text-white">Yahya Syabani</p>
            <h2 className="text-3xl font-bold text-white">Welcome to</h2>
            <h2 className="text-3xl font-bold text-white">E-Commerce</h2>
            <p className="mt-2.5 text-xl font-bold text-white">Products ++</p>
            <button className="mt-4 transform bg-red-600 px-8 py-1.5 text-white transition-transform duration-300 hover:scale-105 hover:bg-red-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div>
        <h2>Top Product</h2>
        <div>
          {products.products.slice(0, 5).map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
