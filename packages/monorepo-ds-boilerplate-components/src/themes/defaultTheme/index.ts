import Tokens, { IDesignTokens } from 'monorepo-ds-boilerplate-tokens'

export interface ITheme extends IDesignTokens {}

const defaultTheme: ITheme = Tokens;

export default defaultTheme;