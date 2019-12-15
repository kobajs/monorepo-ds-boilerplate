import styled, { css } from 'styled-components'
import { ButtonProps } from './index'

const StyledButton = styled.button<ButtonProps>(({ theme, size, color }) => {
  return css`
    padding: ${theme.spacing[size]}px;
    color: ${theme.palette.common.white};
    background-color: ${theme.palette[color].main};
  `
})

export default StyledButton
