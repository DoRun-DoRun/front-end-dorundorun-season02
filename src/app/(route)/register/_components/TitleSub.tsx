import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}

function TitleSub({ children }: IProps) {
    return (
        <div className=''>
            {children}
        </div>
    );
}

export default TitleSub;