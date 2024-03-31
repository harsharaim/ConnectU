import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoginImg, Logo } from "../assets/index.js";

import { Loading, CustomButton, TextInput } from "../components/index.js";
import { Link } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onchange",
  });

  const onSubmit = async (data) => {};

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="py-16 bg-bgColor w-full h-[100vh]">
      <div className="flex rounded-xl shadow-lg overflow-hidden m-auto lg:max-w-3xl md:max-w-2xl max-w-sm  ">
        {/* left sisde */}
        <div className="w-full lg:w-1/2 md:h-auto bg-primary h-full flex flex-col justify-center px-10 py-5 2xl:p-20">
          <div className="w-full flex  items-center mb-6">
            <p className="font-bold  text-4xl text-green text-center">
              <span>
                <img
                  src={Logo}
                  alt="logo"
                  width={35}
                  className="inline border-2 rounded-full border-b-white"
                />
              </span>{" "}
              ConnectU
            </p>
          </div>
          <p className="text-ascent-1 text-base font-semibold">
            Log in to your account
          </p>
          <span className="text-sm mt-2 text-base text-ascent-2">
            Welcome Back
          </span>
          <form
            className="py-8 flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
              name="email"
              placeholder="example@gmail.com"
              label="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required",
              })}
              styles="w-full rounded-lg"
              labelStyle="ml-2"
              error={errors.email ? errors.email.message : ""}
            />
            <TextInput
              name="password"
              placeholder="password"
              label="password"
              type="password"
              register={register("password", {
                required: "password is required",
              })}
              styles="w-full rounded-lg "
              labelStyle="ml-2"
              error={errors.password ? errors.password?.message : ""}
            />
            <Link
              to="/reset-password"
              className="text-sm text-right ml-2 text-green font-semibold"
            >
              Forgot Password ?
            </Link>
            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status == "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}
            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type="submit"
                containerStyles={`inline-flex justify-center rounded-md
                  bg-green px-8 py-3 text-sm font-medium text-white outline-none`}
                title="Login"
              />
            )}
          </form>
          <p className="text-ascent-2 text-sm text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green font-semibold ml-2 cursor-pointer"
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* right side */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-primary w-1/2">
          <div className="realative w-full flex items-center justify-center">
            <img src={LoginImg} className="object-cover" alt="login img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
