import { Navigate } from 'react-router-dom';

export const UserAuthRoute = ({ Component }) => {
  const token = localStorage?.getItem('access_token');
  if (token) {
    return <Component />;
  } else {
    return <Navigate to="/auth/login" />;
  }
};

export const UnAuthRoute = ({ Component }) => {
  const token = localStorage?.getItem('access_token');
  if (token) {
    return <Navigate to="/homepage" />;
  } else {
    return <Component />;
  }
};
