import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';

const Capacity = () => {
  return (
    <Stack alignItems='center' spacing={3}>
      <Typography variant='h5' alignSelf='start' sx={{ opacity: 0.5 }}>
        Capacity /
      </Typography>
      <Stack direction='column' spacing={5}>
        <Stack direction='row' alignItems='center' spacing={20}>
          <Box
            bgcolor='#ABC4FF'
            component='img'
            src='./software.svg'
            minHeight={300}
            p={5}
            borderRadius={2}
          />
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
        </Stack>

        <Divider flexItem />

        <Stack direction='row' alignItems='center' spacing={20}>
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
            component='img'
            bgcolor='#ABC4FF'
            src='./hardware.svg'
            minHeight={300}
            p={5}
            borderRadius={2}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Capacity;
