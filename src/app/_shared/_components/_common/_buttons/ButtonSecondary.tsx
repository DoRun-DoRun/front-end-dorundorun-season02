import React, { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

function ButtonSecondary({ ...rest }: IProps) {
    return (
        <button {...rest} className='bg-gray-200 text-gray-700 rounded-md px-4 py-2' >
        </button>
    );
}

export default ButtonSecondary;