import { useState, useEffect } from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

const Back2Top = () => {
  const backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        onClick={backToTop}
        className="backToTop bg-gradient-to-r from-red-500 to-yellow-500 cursor-pointer duration-300"
      >
        <AiOutlineArrowUp />
      </button>
    </div>
  );
};

export default Back2Top;
