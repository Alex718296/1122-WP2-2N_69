import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { HomeLayout_xx, HomePage_xx } from './pages';

import SupaGetBlog_xx from './pages/demo_xx/SupaGetBlog_xx';
import { Mid1SupaBlog_xx, Mid2NodeBlogLocal_xx, Mid2NodeBlogSupa_xx } from './pages/mid1_xx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout_xx />,
    children: [
      {
        index: true,
        element: <HomePage_xx />,
      },
      {
        path: 'mid1Blog_xx',
        element: <Mid1SupaBlog_xx />,
      },
      {
        path: 'mid2BlogLocal_xx',
        element: <Mid2NodeBlogLocal_xx />,
      },
      {
        path: 'mid2NodeBlogSupa_xx',
        element: <Mid2NodeBlogSupa_xx />,
      },
      {
        path: 'demoGetBlog_xx',
        element: <SupaGetBlog_xx />,
      },
    ],
  },
]);

const App_xx = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <App_xx /> */}
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
  // (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route exact path='/' element={<HomePage_xx />} />
  //       <Route path='/mid2Blog_xx' element={<Mid2NodeBlog_xx />} />
  //       <Route path='/mid1Blog_xx' element={<Mid1SupaBlog_xx />} />
  //       <Route path='/demoGetBlog_xx' element={<SupaGetBlog_xx />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
};

export default App_xx;
