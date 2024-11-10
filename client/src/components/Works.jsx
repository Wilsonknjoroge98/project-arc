import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid2';
import { Button } from '@mui/material';

const Works = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const works = [
    {
      title: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus, non alias repellat eaque, modi rem tempore quia error, aperiam architecto autem soluta sit incidunt temporibus magni reprehenderit maxime iusto?',
    },
    {
      title: 'Project 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus, non alias repellat eaque, modi rem tempore quia error, aperiam architecto autem soluta sit incidunt temporibus magni reprehenderit maxime iusto?',
    },
    {
      title: 'Project 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus, non alias repellat eaque, modi rem tempore quia error, aperiam architecto autem soluta sit incidunt temporibus magni reprehenderit maxime iusto?',
    },
    {
      title: 'Project 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus, non alias repellat eaque, modi rem tempore quia error, aperiam architecto autem soluta sit incidunt temporibus magni reprehenderit maxime iusto?',
    },
  ];

  return (
    <Stack alignItems='center' spacing={3}>
      <Typography alignSelf='start' variant='h5' sx={{ opacity: 0.5 }}>
        Works /
      </Typography>

      <Grid container spacing={5}>
        {works.map((work, index) => (
          <Grid size={isSmallScreen ? 12 : 6} key={index}>
            <Paper>
              <Stack spacing={2}>
                <Typography variant='h5'>{work.title}</Typography>
                <Typography variant='body1'>{work.description}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Button sx={{ alignSelf: 'end' }} endIcon={<ArrowForwardIosIcon />}>
        <Typography>see more</Typography>
      </Button>
    </Stack>
  );
};

export default Works;
