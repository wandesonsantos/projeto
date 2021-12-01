const theme = {
  colors: {
    main: '#521d66',
    dark: '#263238',
    light: 'black',
    lighter: 'black',
    text: '#fafafa',
    link: '#444444',
  },
  size: {
    smallest: '25em', 
    smaller: '31.25em', 
    small: '37.5em', 
    medium: '56.25em', 
    large: '80em', 
    larger: '90em',
    largest: '97em', 
  },
  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`,
    smaller: 'only screen and (max-width: 31.25em)',
    small: 'only screen and (max-width: 37.5em)',
    medium: 'only screen and (max-width: 56.25em)',
    large: 'only screen and (max-width: 80em)',
    larger: 'only screen and (max-width: 90em)',
    largest: 'only screen and (max-width: 97em)',
  },
};

export default theme;
