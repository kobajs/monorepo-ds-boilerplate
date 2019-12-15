import React from 'react'

import Tokens from 'monorepo-ds-boilerplate-tokens'

type ButtonProps = {
  color?: string
  backgroundColor?: string
}

const Button: React.FC<ButtonProps> = props => {
  const { children, color, backgroundColor } = props
  const buttonStyle = {
    color: Tokens.palette.text[color],
    backgroundColor: Tokens.palette.primary[backgroundColor]
  }
  
  return <button style={buttonStyle}>{children}</button>
}

Button.defaultProps = {
  color: "primary",
  backgroundColor: "primary",
}

export { Button }
