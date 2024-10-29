import React, { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  const [base64Image, setBase64Image] = useState("");

  useEffect(() => {
    const getImageAsBase64 = async (imageUrl) => {
      const response = await fetch(imageUrl);
      // const response = await fetch(
      //   "https://d318e0jv36oqd2.cloudfront.net/media/product_medicine/3335-Photoroom.png-Photoroom-Photoroom.png-Photoroom.png"
      // );
      const blob = await response.blob();
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    };

    if (product.images && product.images.length > 0) {
      getImageAsBase64(product.images[0])
        .then((base64) => setBase64Image(base64))
        .catch((error) =>
          console.error("Error converting image to base64:", error)
        );
    }
  }, [product.images]);

  return (
    <div>
      <div className="relative delay-150 w-full h-[250px] lg:h-[310px] bg-[#f8f8f8] bg-center transition-all duration-3000 ease-in-out transform overflow-hidden">
        {base64Image && (
          <img
            src={base64Image}
            alt="Product"
            className="object-cover w-full h-auto"
          />
        )}
      </div>
      <h2 className="text-sm lg:text-base mt-2">
        {product.title}
        <span className="text-[#919090]">{` (${product.category})`}</span>
      </h2>
      <p className="text-[#919090] text-sm">{product.description}</p>
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
