import { use } from "react";
import ProductCard from "../../../reusable/ProductCard/ProductCard";

const fetchdata = async () => {
  const res = await fetch("https://dummyjson.com/products");
  //   const res = await fetch("https://test.com/products");
  console.log("res = ", res);

  const data = await res.json();
  //   console.log("data = ", data);
  return data;
};

function ProductsGallery(props) {
  const data = use(fetchdata());
  console.log("data = ", data);
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 my-4 lg:my-10">
        {data.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default ProductsGallery;
