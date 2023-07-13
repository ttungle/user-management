import { useQuery } from '@tanstack/react-query';
import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import { useNavigate, useParams } from 'react-router-dom';
import { userApi } from '../../../api/user';
import { Button } from 'primereact/button';

export interface UserDetailsPageProps {}

export function UserDetailsPage(props: UserDetailsPageProps) {
  const params = useParams();
  const navigate = useNavigate();

  const { data: userData } = useQuery({
    queryKey: ['getUser', params?.id],
    queryFn: async () => await userApi.getUser(Number(params?.id)),
  });

  return (
    <Card title="User details" className="mt-8">
      <Avatar icon="pi pi-user" className="mb-4" size="xlarge" shape="circle" />

      <div>
        <span className="font-bold">Id:</span>
        <span className="ml-2">{userData?.id}</span>
      </div>

      <div>
        <span className="font-bold">Name:</span>
        <span className="ml-2">{userData?.name}</span>
      </div>

      <div>
        <span className="font-bold">User Name:</span>
        <span className="ml-2">{userData?.username}</span>
      </div>

      <div>
        <span className="font-bold">Email:</span>
        <span className="ml-2">{userData?.email}</span>
      </div>

      <div className="flex justify-content-end">
        <Button onClick={() => navigate('/')}>Back To Home</Button>
      </div>
    </Card>
  );
}
