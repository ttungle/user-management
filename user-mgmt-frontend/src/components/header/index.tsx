import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const start = (
    <div className="flex justify-content-center align-items-center">
      <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2" />
      <p className="font-semibold text-indigo-500 text-xl mr-6">User Management</p>
    </div>
  );
  const end = <InputText placeholder="Search" type="text" className="w-full" />;

  return (
    <div className="card">
      <Menubar start={start} end={end} className="px-8" />
    </div>
  );
}
