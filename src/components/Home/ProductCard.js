"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addCartItem } from "../../store/cartSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const productDetail = (id) => {
    router.push(`/${id}`);
  };

  const addItemHandler = (title, image, price, id) => {
    dispatch(
      addCartItem({
        id,
        title,
        image,
        price,
        quantity: 1,
        perItemPrice: price,
      })
    );
  };
  return (
    <>
      <div
        key={props.id}
        className="bg-white group relative p-5 border-[1px] border-black hover:scale-105 duration-300 cursor-pointer"
        onClick={() => productDetail(props.id)}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={props.image}
            alt={props.id}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <div>
                <span aria-hidden="true" className="absolute inset-0" />
                {props.title}
              </div>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">{props.price}</p>
          {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addItemHandler(
                      props.title,
                      props.image,
                      props.price,
                      props.id
                    );
                  }}
                  className="px-2 py-1 border-2 border-black hover:bg-red-600 font-bold hover:border-red-600 duration-300"
                >
                  Add to Cart
                </button> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
