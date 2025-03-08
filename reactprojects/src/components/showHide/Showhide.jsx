import React, { useState } from 'react';

function Showhide() {
  const [showHide, setShowHide] = useState(false);

  const toggleShowHide = () => {
    setShowHide((prev) => !prev);
  };

  return (
    <div>
      <div className='bg-blue-400 text-center text-white p-4 rounded-lg w-64 min-w-[16rem]'>
        <button
          className='bg-green-600 p-2 rounded w-full'
          onClick={toggleShowHide}
        >
          {showHide ? 'Show' : 'Hide'}
        </button>
        {!showHide && <div className='mt-2'>Welcome to the Show/Hide Demo!</div>}
      </div>
    </div>
  );
}

export default Showhide;