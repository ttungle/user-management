import { Button } from 'primereact/button';
import * as React from 'react';

export interface ActionCellProps {}

export function ActionCell(props: ActionCellProps) {
  return (
    <>
      <Button label="View" size="small" className="mr-2" />
      <Button label="Edit" size="small" className="mr-2" severity="secondary" />
      <Button label="Delete" size="small" severity="danger" />
    </>
  );
}
