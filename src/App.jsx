import { Suspense } from "react";
import ProductsGallery from "./components/pages/Home/ProductsGallery/ProductsGallery";
import Loader from "./components/reusable/ProductCard/Loader/Loader";

function App() {
  return (
    <>
      {/* <div className="text-red-600">yoo</div> */}
      <Suspense
        fallback={
          <div className="flex justify-center mt-7">
            <Loader />
          </div>
        }
      >
        <ProductsGallery />
      </Suspense>
    </>
  );
}

export default App;
