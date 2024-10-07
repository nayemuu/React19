import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="relative delay-150 w-full h-[250px] lg:h-[310px] bg-[#f8f8f8] bg-center transition-all duration-3000 ease-in-out transform overflow-hidden">
        <img
          src={product.images[0]}
          fill
          quality={100}
          alt="p"
          className="object-cover w-full h-auto"
        />
      </div>
      <h2 className="text-sm lg:text-base mt-2">
        {product.title}

        <span className="text-[#919090]">{` (${product.category})`}</span>
      </h2>
      <p className="text-[#919090] text-sm ">{product.description}</p>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">{`$${product.price}`}</span>
        {` $${(
          product.price -
          product.price * (product.discountPercentage / 100)
        ).toFixed(2)}`}
      </p>
    </div>
  );
};

export default ProductCard;
