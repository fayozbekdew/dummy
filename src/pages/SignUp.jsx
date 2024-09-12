import React from "react";
import Input from "../components/Input";
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
function SignUp() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.firstname,
          lastName: data.lastname,
          age:  data.age,
          username: data.username,
          password: data.password,
        })
      })
      .then(res => res.json())
      .then(console.log);
  }
  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex mx-auto mt-[20vh] flex-col gap-y-3 w-full max-w-[400px] h-fit"
    >
      <h2 className="text-3xl text-center my-3 font-semibold">Sign Up</h2>
      
      <Input
        {...register("firstname")}
        type={"text"}
        placeholder="Enter your firstname"
      />
      <Input
        {...register("lastname")}
        type={"text"}
        placeholder="Enter your lastname"
      />
       <Input
        {...register("age")}
        type={"number"}
        placeholder="Enter your age"
      />

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
      <button className="btn btn-success text-white tracking-wider text-[16px]">Register</button>
    <p>Have your account? <Link className="text-blue-500" to="/login">Sign In</Link></p>
    </form>
    </>

  );
}

export default SignUp;
