import axios from 'axios';

const getRequests = async ({ signal }) => {
  const controller = new AbortController();

  // request config for compulife server
  const options = {
    method: 'GET',
    signal: signal,
    url: import.meta.env.DEV
      ? `http://127.0.0.1:5001/project-arc-6e764/us-central1/app/requests`
      : 'https://us-central1-project-arc-6e764.cloudfunctions.net/app/requests',
  };

  // abort request when notified by react-query
  signal?.addEventListener('abort', () => {
    controller.abort();
  });

  // response from server
  const response = await axios.request(options);
  console.log(response);

  // return to component
  return response.data;
};

const postRequest = async ({ request }) => {
  // client side validation

  const controller = new AbortController();
  // request config for custom firebase endpoint
  const options = {
    method: 'POST',
    data: request,
    signal: controller.signal,
    url: import.meta.env.DEV
      ? `http://127.0.0.1:5001/project-arc-6e764/us-central1/app/request`
      : 'https://us-central1-project-arc-6e764.cloudfunctions.net/app/request',
  };

  // response from server
  const response = await axios.request(options);

  // return to component
  return response.data;
};

const postAuth = async ({ auth }) => {
  // request config for compulife server
  const options = {
    method: 'POST',
    data: auth,
    url: import.meta.env.DEV
      ? `http://127.0.0.1:5001/project-arc-6e764/us-central1/app/auth`
      : 'https://us-central1-project-arc-6e764.cloudfunctions.net/app/auth',
  };

  // response from server
  const response = await axios.request(options);
  console.log(response);

  // return to component
  return response.data;
};

export { getRequests, postRequest, postAuth };
