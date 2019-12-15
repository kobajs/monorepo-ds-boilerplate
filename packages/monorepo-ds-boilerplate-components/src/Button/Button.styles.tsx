import styled, { css } from 'styled-components'
import { ButtonProps } from './index'

const StyledButton = styled.button<ButtonProps>(
  ({ theme, size, color }) => css`
    padding: ${theme.spacing[size]}px;
    color: ${theme.palette.common.white};
    background-color: ${theme.palette[color].main};
    border-radius: ${theme.shape.borderRadius.medium}px;
  `
)

export default StyledButton
