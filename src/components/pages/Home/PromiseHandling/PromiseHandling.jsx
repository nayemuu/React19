import { use } from "react";

const handlePromide = () => {
  return new Promise((resolve, reject) => {
    //
    setTimeout(() => {
      console.log("Inside Promise");
      resolve("Promise is resolved");
      // reject("Promise is rejected");
    }, 5000);
  });
};

const PromiseHandling = () => {
  const res = use(handlePromide());
  console.log("res = ", res);
  return (
    <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <h1>Promise is resolved</h1>
    </div>
  );
};

export default PromiseHandling;
