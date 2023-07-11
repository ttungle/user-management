import { Button } from 'primereact/button';
import { Table } from '../components';
import { useQuery } from '@tanstack/react-query';
import { userApi } from '../../../api/user';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { CreateUserForm } from '../components/create-user-form';
import { FieldValues, useForm } from 'react-hook-form';

export interface HomeProps {}

export default function Home(props: HomeProps) {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  const { data: userList } = useQuery({
    queryKey: ['getAllUsers'],
    queryFn: async () => await userApi.getAllUsers(),
  });

  const handleSubmitSuccess = (value: boolean) => {
    setVisible(value);
  };

  return (
    <>
      <Button label="Add User" size="small" className="my-4" onClick={() => setVisible(true)} />

      <Table data={userList} />

      <Dialog
        header="Add User"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: '25vw' }}
        breakpoints={{ '960px': '60vw', '641px': '90vw' }}
      >
        <CreateUserForm onSubmitSuccess={handleSubmitSuccess} />

        <div className="flex justify-content-end">
          <Button label="Cancel" size="small" className="mt-3 mr-2" outlined onClick={() => setVisible(false)} />
          <Button form="create-user-form" type="submit" label="Submit" size="small" className="mt-3" />
        </div>
      </Dialog>
    </>
  );
}
