import { useMutation, useQuery } from '@tanstack/react-query';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { userApi } from '../../../api/user';
import useStore from '../../../app/store';
import { UserData } from '../../../models';
import { Table } from '../components';
import { CreateUserForm } from '../components/create-user-form';
import { ConfirmDialog } from 'primereact/confirmdialog';

export interface HomeProps {}

export default function Home(props: HomeProps) {
  const [isUserDialogVisible, setIsUserDialogVisible, userData, setUserData, showDeleteConfirm, setShowDeleteConfirm] =
    useStore((state) => [
      state.isUserDialogVisible,
      state.setIsUserDialogVisible,
      state.userData,
      state.setUserData,
      state.showDeleteConfirm,
      state.setShowDeleteConfirm,
    ]);

  const form = useForm({
    defaultValues: {
      name: '',
      username: '',
      email: '',
    },
  });

  const { setValue } = form;

  useEffect(() => {
    setValue('name', userData.name);
    setValue('username', userData.username);
    setValue('email', userData.email);
  }, [userData]);

  const { data: userList, refetch } = useQuery({
    queryKey: ['getAllUsers'],
    queryFn: async () => await userApi.getAllUsers(),
  });

  const { mutate: createUser } = useMutation({
    mutationKey: ['createUser'],
    mutationFn: async (payload: any) => await userApi.createUser(payload),
    onSuccess: () => {
      refetch();
      form.reset();
      setIsUserDialogVisible(false);
    },
  });

  const { mutate: updateUser } = useMutation({
    mutationKey: ['updateUser'],
    mutationFn: async (payload: any) => await userApi.updateUser(userData.id, payload),
    onSuccess: () => {
      refetch();
      form.reset();
      setIsUserDialogVisible(false);
    },
  });

  const { mutate: deleteUser } = useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: async () => await userApi.deleteUser(userData.id),
    onSuccess: () => {
      refetch();
      setShowDeleteConfirm(false);
    },
  });

  const handleFormSubmit = (values: FieldValues) => {
    if (Object.values(userData).length > 0) {
      updateUser(values);
      return;
    }

    createUser(values);
  };

  const handleCloseClick = () => {
    setIsUserDialogVisible(false);
    setUserData({} as UserData);
  };

  const handleDeleteUser = () => {
    deleteUser();
  };

  return (
    <>
      <Button label="Add User" size="small" className="my-4" onClick={() => setIsUserDialogVisible(true)} />

      <Table data={userList} />

      <Dialog
        header="Add User"
        visible={isUserDialogVisible}
        onHide={handleCloseClick}
        style={{ width: '25vw' }}
        breakpoints={{ '960px': '60vw', '641px': '90vw' }}
      >
        <CreateUserForm form={form} onSubmit={handleFormSubmit} />
      </Dialog>

      <ConfirmDialog
        visible={showDeleteConfirm}
        onHide={() => setShowDeleteConfirm(false)}
        message="Are you sure you want to delete?"
        header="Delete Confirmation"
        icon="pi pi-info-circle"
        acceptClassName="p-button-danger"
        accept={handleDeleteUser}
        reject={() => setShowDeleteConfirm(false)}
      />
    </>
  );
}
