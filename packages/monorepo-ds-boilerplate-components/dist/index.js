import React from 'react';
import Tokens from 'monorepo-ds-boilerplate-tokens';

const Button = props => {
  const {
    children,
    backgroundColor
  } = props;
  const buttonStyle = {
    color: Tokens.palette.common.white,
    backgroundColor: Tokens.palette.primary[backgroundColor],
    padding: Tokens.spacing.small
  };
  return React.createElement("button", {
    style: buttonStyle
  }, children);
};

Button.defaultProps = {
  color: "primary",
  backgroundColor: "main"
};

export { Button };
