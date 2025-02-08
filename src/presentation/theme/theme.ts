export const theme = {
  light: {
    primary: '#0d6efd',
    secondary: '#6c757d',
    tertiary: '#efefef',
    brand: '#e41e2b',
    success: '#198754',
    warning: '#ffc107',
    danger: '#dc3545',
    info: '#0dcaf0',
    background: '#ffffff',
    text: '#212529',
    onBackground: '#f8f9fa',
  },
  dark: {
    primary: '#375a7f',
    secondary: '#444',
    tertiary: '#343a40',
    brand: '#e41e2b',
    success: '#28a745',
    warning: '#f39c12',
    danger: '#c0392b',
    info: '#17a2b8',
    background: '#121212',
    text: '#f8f9fa',
    onBackground: '#212529',
  },
};

export type ThemeType = typeof theme.light | typeof theme.dark;
