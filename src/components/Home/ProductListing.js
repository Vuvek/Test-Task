"use client";

import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsData } from "../../store/cartSlice";
import { BounceLoader } from "react-spinners";

const ProductListing = () => {
  const products = useSelector((state) => state.cart.products);
  const isLoading = useSelector((state) => state.cart.mainState.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return (
    <div
      className={`w-full ${
        !isLoading ? "h-full" : "h-screen"
      } py-8 px-3 bg-blue-300 text-black relative`}
    >
      {!isLoading ? (
        <div className="bg-blue-300">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map(({ title, image, price, id, description }) => (
                <ProductCard
                  key={id}
                  title={title}
                  image={image}
                  price={price}
                  id={id}
                  description={description}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex items-start justify-center absolute top-[45%]">
          <BounceLoader color="black" size={60} />
        </div>
      )}
    </div>
  );
};

export default ProductListing;
