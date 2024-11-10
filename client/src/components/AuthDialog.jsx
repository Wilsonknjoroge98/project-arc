import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import SendIcon from '@mui/icons-material/Send';

import { useState } from 'react';

import { postAuth } from '../utils/query';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const AuthDialog = ({ authOpen, setAuthOpen }) => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: postAuth,
    onSettled: (data) => {
      if (data.message === 'Success') {
        handleClose();
        navigate('/admin');
      } else {
        setErr(true);
      }
    },
  });

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleClose = () => {
    setUser('');
    setPass('');
    setAuthOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={authOpen}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '300px',
          },
        },
      }}
    >
      {isPending && <LinearProgress />}
      <DialogTitle variant='body1'>Login /</DialogTitle>

      <>
        <DialogContent>
          <Stack spacing={2}>
            <Stack>
              <Typography variant='caption'>username</Typography>
              <TextField
                error={err}
                sx={{ width: '100%' }}
                value={user || ''}
                onChange={(e) => setUser(e.target.value)}
              />
            </Stack>
            <Stack>
              <Typography variant='caption'>password</Typography>
              <TextField
                error={err}
                type='password'
                sx={{ width: '100%' }}
                value={pass || ''}
                onChange={(e) => setPass(e.target.value)}
              />
            </Stack>
          </Stack>
          {err && (
            <Typography color='error' variant='caption'>
              Wrong username / password
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Stack alignItems='center'>
            <Button
              variant='contained'
              endIcon={<SendIcon />}
              disabled={user === '' || pass === '' || isPending}
              onClick={() => mutate({ auth: { user, pass } })}
            >
              Login
            </Button>
          </Stack>
        </DialogActions>
      </>
    </Dialog>
  );
};

AuthDialog.propTypes = {
  authOpen: PropTypes.bool.isRequired,
  setAuthOpen: PropTypes.func.isRequired,
};

export default AuthDialog;
