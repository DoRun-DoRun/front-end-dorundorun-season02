import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
}

function Label({ ...rest }: IProps) {
    return (
        <label {...rest}>
        </label>
    );
}

export default Label;