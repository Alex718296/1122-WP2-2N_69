import { useQuery } from '@tanstack/react-query';
import { getHome } from '../../services/apiHomes';

export const useBookings = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['singer'],
    queryFn: getHome,
  });
  return { data: singer, isLoading, error };
};
