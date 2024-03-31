import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { TextInput, CustomButton, ToggleButton } from "./index.js";
import { useForm } from "react-hook-form";
import { SetTheme } from "../redux/theme.js";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Logout } from "../redux/userSlice.js";
function TopBar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearch = async (data) => {};
  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-4 px-4 bg-primary">
      <Link to="/" className="flex gap-1 items-center">
        <div className="p-1 md:p-2 rounded text-white ">
          <img src={Logo} className="w-11" />
        </div>
        <span className="text-x1 md:text-2xl text-green font-semibold">
          ConnectU
        </span>
      </Link>
      <form className="hidden md:flex">
        <TextInput
          placeholder="Search..."
          styles="w-[18rem] lg:w-[38rem] rounded-l-full py-3"
          register={register("search")}
        />
        <CustomButton
          title="search"
          type="submit"
          containerStyles="bg-green text-white px-6 py-2.5 mt-2 rounded-r-full"
        />
      </form>
      <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
        <ToggleButton />
        <div className="hidden lg:flex">
          <IoMdNotificationsOutline className="text-green size-8" />
        </div>
        <div>
          <CustomButton
            onClick={() => dispatch(Logout)}
            title="Log Out"
            containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full "
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
