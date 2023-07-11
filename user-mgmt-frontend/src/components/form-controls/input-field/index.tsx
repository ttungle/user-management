import { InputText } from 'primereact/inputtext';
import { Controller, FieldValues } from 'react-hook-form';

export interface InputFieldProps {
  form: FieldValues;
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

export function InputField(props: InputFieldProps) {
  const { name, label, placeholder, form, disabled = false } = props;
  const { control } = form;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <InputText {...field} id={name} placeholder={placeholder} disabled={disabled} className="w-full mb-3 mt-1" />
        )}
      />
    </>
  );
}
