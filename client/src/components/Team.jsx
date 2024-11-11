import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';

const Team = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const team = [
    {
      name: 'Wilson Kamau',
      title: 'Software Developer',
    },
    {
      name: 'Danmar Miraflor',
      title: 'Mechanical Engineer',
    },
    {
      name: 'Aaron Holmes',
      title: 'Software Developer',
    },
  ];
  return (
    <Stack alignItems='center' spacing={3}>
      <Typography alignSelf='start' variant='h5' sx={{ opacity: 0.5 }}>
        Team /
      </Typography>
      <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={isSmallScreen ? 5 : 10}>
        {team.map((member, index) => (
          <>
            <Stack spacing={1} key={member.name} direction='column' alignItems='center'>
              <Avatar
                sx={{ width: 150, height: 150 }}
                src={`./${member.name}.png`}
                alt={member.name}
              />
              <Stack spacing={-1}>
                <Typography variant='h5'>{member.name}</Typography>
                <Typography variant='body1'>{member.title}</Typography>
              </Stack>
            </Stack>
            {index != 2 && (
              <Divider orientation={isSmallScreen ? 'horizontal' : 'vertical'} flexItem />
            )}
          </>
        ))}
      </Stack>
    </Stack>
  );
};

export default Team;
