'use client'

import Table from '@/components/TableDrilling/Table'
import {tableData, tableColumns} from '@/utils'

const Drilling = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-zinc-300 p-10 text-center">
      <label>Prop Drilling</label>
      <Table
        className="bg-red-500"
        title="Title"
        classNames={{
          table: 'bg-blue-500 border-2 text-red-700',
          body: 'bg-green-500 border-2 text-blue-700',
          cell: 'bg-yellow-500 border-2 text-green-700',
          header: 'bg-purple-500 border-2 text-yellow-700',
          headerCell: 'bg-gray-500 border-2 text-purple-700',
          headerRow: 'bg-brown-500 border-2 text-gray-700',
          row: 'bg-orange-500 border-2 text-brown-700',
          root: ' text-orange-700',
        }}
        data={tableData}
        columns={tableColumns}
      />
    </div>
  )
}

export default Drilling
