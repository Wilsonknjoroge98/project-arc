import NavBar from './components/NavBar';
import Stack from '@mui/material/Stack';
import { Outlet } from 'react-router-dom';

import AuthDialog from './components/AuthDialog';
import { useState } from 'react';

import './App.css';

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <AuthDialog authOpen={authOpen} setAuthOpen={setAuthOpen} />

      <Stack
        spacing={2}
        width='100%'
        sx={{
          minHeight: '100vh',
          flexGrow: 1,
          bgcolor: '#EDF2FB',
        }}
      >
        <NavBar setAuthOpen={setAuthOpen} />
        <Outlet />
      </Stack>
    </>
  );
}

export default App;
