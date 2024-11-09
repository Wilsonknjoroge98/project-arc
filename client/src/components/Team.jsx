import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Team = () => {
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
      <Stack direction='row' spacing={10}>
        {team.map((member, index) => (
          <>
            <Stack spacing={1} key={member.name} direction='column' alignItems='center'>
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={`./${member.name}.jpg`}
                alt={member.name}
              />
              <Stack spacing={-1}>
                <Typography variant='h5'>{member.name}</Typography>
                <Typography variant='body1'>{member.title}</Typography>
              </Stack>
            </Stack>
            {index != 2 && <Divider orientation='vertical' flexItem />}
          </>
        ))}
      </Stack>
    </Stack>
  );
};

export default Team;
