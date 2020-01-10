import React from 'react';
import { ThemeProvider, CssBaseline, TextField } from '@material-ui/core';
import { theme } from './themes';
// import { SalesforceSansRegular } from './themes/salesforce';

export const App: React.FC = () => (
  <>
    {/* NOTE: uncomment this to get the font to work */}
    {/* <SalesforceSansRegular /> */}
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <TextField
          label="Input Label"
          placeholder="Placeholder Text"
          required
        />
      </ThemeProvider>
    </CssBaseline>
  </>
);
