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

import { useState, useEffect } from 'react';

import { postRequest } from '../utils/query';
import { useMutation } from '@tanstack/react-query';

import PropTypes from 'prop-types';

const RequestDialog = ({ requestOpen, setRequestOpen }) => {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: postRequest,
  });
  const [request, setRequest] = useState({});

  const handleClose = () => {
    setRequest({});
    setRequestOpen(false);
  };

  const isSettled = isSuccess || isError;

  useEffect(() => {}, []);

  return (
    <Dialog
      onClose={handleClose}
      open={requestOpen}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '500px',
          },
        },
      }}
    >
      {isPending && <LinearProgress />}
      <DialogTitle variant='body1'>Request /</DialogTitle>
      {isSettled ? (
        <DialogContent>
          <Typography variant='h5'>Your request has been submitted!</Typography>
        </DialogContent>
      ) : (
        <>
          <DialogContent>
            <Stack spacing={2}>
              <Stack>
                <Typography variant='caption'>name</Typography>
                <TextField
                  sx={{ width: '100%' }}
                  value={request.name || ''}
                  onChange={(e) => setRequest({ ...request, name: e.target.value })}
                />
              </Stack>
              <Stack>
                <Typography variant='caption'>return email</Typography>
                <TextField
                  sx={{ width: '100%' }}
                  value={request.email || ''}
                  onChange={(e) => setRequest({ ...request, email: e.target.value })}
                />
              </Stack>
              <Stack>
                <Typography variant='caption'>request description</Typography>
                <TextField
                  multiline
                  minRows={10}
                  error={true}
                  value={request.description || ''}
                  sx={{ width: '100%' }}
                  onChange={(e) => setRequest({ ...request, description: e.target.value })}
                />
                <Typography variant='caption' color='error'>
                  Do not include CUI or classified information. If sensitive, please speak in
                  general terms and we will contact you to discuss further.
                </Typography>
              </Stack>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Stack alignItems='center'>
              <Button
                variant='contained'
                endIcon={<SendIcon />}
                disabled={!request.name || !request.email || !request.description || isPending}
                onClick={() => mutate({ request: request })}
              >
                Submit Request
              </Button>
            </Stack>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

RequestDialog.propTypes = {
  requestOpen: PropTypes.bool.isRequired,
  setRequestOpen: PropTypes.func.isRequired,
};

export default RequestDialog;
