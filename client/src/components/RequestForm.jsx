import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import LinearProgress from '@mui/material/LinearProgress';
import SendIcon from '@mui/icons-material/Send';
import PropTypes from 'prop-types';

// import { useState, useEffect } from 'react';
// import { postForm } from '../../utils/query';

const RequestForm = ({ open }) => {
  //   const dispatch = useDispatch();
  //   const { pathname } = useLocation();

  //   const [date, setDate] = useState(null);
  //   const [time, setTime] = useState(null);
  //   const [email, setEmail] = useState(null);
  //   const [phone, setPhone] = useState(null);
  //   const [name, setName] = useState(null);

  //   const open = useSelector((state) => state.dialog.appointments);
  //   const data = useSelector((state) => state.data);

  //   const { mutate, isIdle, isSuccess, isPending } = useMutation({
  //     mutationFn: postLead,
  //   });

  //   useEffect(() => {
  //     if (pathname === '/') return;

  //     setPhone(data.phone);
  //     setName(data.name);
  //   }, []);

  //   const handleCancel = () => {
  //     dispatch(setAppointmentsAction(false));
  //     setDate(null);
  //     setTime(null);
  //     setEmail(null);
  //   };

  //   const handleSchedule = () => {
  //     mutate({
  //       data: {
  //         ...data,
  //         appointment: { date: date, time: time },
  //         email: email,
  //         phone: phone,
  //         name: name,
  //       },
  //     });
  //   };

  //   const handleClose = () => {
  //     dispatch(setAppointmentsAction(false));
  //     // setScheduled(false);
  //     setDate(null);
  //     setTime(null);
  //     setEmail(null);
  //   };

  const times = [
    '8:00AM',
    '9:00AM',
    '10:00AM',
    '11:00AM',
    '12:00PM',
    '1:00PM',
    '2:00PM',
    '3:00PM',
    '4:00PM',
    '5:00PM',
    '6:00PM',
    '7:00PM',
    '8:00PM',
  ];

  return (
    <Dialog
      open={open}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '500px', // Set your width here
          },
        },
      }}
    >
      {/* {isPending && <LinearProgress />} */}
      <DialogTitle variant='body1'>Request /</DialogTitle>
      <DialogContent>
        <Stack>
          <Typography variant='caption'>name</Typography>
          <TextField sx={{ width: '100%' }} />
        </Stack>
        <Stack>
          <Typography variant='caption'>return email</Typography>
          <TextField sx={{ width: '100%' }} />
        </Stack>
        <Stack>
          <Typography variant='caption'>request description</Typography>
          <TextField multiline minRows={10} error={true} sx={{ width: '100%' }} />
          <Typography variant='caption' color='error'>
            Do not include CUI or classified information. If sensitive, please speak in general
            terms and we will contact you to discuss further.
          </Typography>
          <Stack alignItems='center' mt={5}>
            <Button variant='contained' endIcon={<SendIcon />}>
              Submit Request
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

RequestForm.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default RequestForm;
