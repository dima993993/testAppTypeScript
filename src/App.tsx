import React from 'react';
import { Grid } from '@mui/material';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <Grid container maxWidth='lg' border="1px solid red">
        <Header />
    </Grid>
  );
}

export default App;
