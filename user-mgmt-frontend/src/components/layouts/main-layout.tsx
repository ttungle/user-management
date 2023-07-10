import { Outlet } from 'react-router-dom';
import { Header } from '../header';

export interface MainLayoutProps {}

export function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
