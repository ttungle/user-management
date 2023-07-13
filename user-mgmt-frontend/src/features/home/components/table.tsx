import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { UserData } from '../../../models';
import { ActionCell } from './action-cell';

export interface TableProps {
  data: UserData[];
}

export function Table({ data }: TableProps) {
  return (
    <div className="card border-1 border-200">
      <DataTable value={data} tableStyle={{ width: '100%' }}>
        <Column field="id" header="Id"></Column>
        <Column field="username" header="User Name"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column header="Action" body={(data) => <ActionCell data={data} />}></Column>
      </DataTable>
    </div>
  );
}
