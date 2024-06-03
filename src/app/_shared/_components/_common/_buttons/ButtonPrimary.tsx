import React, { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

function ButtonPrimary({ className, ...rest }: IProps) {
    const tailwindCSSCalss = {
        default: 'bg-gray-600 text-white',
        disabled: 'bg-gray-200 text-gray-600'
    }
    return (
        <button {...rest} className={`rounded-md px-4 py-2 ${rest.disabled ? tailwindCSSCalss.disabled
            : tailwindCSSCalss.default} ${className ? className : ''}`} >
        </button>
    );
}

export default ButtonPrimary;