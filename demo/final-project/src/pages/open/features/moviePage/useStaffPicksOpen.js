import { useQuery } from '@tanstack/react-query';
import { getStaffPicks } from '../../../../services/apiStaffPicks';
// import Popular from '../../../Popular';

export const useStaffPicksOpen = () => {
  let {
    data: movie_name,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movie_name'],
    queryFn: getStaffPicks,
  });
  return { movie_name, isLoading, error };
};
