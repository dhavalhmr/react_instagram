// import axiosPrivate from '../api/axiosPrivate';

export const getTokens = () => {
  return {
    access_token: localStorage.getItem('access_token'),
    refresh_token: localStorage.getItem('refresh_token'),
  };
};

export const setTokens = (access_token, refresh_token) => {
  localStorage.setItem('access_token', access_token);
  localStorage.setItem('refresh_token', refresh_token);
};

// export const decodeToken = async () => {
//   try {
//     const validToken = await axiosPrivate.get('/auth/verify-token');
//     console.log('validToken:', validToken);
//     return validToken.iat > Date.now();
//   } catch (error) {
//     console.log('error:', error);
//   }
// };

// export const getRefreshTokens = () => {
//   return axiosPrivate.get('/auth/refresh-token');
// };
