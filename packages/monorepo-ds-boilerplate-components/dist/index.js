import React from 'react';
import Tokens from 'monorepo-ds-boilerplate-tokens';

const Button = props => {
  const {
    children,
    color,
    backgroundColor
  } = props;
  const buttonStyle = {
    color: Tokens.palette.text[color],
    backgroundColor: Tokens.palette.primary[backgroundColor]
  };
  return React.createElement("button", {
    style: buttonStyle
  }, children);
};

Button.defaultProps = {
  color: "primary",
  backgroundColor: "primary"
};

export { Button };
