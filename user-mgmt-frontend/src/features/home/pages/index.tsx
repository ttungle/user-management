import { Button } from 'primereact/button';
import { Table } from '../components';
import { useQuery } from '@tanstack/react-query';
import { userApi } from '../../../api/user';

export interface HomeProps {}

export default function Home(props: HomeProps) {
  const { data: userList } = useQuery({
    queryKey: ['getAllUsers'],
    queryFn: async () => await userApi.getAllUsers(),
  });

  console.log('>>> Check data: ', userList);

  return (
    <div>
      <Button label="Add User" size="small" className="my-4" />

      <Table data={userList} />
    </div>
  );
}
