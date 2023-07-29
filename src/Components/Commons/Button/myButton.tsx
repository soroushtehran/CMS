import React, { CSSProperties, ReactNode, memo } from 'react'
import './button.scss';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  children?: ReactNode;
  variant: 'contained' | 'outlined' | 'simple';
  onClick?: (data?: any) => void;
  className?: string;
  style?: CSSProperties;
}

const MyButton =  memo(function MyButton({ variant, className, children, ...otherBtnProps }: ButtonProps) {

  return (
    <a
      {...otherBtnProps}
      className={`${variant === 'contained' ? ' containedStyles' : ' outlinedStyles'} ${className} my-button`}>
      {children}
    </a>
  );
});

export default MyButton;