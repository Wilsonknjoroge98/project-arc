import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import useMediaQuery from '@mui/material/useMediaQuery';

const Capacity = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack alignItems='center' spacing={3}>
      <Typography variant='h5' alignSelf='start' sx={{ opacity: 0.5 }}>
        Capacity /
      </Typography>

      <Stack direction='column' spacing={5}>
        <Stack
          direction={isSmallScreen ? 'column' : 'row'}
          alignItems='center'
          spacing={isSmallScreen ? 5 : 20}
        >
          {!isSmallScreen && (
            <Box
              sx={{
                backgroundImage: 'url(./waves.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
              }}
              component='img'
              src='./software.svg'
              p={5}
              borderRadius={2}
            />
          )}

          <Stack spacing={2}>
            <Typography variant='h5'>Software Development</Typography>
            <Stack>
              <Stack direction='row' spacing={1}>
                <CheckIcon />
                <Typography variant='subtitle1'>task automation</Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <CheckIcon />
                <Typography variant='subtitle1'>web development</Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <CheckIcon />
                <Typography variant='subtitle1'>ios and android development</Typography>
              </Stack>
            </Stack>
          </Stack>
          {isSmallScreen && (
            <Box
              sx={{
                backgroundImage: 'url(./waves.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
              }}
              component='img'
              src='./software.svg'
              p={5}
              borderRadius={2}
            />
          )}
        </Stack>

        <Divider flexItem />

        <Stack
          direction={isSmallScreen ? 'column' : 'row'}
          alignItems='center'
          spacing={isSmallScreen ? 5 : 20}
        >
          <Stack spacing={2}>
            <Typography variant='h5'>Mechanical Engineering</Typography>
            <Stack>
              <Stack direction='row' spacing={1}>
                <CheckIcon />
                <Typography variant='subtitle1'>hardware design</Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <CheckIcon />
                <Typography variant='subtitle1'>hardware testing</Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <CheckIcon />
                <Typography variant='subtitle1'>hardware implementaion</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Box
            sx={{
              backgroundImage: 'url(./waves.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom',
              backgroundSize: 'cover',
            }}
            component='img'
            src='./hardware.svg'
            p={5}
            borderRadius={2}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Capacity;
