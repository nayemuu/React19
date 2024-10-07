import { use } from "react";

const handlePromide = (async = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise is resolved");
    }),
      5000;
  });
});

const PromiseHandling = () => {
  const res = use(handlePromide());
  return (
    <div>
      <h1>Promise is resolved</h1>
    </div>
  );
};

export default PromiseHandling;
