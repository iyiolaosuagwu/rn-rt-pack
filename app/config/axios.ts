import axios, {Axios} from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 70000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const addInterceptors = async (_instance: Axios) => {
  const location = 'lagos';

  axiosInstance.interceptors.request.use((req: any) => {
    req.headers.location = location;
    return req;
  });

  axiosInstance.interceptors.response.use(
    async (response: any) => {
      if (response.data.status !== 200) {
        if (response.data.response_code === 1001) {
          //   store.dispatch(logout('login_screen'));
        }
      }
      return response.data;
    },
    (error: any) => {
      if (error.response.status === 401 || error.response.status === 404) {
        // store.dispatch(logout('login_screen'));
      }

      if (error.response.status === 500) {
        // store.dispatch(logout('login_screen'));
      }

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // logger('🛑', error.response.data);
        // logger('🛑', error.response.status);
        // logger('🛑', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // logger('🛑', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // logger('Error', '🛑', error.message);
      }

      // logger('🛑', error.config);

      return Promise.reject(error);
    },
  );
};

addInterceptors(axiosInstance);

export default axiosInstance;
