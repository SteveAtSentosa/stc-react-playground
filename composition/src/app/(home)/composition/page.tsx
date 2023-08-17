'use client'

import {useTable} from 'react-table'

import Table from '@/components/TableComposition'
import {tableData, tableColumns} from '@/utils'

const Composition = () => {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
    columns: tableColumns,
    data: tableData,
  })

  return (
    <div className="flex h-screen w-screen flex-col items-center bg-zinc-300 p-10 text-center">
      <label>Composition Components</label>
      <div className="bg-red-500">
        <Table.Title>Title</Table.Title>
        <Table className="border-2 bg-blue-500 text-red-700" tableProps={getTableProps()}>
          <Table.Head
            headerGroups={headerGroups}
            className="bg-brown-500 border-2 text-gray-700"
            headerCellClassName="bg-gray-500 border-2 text-purple-700"
          />
          <Table.Body
            bodyProps={getTableBodyProps()}
            className="border-2 bg-green-500 text-blue-700">
            {rows.map((row) => (
              <Table.Row
                row={row}
                prepareRow={() => prepareRow(row)}
                className="text-brown-700 border-2 bg-orange-500"
                colClassName="bg-yellow-500 border-2 text-green-700"
              />
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default Composition
