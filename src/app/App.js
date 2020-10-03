import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import PublicRoutes from './routes/publicRoutes';
import Loading from 'app/components/common/loading';
import { setCurrentUser } from 'app/redux/actions';
import './style.scss';

const MainApp = React.lazy(() => import('app/components/common/layout'));
const AppContainer = () => {
  return (
    <React.Suspense fallback={''}>
      <MainApp />
    </React.Suspense>
  )
}

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const isLoggedIn = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const route = useHistory();


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.has('logout') && queryParams.get("logout") === 'true') {
      localStorage.removeItem('user');
      route.replace('/login');
    }
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      dispatch(setCurrentUser(currentUser));
      setLoading(false);
    } else {
      setLoading(false);
      route.replace('/login');
    }
    return () => {
      console.log('App unmounted')
    }
  }, [])

  if (isLoading) {
    return <Loading type="logo" />
  }

  return (
    <React.Fragment>
      {
        isLoggedIn && !isLoading ? <AppContainer /> : <PublicRoutes />
      }
    </React.Fragment>
  )
}