import SingleItem_xx from './SingleItem_xx';

import {useQuery} from '@tanstack/react-query';

import customFetch_69 from "./utils_69";

const Items_xx = ({items}) => {
  //   const {data, isLoading, isError, error} = useQuery({
  //     queryKey:['tasks'],
  //     queryFn: async()=>{
  //       const {data} = await customFetch_69.get('/');
  //       return data;
  //     },
  // })
  // console.log('data',data);
  // console.log('error', error);
  const result = useQuery({
    queryKey:['tasks'],
    queryFn:()=>customFetch_69.get('/'),
  })
  console.log('result',result);
  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem_xx key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_xx;
