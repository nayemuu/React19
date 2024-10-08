import { Suspense } from "react";
import ProductsGallery from "./components/pages/Home/ProductsGallery/ProductsGallery";
import Loader from "./components/reusable/ProductCard/Loader/Loader";
import PromiseHandling from "./components/pages/Home/PromiseHandling/PromiseHandling";
import ContextHandling from "./components/pages/ContextHandling/ContextHandling";

function App() {
  return (
    <>
      {/* <div className="text-red-600">yoo</div> */}
      <ContextHandling />

      <Suspense
        fallback={
          <div className="flex justify-center mt-7">
            <Loader />
          </div>
        }
      >
        {/* <ProductsGallery /> */}
        <PromiseHandling />
      </Suspense>
    </>
  );
}

export default App;
