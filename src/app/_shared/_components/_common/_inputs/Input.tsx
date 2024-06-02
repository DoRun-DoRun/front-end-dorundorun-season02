import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    register: UseFormRegisterReturn,
}

function Input({ register, ...rest }: IProps) {
    return (
        <input {...register} {...rest} className={`border rounded-md px-4 py-2 ${rest.className ? rest.className : ''}`} />
    );
}

export default Input;