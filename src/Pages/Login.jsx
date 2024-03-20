import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../Components/Assets/logo.png";
import LoginImg from "../Components/Assets/login.jpg";
import { TextInput } from "../Components/index.js";
function Login() {
  const {
    register,
    handlSubmit,
    formState: { error },
  } = useForm({
    mode: onchange,
  });
  return (
    <div className="py-16 bg-primary w-full h-[100vh]">
      <div className="flex  rounded-xl shadow-lg overflow-hidden m-auto lg:max-w-3xl md:max-w-2xl max-w-sm  ">
        {/* left sisde */}
        <div className="md:w-1/2 md:h-auto bg-[#21890A] w-[90vw] h-[75vh] flex flex-col">
          <p className="font-bold  text-4xl text-white text-center pt-4">
            <span>
              <img
                src={Logo}
                alt="logo"
                width={35}
                className="inline border-2 rounded-full"
              />
            </span>{" "}
            ConnectU
          </p>
          <TextInput
            name="email"
            placeholder="example@gmail.com"
            label="Email Adress"
            type="email"
            register={register("email", {
              required: "Email Address is required",
            })}
            // eslint-disable-next-line react/style-prop-object
            style="w-full rounded-full mx-auto"
            labelStyle="m1-2"
            // error={error.email ? error.email.message : ""}
          />
         
        </div>
        {/* right side */}
        <div className="hidden md:block w-1/2">
          <img src={LoginImg} className="" alt="login img" />
        </div>
      </div>
    </div>
  );
}

export default Login;
