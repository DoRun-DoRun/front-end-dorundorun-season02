"use client";
import ButtonPrimary from "@/app/_shared/_components/_common/_buttons/ButtonPrimary";
import ButtonSecondary from "@/app/_shared/_components/_common/_buttons/ButtonSecondary";
import Input from "@/app/_shared/_components/_common/_inputs/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { InputValidationRules, SubmitHandler, useForm } from "react-hook-form";

interface IFormData {
  email: string;
  password : string
}
export default function Login() {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState<IFormData>({
    email: "",
    password: "",
  });

  const {
    register: loginEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: emailError },
  } = useForm<IFormData>({
    defaultValues: {
      email: "",
    },
  });

  const {
    register: loginPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordError },
  } = useForm<IFormData>({
    defaultValues: {
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
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
      <div className="flex justify-center">
        <h1 className="text-center">로그인</h1>
      </div>
      <form className="flex flex-col">
        <Input
          register={loginEmail("email", { required: "이메일을 입력해 주세요" })}
          type="email"
          id=""
          defaultValue={loginForm.email}
          placeholder="email"
        />
        <Input
          register={loginPassword("password", {
            required: "비밀번호를 입력해 주세요",
          })}
          type="password"
          id=""
          defaultValue={loginForm.password}
          placeholder="password"
        />
        <ButtonPrimary type="submit" disabled={false}>
          Login
        </ButtonPrimary>
        <div className="flex justify-end gap-5">
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
        <Link href={"/register"} className="w-1/2 border-r text-center">
          회원가입
        </Link>
        <Link href={"#"} className="w-1/2 text-center">
          아이디/비밀번호 찾기
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-b mb-2">소셜 계정으로 로그인</div>
        <div className="flex gap-5">
          <ButtonSecondary
            className="bg-slate-200 p-1"
            onClick={googleLoginRedir}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              preserveAspectRatio="xMidYMid"
              viewBox="-3 0 262 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              />
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              />
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              />
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              />
            </svg>
          </ButtonSecondary>
          <ButtonSecondary className="bg-slate-200 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path
                fill="#03C75A"
                d="M18 20H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2Z"
              />
              <path
                fill="#fff"
                d="M11.35 10.25 8.5 6.2H6.15v7.6h2.5V9.75l2.85 4.05h2.35V6.2h-2.5v4.05Z"
              />
            </svg>
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
}
