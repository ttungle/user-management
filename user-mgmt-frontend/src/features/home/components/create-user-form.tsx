import { Button } from 'primereact/button';
import { FieldValues } from 'react-hook-form';
import useStore from '../../../app/store';
import { InputField } from '../../../components/form-controls/input-field';
import { UserData } from '../../../models';

export interface CreateUserFormProps {
  form: FieldValues;
  onSubmit: (values: FieldValues) => void;
}

export function CreateUserForm({ form, onSubmit }: CreateUserFormProps) {
  const [setIsUserDialogVisible, setUserData] = useStore((state) => [state.setIsUserDialogVisible, state.setUserData]);

  const handleFormSubmit = (values: FieldValues) => {
    if (!onSubmit) return;

    onSubmit(values);
  };

  const handleCancelClick = () => {
    setIsUserDialogVisible(false);
    setUserData({} as UserData);
    form.reset();
  };

  return (
    <form id="create-user-form" onSubmit={form.handleSubmit(handleFormSubmit)}>
      <InputField form={form} name="name" label="Name" placeholder="Enter name" />

      <InputField form={form} name="username" label="User Name" placeholder="Enter user name" />

      <InputField form={form} name="email" label="Email" placeholder="Enter email address" />

      <div className="flex justify-content-end">
        <Button label="Cancel" size="small" className="mt-3 mr-2" outlined onClick={handleCancelClick} />
        <Button form="create-user-form" type="submit" label="Submit" size="small" className="mt-3" />
      </div>
    </form>
  );
}
