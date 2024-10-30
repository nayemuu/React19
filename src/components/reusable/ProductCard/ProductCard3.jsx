import React, { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  const [base64Image, setBase64Image] = useState("");

  useEffect(() => {
    const getImageAsBase64 = async (imageUrl) => {
      const response = await fetch(imageUrl);
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

    const addWatermark = (imageData) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.src = imageData;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the original image
        ctx.drawImage(img, 0, 0);

        // Watermark settings
        const watermarkText = "CareBox";
        const fontSize = 120; // Increase the font size
        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // White color with transparency
        ctx.textAlign = "center"; // Center align the text
        ctx.textBaseline = "middle"; // Center align vertically

        // Calculate the center of the canvas
        const x = canvas.width / 2;
        const y = canvas.height / 2;

        // Rotate the canvas and draw the watermark
        ctx.save();
        ctx.translate(x, y); // Move origin to center of the canvas
        ctx.rotate(-Math.PI / 4); // Rotate -45 degrees
        ctx.fillText(watermarkText, 0, 0); // Draw watermark at center
        ctx.restore();

        // Convert canvas to base64
        const watermarkedBase64 = canvas.toDataURL();
        setBase64Image(watermarkedBase64);
      };
    };

    if (product.images && product.images.length > 0) {
      getImageAsBase64(product.images[0])
        .then((base64) => addWatermark(base64))
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
