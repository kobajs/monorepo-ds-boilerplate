import palette, { IPalette } from './palette';
import spacing, { ISpacing } from './spacing';
import shape, { IShape } from './shape';

export interface IDesignTokens {
    palette: IPalette;
    spacing: ISpacing;
    shape: IShape;
}

const designTokens: IDesignTokens = {
    palette,
    spacing,
    shape,
};

export default designTokens;