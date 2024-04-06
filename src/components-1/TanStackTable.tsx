import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useState } from 'react';
import { USERS } from '../data';
import { Table } from './Table';

type Person = {
  No: number;
  profile: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
};

export const TanStackTable = () => {
  const [data] = useState(() => [...USERS]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columnHelper = createColumnHelper<Person>();

  const columns = [
    columnHelper.accessor('No', {
      id: 'S.No',
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: 'S.No'
    }),
    columnHelper.accessor('profile', {
      cell: (info) => (
        <img
          src={info?.getValue()}
          alt="..."
          className="rounded-full w-10 h-10 object-cover"
        />
      ),
      header: 'Profile'
    }),
    columnHelper.accessor('firstName', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'First Name'
    }),
    columnHelper.accessor('lastName', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Last Name'
    }),
    columnHelper.accessor('age', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Age'
    }),
    columnHelper.accessor('visits', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Visits'
    }),
    columnHelper.accessor('progress', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Progress'
    })
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  return (
    <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
      <Table
        table={table}
        data={data}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </div>
  );
};
