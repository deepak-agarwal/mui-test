import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { salesforceSansRegular } from './fonts';

export const theme: ThemeOptions = {
  typography: {
    fontFamily: [salesforceSansRegular.fontFamily, 'serif'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [salesforceSansRegular],
      },
    },
  },
};
