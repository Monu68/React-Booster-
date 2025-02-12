import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="bg-gray-700 p-8 text-white text-center rounded-2xl">
        <h1 className="font-bold text-3xl py-8">Counter App</h1>
        <p className="text-5xl font-semibold my-4">{count}</p>

        <div className="py-6">
          <button
            className="px-6 py-3 bg-red-500 hover:bg-red-700 rounded-lg"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>

          <button
            className="mx-2 px-6 py-3 bg-red-500 hover:bg-red-700 rounded-lg 
            disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
