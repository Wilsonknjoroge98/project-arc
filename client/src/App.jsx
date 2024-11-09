import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import Capacity from './components/Capacity';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Team from './components/Team';
import Works from './components/Works';
import RequestForm from './components/RequestForm';
import { useState } from 'react';

import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RequestForm open={open} />
      <NavBar />
      <Stack
        sx={{
          minHeight: '100vh',
          flexGrow: 1,
          p: 5,
          justifyContent: 'center',
          flexDirection: 'row',
          bgcolor: '#EDF2FB',
        }}
      >
        <Stack spacing={20} maxWidth='xl' flexGrow={1} mt={5}>
          <Hero setOpen={setOpen} />
          <Works />
          <Capacity />
          <Team />
          <Stack alignItems='center'>
            <Button variant='contained' endIcon={<SendIcon />} onClick={() => setOpen(true)}>
              Create Request
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
