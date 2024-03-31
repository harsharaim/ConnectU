import React, { useState } from "react";
import { Sun, Moon } from "../assets";
import { useSelector, useDispatch } from "react-redux";
import { SetTheme } from "../redux/theme.js";
function ToggleButton() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";
    dispatch(SetTheme(themeValue));
  };
  return (
    <div
      onClick={() => handleTheme()}
      className="flex w-20 h-10   rounded-full  bg-[#E5E4E2] shadow-inner"
    >
      <span
        className={`h-10 w-10  rounded-full transition-all duration-500  ${
          theme === "dark" ? `` : `ml-10`
        }`}
      >
        {theme === "dark" ? (
          <img src={Moon} alt="moon"></img>
        ) : (
          <img src={Sun} alt="sun"></img>
        )}
      </span>
    </div>
  );
}

export default ToggleButton;
