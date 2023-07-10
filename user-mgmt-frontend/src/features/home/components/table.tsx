import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState } from 'react';

export interface TableProps {
  data: any[];
}

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export function Table({ data }: TableProps) {
  return (
    <div className="card">
      <DataTable value={data} tableStyle={{ width: '100%' }}>
        <Column field="id" header="Id"></Column>
        <Column field="username" header="User Name"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
      </DataTable>
    </div>
  );
}
