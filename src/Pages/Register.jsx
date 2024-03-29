import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoginImg, Logo } from "../Components/Assets/index.js";

import { Loading, CustomButton, TextInput } from "../Components";
import { Link } from "react-router-dom";
function Register() {
  const {
    register,
    handleSubmit,
    getValues,
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
      <div className="flex flex-row-reverse rounded-xl shadow-lg overflow-hidden m-auto lg:max-w-3xl md:max-w-2xl max-w-sm  ">
        {/* left sisde */}
        <div className="w-full lg:w-1/2 md:h-auto bg-primary h-full flex flex-col justify-center px-10 py-5 2xl:p-20">
          <div className="w-full flex  items-center mb-5">
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
            Create your account
          </p>
          <form
            className="py-2 flex flex-col gap-5 md:gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col lg:flex-row gap-2 md:gap-2">
              <TextInput
                placeholder="First Name"
                label="First Name"
                type="text"
                register={register("firstName", {
                  required: "First Name is required!",
                })}
                styles="w-full"
                labelStyle="ml-2"
                error={errors.firstName ? errors.firstName?.message : ""}
              />
              <TextInput
                placeholder="Last Name"
                label="Last Name"
                type="text"
                register={register("lastName", {
                  required: "Last Name do no match",
                })}
                styles="w-full"
                labelStyle="ml-2"
                error={errors.lastName ? errors.lastName?.message : ""}
              />
            </div>
            <TextInput
              name="email"
              placeholder="example@gmail.com"
              label="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required",
              })}
              styles="w-full "
              error={errors.email ? errors.email.message : ""}
            />
            <div className="w-full flex flex-col lg:flex-row gap-2 md:gap-2 ">
              <TextInput
                name="password"
                placeholder="Confirm password"
                label="Confirm Password"
                type="password"
                register={register("password", {
                  required: "password is required",
                })}
                styles="w-full  "
                error={errors.password ? errors.password?.message : ""}
              />
              <TextInput
                name="password"
                placeholder="Password"
                label="password"
                type="password"
                styles="w-full  "
                register={register("cPassword", {
                  validate: (value) => {
                    const { password } = getValues();
                    if (password !== value) {
                      return "Passwords do not match";
                    }
                  },
                })}
                error={
                  errors.cPassword && errors.cPassword.type === "validate"
                    ? errors.cPassword?.message
                    : ""
                }
              />
            </div>

            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status === "failed"
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
                title="Create Account"
              />
            )}
          </form>
          <p className="text-ascent-2 text-sm text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green font-semibold ml-2 cursor-pointer"
            >
              Login Account
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

export default Register;
