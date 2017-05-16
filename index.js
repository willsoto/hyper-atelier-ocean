exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor: '#dfe1e9',
    backgroundColor: `rgba(16, 20, 27, ${config.backgroundOpacity || '1'})`,
    cursorColor: `${config.cursorColor || '#FFCC00'}`,
    theme: `${config.theme || ''}`,
    colors: {
      black: '#10141b',
      red: '#df3f44',
      green: '#65cdce',
      yellow: '#e7b24e',
      blue: '#4f85b8',
      magenta: '#f9674f',
      cyan: '#8461c7',
      white: '#dfe1e9',
      lightBlack: '#5c677f',
      lightRed: '#da5699',
      lightGreen: '#151c24',
      lightYellow: '#313847',
      lightBlue: '#5d677e',
      lightMagenta: '#8a8585',
      lightCyan: '#5d677e',
      lightWhite: '#f4ecec'
    }
  });
};
