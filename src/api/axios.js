import axios from 'axios';
import { decodeToken, getRefreshTokens } from '../utils/token';

const Axios = axios.create({ baseURL: 'http://localhost:2000' });

// Axios.interceptors.request.use(async (req) => {
//   if (!decodeToken()) {
//     await getRefreshTokens();
//   }
// });
