import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { rootRouter } from './components/layouts/root-routes';

function App() {
  return (
    <PrimeReactProvider>
      <RouterProvider router={rootRouter} />
    </PrimeReactProvider>
  );
}

export default App;
