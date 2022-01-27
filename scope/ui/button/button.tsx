import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';


const sizes = {
  'small' : '8px 24px;',
  'medium': '16px 24px;',
  'large': '24px 24px;'
}

const StyleButton = styled.button`
  /* Adapt the colors based on primary prop */
  cursor: pointer;
  background: ${ ({primary}) => primary ? "#ffdd00" : "#ebeef5"};
  color: #0f265c;
  font-size: 1em;
  margin: 1em;
  padding: ${({size}) => sizes[size]} 
  border: 0px;
  border-radius: 4px;
`;

export type ButtonSizes = 'small' | 'medium' | 'large'

export type ButtonProps = {
  children?: ReactNode;
  primary?: boolean;
  size?: ButtonSizes;
};

export const Button : FC<ButtonProps> = ({ children, primary = true, size = 'medium' }) => {
  return (
    <StyleButton primary={primary} size={size}>
      {children}
    </StyleButton>
  );
}
