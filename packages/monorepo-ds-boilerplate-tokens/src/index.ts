import palette, { IPalette } from './palette';
import spacing, { ISpacing } from './spacing';

export interface IDesignTokens {
    palette: IPalette;
    spacing: ISpacing;
}

const designTokens: IDesignTokens = {
    palette,
    spacing,
};

export default designTokens;