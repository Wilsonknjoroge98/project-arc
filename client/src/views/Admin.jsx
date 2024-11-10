import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { useQuery } from '@tanstack/react-query';
import { getRequests } from '../utils/query';
import { Divider } from '@mui/material';

const Admin = () => {
  const {
    data: requests,
    isError,
    isPending,
  } = useQuery({
    queryKey: ['requests'],
    queryFn: getRequests,
  });

  if (isPending) {
    return (
      <Stack
        justifyContent='flex-start'
        textAlign='center'
        width='98%'
        maxWidth='lg'
        alignSelf='center'
        spacing={5}
        px={2}
        sx={{ height: '100%', width: '100%', maxWidth: 'xl' }}
      >
        <Typography>Fetching Requests...</Typography>
        <LinearProgress />
      </Stack>
    );
  }

  if (isError) {
    return (
      <Stack
        justifyContent='flex-start'
        textAlign='center'
        width='98%'
        maxWidth='lg'
        alignSelf='center'
        spacing={5}
        px={2}
        sx={{ height: '100%', width: '100%', maxWidth: 'xl' }}
      >
        <Typography>Failed to fetch requests</Typography>
      </Stack>
    );
  }

  return (
    <Stack maxWidth='xl' alignSelf='center' width='98%'>
      <Typography variant='h5' alignSelf='start' sx={{ opacity: 0.5, mb: 3 }}>
        Requests /
      </Typography>

      {requests.map((request) => (
        <Accordion key={request.id}>
          <AccordionSummary>
            <Stack spacing={5} direction='row'>
              <Typography variant='h6'>{request.name}</Typography>
              <Divider flexItem orientation='vertical' />

              <Typography variant='body1'>{request.date}</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              <Typography variant='body1'>{request.description}</Typography>
              <Divider flexItem />
              <Typography mt={2} variant='body1'>
                {request.email}
              </Typography>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default Admin;
