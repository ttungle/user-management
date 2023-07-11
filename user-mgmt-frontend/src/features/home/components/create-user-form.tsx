import { FieldValues, useForm } from 'react-hook-form';
import { InputField } from '../../../components/form-controls/input-field';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../../../api/user';

export interface CreateUserFormProps {
  onSubmitSuccess: (value: boolean) => void;
}

export function CreateUserForm({ onSubmitSuccess }: CreateUserFormProps) {
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      name: '',
      username: '',
      email: '',
    },
  });

  const { handleSubmit } = form;

  const { mutate } = useMutation({
    mutationKey: ['createUser'],
    mutationFn: async (payload: any) => await userApi.createUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(['getAllUsers']);
      form.reset();
      onSubmitSuccess(false);
    },
  });

  const handleFormSubmit = (values: FieldValues) => {
    mutate(values);
  };

  return (
    <form id="create-user-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField form={form} name="name" label="Name" placeholder="Enter name" />

      <InputField form={form} name="username" label="User Name" placeholder="Enter user name" />

      <InputField form={form} name="email" label="Email" placeholder="Enter email address" />
    </form>
  );
}
