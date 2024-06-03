'use client'
import ButtonPrimary from "@/app/_shared/_components/_common/_buttons/ButtonPrimary";
import Input from "@/app/_shared/_components/_common/_inputs/Input";
import Label from "@/app/_shared/_components/_common/_inputs/Label";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Heading2 from "./_components/Heading2";
import TitleSub from "./_components/TitleSub";

interface IFormId {
  id: string,
}
interface IFormCode {
  authenticode: string
}

export default function Register() {
  const { register: registerId, handleSubmit: handleSubmitId } = useForm<IFormId>({
    defaultValues: {
      id: '',
    }
  })
  const { register: resisterCode, handleSubmit: handleSubmitCode } = useForm<IFormCode>({
    defaultValues: {
      authenticode: ''
    }
  })

  return (
    <div className="text-center">
      <Heading2>회원가입</Heading2>
      <TitleSub>가입을 위해 이메일 인증을 진행해주세요</TitleSub>
      <form action="" className="text-left flex items-end gap-2">
        <div>
          <Label htmlFor="" className="block">아이디</Label>
          <Input register={registerId('id', { required: '이메일을 입력해 주세요' })} type="email" id="" />
        </div>
        <ButtonPrimary type="submit">인증 요청</ButtonPrimary>
      </form>
      <form action="" className=" text-left flex items-end gap-2">
        <div>
          <Label htmlFor="" className="block">인증 코드</Label>
          <Input register={resisterCode('authenticode', { required: '인증 코드를 입력해 주세요' })} type="text" id="" />
        </div>
        <ButtonPrimary type="submit" disabled={true}>확인</ButtonPrimary>
      </form>
      <ButtonPrimary type="button" className="w-full mt-8">계속</ButtonPrimary>
      <Link href={''} title="" className="block mt-8">다른 계정으로 로그인</Link>
    </div>
  );
}
