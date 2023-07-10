import { Button } from 'primereact/button';
import * as React from 'react';

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <div>
      <Button label="Add User" size="small" style={{ margin: '32px 0 0 32px' }} />
    </div>
  );
}
