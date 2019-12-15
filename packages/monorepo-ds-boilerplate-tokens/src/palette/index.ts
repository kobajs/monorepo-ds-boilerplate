export interface IPalette {
  primary: {
    light?: string
    main: string
    dark?: string
  },
  secondary: {
    light?: string
    main: string
    dark?: string
  },
  common: {
    white: string
    black: string
  },
  text: {
    primary: string
    secondary?: string
  }
}

const palette: IPalette = {
  primary: {
    main: "#0d47a1",
  },
  secondary: {
    main: "#311b92",
  },
  text: {
    primary: "#263238",
  },
  common: {
    white: "#FFFFFF",
    black: "#000000"
  },
}

export default palette