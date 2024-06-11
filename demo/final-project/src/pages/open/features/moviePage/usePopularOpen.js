import { useQuery } from '@tanstack/react-query';
import { getPopular } from '../../../../services/apiPopulars';
// import Popular from '../../../Popular';

export const usePopularOpen = () => {
  let {
    data: movie_name,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movie_name'],
    queryFn: getPopular,
  });
  return { movie_name, isLoading, error };
};
