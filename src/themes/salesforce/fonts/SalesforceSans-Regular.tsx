import { makeStyles } from '@material-ui/core';
import SalesforceSansRegularWoff2 from './SalesforceSans-Regular.woff2';
import React from 'react';

export const salesforceSansRegular: any = {
  fontFamily: 'Salesforce Sans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: [
    `local('SalesforceSans')`,
    `local('SalesforceSans-Regular')`,
    `url('.${SalesforceSansRegularWoff2}') format('woff2')`,
  ].join(','),
};

const useStyles = makeStyles({
  '@global': {
    '@font-face': salesforceSansRegular,
  },
});

export const SalesforceSansRegular: React.FC = () => {
  useStyles();
  return <></>;
};
