import { useState } from 'react';

import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import Capacity from '../components/Capacity';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Works from '../components/Works';
import RequestDialog from '../components/RequestDialog';

const Landing = () => {
  const [requestOpen, setRequestOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {requestOpen && <RequestDialog requestOpen={requestOpen} setRequestOpen={setRequestOpen} />}

      <Stack width='98%' maxWidth='lg' alignSelf='center' spacing={isSmallScreen ? 10 : 20} p={5}>
        <Hero setRequestOpen={setRequestOpen} />
        <Works />
        <Capacity />
        <Team />
        <Stack alignItems='center'>
          <Button variant='contained' endIcon={<SendIcon />} onClick={() => setRequestOpen(true)}>
            Create Request
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Landing;
