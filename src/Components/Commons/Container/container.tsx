import React, { ReactNode } from 'react';
import './container.scss';

interface ContainerProps {
    children: ReactNode;
}

export default function container({children}:ContainerProps) {
  return (
    <div className='container-custom' >
        {children}
    </div>
  )
}