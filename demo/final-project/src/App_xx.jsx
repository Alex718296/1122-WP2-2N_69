import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import LoginAppLayout from './ui/LoginAppLayout';
import LandingStatic from './pages/open/pages/LandingStatic_xx';
import Landing from './pages/open/pages/Landing_xx';
import GlobalStyles from './styles/GlobalStyles';
import ProtectedRoute from "./ui/ProtectedRoute";


import {
  Popular,
  Latest,
  StaffPicks,
  ComingSoon,
  MyMovieLlist,
  Login_xx,
  PageNotFound_xx,
  Settings_xx,
  NewUsers_xx,
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  
  {
    path: '/auth',
    element: (<ProtectedRoute><LoginAppLayout /></ProtectedRoute>),
    children: [
      {
        path: 'my_movie_llist',
        element: <MyMovieLlist />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login_xx />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children:[
      {
      index : true,
      element: <Popular/>    
    },
    {path: '/Popular',
      element:<Popular/> 
    },
    {path: '/Latest',
    element:<Latest/>
    },
    {path: '/StaffPicks',
    element:<StaffPicks/>
    },
    {path: '/ComingSoon',
    element:<ComingSoon/>
    },
    ]
  },
]);

const App_xx = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          styles: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-70)',
          },
        }}
      />
      <div className='tm-video-wrapper'>
        <i id='tm-video-control-button' className='fas fa-pause'></i>
        <video autoPlay muted loop id='tm-video'>
          <source src='video/wave-cafe-video-bg.mp4' type='video/mp4' />
        </video>
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_xx;
