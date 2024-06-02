"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { InputValidationRules, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState<Inputs>({
    email: "",
    password: "",
  });

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
      "redirect_uri=http://localhost:3000/login/google/auth&" +
      "response_type=token&" +
      "scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
  };

  return (
    <div className="flex flex-col gap-1 w-1/2">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border"
          {...register("email", {
            required: "이메일을 입력해 주세요",
          })}
          placeholder="id"
          defaultValue={loginForm.email}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          className="border"
          {...register("password", { required: "비밀번호를 입력해 주세요" })}
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input className="bg-slate-200" type="submit" value={"Login"} />
        <div className="flex justify-end">
          <label htmlFor="idSet">
            <input type="checkbox" id="idSet" />
            <span>아이디 저장</span>
          </label>
          <label htmlFor="autoLogin">
            <input type="checkbox" id="autoLogin" />
            <span>자동 로그인</span>
          </label>
        </div>
      </form>

      <div className="flex gap-5">
        <Link href={"/register"} className="w-1/2 border-r">
          회원가입
        </Link>
        <Link href={"#"} className="w-1/2">
          아이디/비밀번호 찾기
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-b mb-2">소셜 계정으로 로그인</div>
        <div className="flex gap-5">
          <button className="bg-slate-200 p-1" onClick={googleLoginRedir}>
            구글 로그인
          </button>
          <button className="bg-slate-200 p-1">네이버 로그인</button>
        </div>
      </div>
    </div>
  );
}
