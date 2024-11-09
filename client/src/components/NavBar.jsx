import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const NavBar = () => {
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          backgroundColor: '#EDF2FB',
          boxShadow: 'none',
          padding: 0.5,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            backgroundColor: '#EDF2FB',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Stack sx={{ flexGrow: 1 }} maxWidth='xl'>
            <Stack direction='row' spacing={2}>
              <Typography variant='h6' color='primary'>
                PROJECT ARC - EUCOM
              </Typography>
              <Stack flexGrow={1} direction='row' justifyContent='flex-end'>
                <Button>
                  <Typography>Login</Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default NavBar;
