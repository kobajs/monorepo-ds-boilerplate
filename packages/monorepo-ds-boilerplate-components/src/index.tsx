import React from 'react'

import Tokens from 'monorepo-ds-boilerplate-tokens'

type ButtonProps = {
  color?: string
  backgroundColor?: string
}

const Button: React.FC<ButtonProps> = props => {
  const { children, backgroundColor } = props

  const buttonStyle = {
    color: Tokens.palette.common.white,
    backgroundColor: Tokens.palette.primary[backgroundColor],
    padding: Tokens.spacing.small,
  }
  
  return <button style={buttonStyle}>{children}</button>
}

Button.defaultProps = {
  color: "primary",
  backgroundColor: "main",
}

export { Button }
