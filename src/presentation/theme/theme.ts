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
  },
  dark: {
    primary: '#0d6efd',
    secondary: '#adb5bd',
    tertiary: '#efefef',
    brand: '#e41e2b',
    success: '#198754',
    warning: '#ffc107',
    danger: '#dc3545',
    info: '#0dcaf0',
    background: '#000000',
    text: '#f8f9fa',
  },
};

export type ThemeType = typeof theme.light | typeof theme.dark;
