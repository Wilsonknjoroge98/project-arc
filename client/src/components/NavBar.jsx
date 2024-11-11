import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { useLocation, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const NavBar = ({ setAuthOpen }) => {
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (pathname === '/admin') {
      navigate('/');
    } else {
      setAuthOpen(true);
    }
  };

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
              <Typography variant='h6' color='primary' sx={{ fontWeight: 275 }}>
                PROJECT ARC | EUCOM
              </Typography>
              <Stack flexGrow={1} direction='row' justifyContent='flex-end'>
                <Button onClick={handleAuth}>
                  <Typography>{pathname === '/admin' ? 'Logout' : 'Login'}</Typography>
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

NavBar.propTypes = {
  setAuthOpen: PropTypes.func.isRequired,
};

export default NavBar;
