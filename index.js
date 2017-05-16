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
      lightBlack: '#10141b',
      lightRed: '#df3f44',
      lightGreen: '#65cdce',
      lightYellow: '#e7b24e',
      lightBlue: '#4f85b8',
      lightMagenta: '#f9674f',
      lightCyan: '#8461c7',
      lightWhite: '#dfe1e9'
    }
  });
};
