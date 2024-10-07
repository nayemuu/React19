import { use } from "react";

const handlePromide = () => {
  return new Promise((resolve, reject) => {
    //
    setTimeout(() => {
      console.log("yooo");
      resolve("Promise is resolved");
      // reject("Promise is rejected");
    }, 5000);
  });
};

const PromiseHandling = () => {
  const res = use(handlePromide());
  return (
    <div>
      <h1>Promise is resolved</h1>
    </div>
  );
};

export default PromiseHandling;
