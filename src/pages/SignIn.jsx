import React from "react";
import Input from "../components/Input";
import {Link,useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
function SignIn() {
    const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res =  await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      }),
    })
    const response = await res.json();
    if(response.token){
      localStorage.setItem("accessToken", response.token);
      navigate('/')
    }
  }
  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex mx-auto mt-[20vh] flex-col gap-y-3 w-full max-w-[400px] h-fit"
    >
      <h2 className="text-3xl text-center my-3 font-semibold">Login</h2>
      <Input
        {...register("username")}
        type={"text"}
        placeholder="Enter your username"
      />
      <Input
        {...register("password")}
        type={"password"}
        placeholder="Enter your password"
      />
      <button className="btn btn-success">Login</button>
    <p>Don't have an account? <Link className="text-blue-500" to="/signup">Sign Up</Link></p>
    </form>
    </>

  );
}

export default SignIn;
