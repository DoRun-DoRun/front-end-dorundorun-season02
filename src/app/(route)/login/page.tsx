"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { InputValidationRules, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  const googleLoginRedir = () => {
    // OAuth 링크
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      `client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}` +
      "redirect_uri=http://localhost:3000/login&" +
      "response_type=token&" +
      "scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
  };
  const getAccessToken = async () => {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");
    // const { data } = await Api.post("oauth/google", { accessToken });
  };

  return (
    <div className="flex flex-col gap-1 w-1/2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border"
          {...register("email", {
            required: "이메일을 입력해 주세요",
          })}
          placeholder="id"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          className="border"
          {...register("password", { required: "비밀번호를 입력해 주세요" })}
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input className="bg-slate-200" type="submit" value={"Login"} />
      </form>
      <button className="bg-slate-200" onClick={googleLoginRedir}>
        구글 로그인
      </button>
      <div className="flex">
        <p>아이디가 없으신가요?</p>
        <button
          className="font-bold"
          onClick={() => {
            router.push("/register");
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
