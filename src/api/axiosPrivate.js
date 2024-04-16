import axios from 'axios';
import { getTokens, setTokens } from '../utils/token';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const axiosInstance = () => {
  const { REACT_APP_BASE_URL } = process.env;
  const instance = axios.create({
    baseURL: REACT_APP_BASE_URL,
    withCredentials: true
  });

  const refreshAuthLogic = async (failedRequest) => {
    const { refresh_token } = getTokens();
    return axios
      .post(`${REACT_APP_BASE_URL}/auth/refresh-token`, {
        headers: { refresh_token: refresh_token }
      })
      .then((response) => {
        const { accessToken, refreshToken } = response?.data;
        setTokens(accessToken, refreshToken);
        failedRequest.response.config.headers['access_token'] = accessToken;
        failedRequest.response.config.headers['refresh_token'] = refreshToken;
        return Promise.resolve();
      })
      .catch((err) => {
        localStorage.clear();
        return Promise.reject(err);
      });
  };

  createAuthRefreshInterceptor(instance, refreshAuthLogic, {
    statusCodes: [401]
  });

  instance.interceptors.request.use(
    (config) => {
      const { access_token, refresh_token } = getTokens();
      config.headers.access_token = `${access_token}`;
      config.headers.refresh_token = `${refresh_token}`;
      return config;
    },
    (error) => {
      console.log('error adding authorization header to request', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error.response ?? error);
    }
  );

  return instance;
};

const axiosClient = axiosInstance();

export default axiosClient;
