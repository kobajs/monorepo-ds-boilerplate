import React from 'react'

import StyledButton from './Button.styles'

export type ButtonProps = {
  color?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const Button: React.FC<ButtonProps> = props => {
  const { children, ...styledButtonProps } = props

  return <StyledButton {...styledButtonProps}>{children}</StyledButton>
}

Button.defaultProps = {
  color: 'secondary',
  size: 'medium'
}

export default Button
