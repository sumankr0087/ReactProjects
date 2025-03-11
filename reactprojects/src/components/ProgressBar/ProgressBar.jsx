import React, { useState } from "react";

function ProgressBar() {
  const [value, setValue] = useState(10);

  const setValuer = (e) => {
    let inputValue = Number(e.target.value);
    if (inputValue < 0) inputValue = 0;
    if (inputValue > 100) inputValue = 100;
    setValue(inputValue);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white rounded-lg w-96 mx-auto shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Progress Bar</h1>

      <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden mb-4">
        <div
          className="h-full bg-blue-500 text-center text-white font-bold flex items-center justify-center transition-all duration-300"
          style={{ width: `${value}%` }}
        >
          {value}%
        </div>
      </div>

      <form className="mt-4 flex flex-col items-center">
        <label htmlFor="progress" className="mb-2 text-lg">
          Input Percentage:
        </label>
        <input
          type="number"
          id="progress"
        //   value={value}
          onChange={setValuer}
          className="p-2 border rounded text-black w-24 text-center"
          min="0"
          max="100"
        />
      </form>
    </div>
  );
}

export default ProgressBar;