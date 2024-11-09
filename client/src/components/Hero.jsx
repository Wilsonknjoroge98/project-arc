import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';

import PropTypes from 'prop-types';

const Hero = ({ setOpen }) => {
  return (
    <Stack alignItems='center' direction='row' sx={{ bgcolor: '#CCDBFD', borderRadius: 2, p: 5 }}>
      <Stack alignItems='start' width='50%'>
        <Box component='img' src='./tagline.svg' minHeight={300} maxHeight={500} />
        <Typography variant='body1'>
          Project Arc is a grass-roots effort created in Oct 2021 to help connect those in need with
          those who can help. We are a group of volunteers who are passionate about helping others!
        </Typography>
      </Stack>
      <Stack width='50%' alignItems='center'>
        <Button variant='contained' endIcon={<SendIcon />} onClick={() => setOpen(true)}>
          Create Request
        </Button>
      </Stack>
    </Stack>
  );
};

Hero.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default Hero;
