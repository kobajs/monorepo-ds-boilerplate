import { configure, addDecorator } from '@storybook/react'
import { ThemeDecorator } from './decorators'

configure(require.context('../src', true, /\.stories\.js$/), module)

addDecorator(ThemeDecorator)
