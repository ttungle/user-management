import { Outlet } from 'react-router-dom';
import { Header } from '../header';

export interface MainLayoutProps {}

export function MainLayout(props: MainLayoutProps) {
  return (
    <div className="flex flex-column">
      <Header />

      <main className="flex-1 w-8 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
