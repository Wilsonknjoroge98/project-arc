import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import useMediaQuery from '@mui/material/useMediaQuery';

import PropTypes from 'prop-types';

const Hero = ({ setRequestOpen }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Stack
      spacing={5}
      p={5}
      direction={isSmallScreen ? 'column' : 'row'}
      sx={{
        bgcolor: '#ABC4FF',
        borderRadius: 2,
      }}
    >
      <Stack flexGrow={1} alignItems='start' width={!isSmallScreen ? '50%' : '100%'}>
        <Box
          component='img'
          src='./tagline.svg'
          minHeight={isSmallScreen ? 175 : 350}
          maxHeight={isSmallScreen ? 300 : 500}
        />
        <Typography variant={isSmallScreen ? 'caption' : 'body1'}>
          Project Arc is a grass-roots effort created in Oct 2021 to help connect those in need with
          those who can help. We are a group of volunteers who are passionate about helping others!
        </Typography>
      </Stack>
      <Stack direction='row' justifyContent='center' flexGrow={1} alignItems='center'>
        <Button variant='contained' endIcon={<SendIcon />} onClick={() => setRequestOpen(true)}>
          Create Request
        </Button>
      </Stack>
    </Stack>
  );
};

Hero.propTypes = {
  setRequestOpen: PropTypes.func.isRequired,
};

export default Hero;
