import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: React.ReactNode;
}

function Heading2({ children }: IProps) {
    return (
        <h2>
            {children}
        </h2>
    );
}

export default Heading2;