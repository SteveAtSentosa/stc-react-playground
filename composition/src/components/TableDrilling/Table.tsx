import classNameCompose from 'classnames'
import {toPairs} from 'ramda'
import React from 'react'
import {useTable, Column} from 'react-table'

const TableTitle = ({text}: {text: string}) => {
  return <h3>{text}</h3>
}

//*****************************************************************************
// Interface
//*****************************************************************************

// To customize styling of specific table elements
type ClassNamesShape = {
  root: string
  table: string
  header: string
  headerRow: string
  headerCell: string
  body: string
  row: string
  cell: string
}

type TableType = {
  title?: string // optional, only displayed if provided
  columns: Column<Object>[]
  data: Object[]
  className: string // applied to root container
  classNames: ClassNamesShape // applied to specific table elements
}

const defaultProps = {
  className: '',
  classNames: {},
  columns: [],
  data: [],
}

//*****************************************************************************
// Components
//*****************************************************************************

const Table = ({title, columns = [], data = [], classNames, className = ''}: TableType) => {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data,
  })

  const cn = {
    root: `${className}`,
    table: 'table-fixed',
    header: 'text-xs font-semibold text-zinc-500 text-left',
    headerRow: '',
    headerCell: 'pl-6 pb-4',
    body: 'text-zinc-400 text-sm',
    row: 'border-t last:border-b border-zinc-800',
    cell: 'px-6 py-4',
  }

  // Apply custom styling
  for (const [key, value] of toPairs(cn)) cn[key] = classNameCompose(value, classNames?.[key])

  return (
    <div className={cn.root}>
      {title && <TableTitle text={title} />}
      <table {...getTableProps()} className={cn.table}>
        {/* Table Header */}

        <thead className={cn.header}>
          {/* May be multiple headers */}
          {headerGroups.map((headerGroup) => (
            /* Current header row */
            <tr {...headerGroup.getHeaderGroupProps()} className={cn.headerRow}>
              {headerGroup.headers.map((column) => {
                return (
                  /* Current header cell */
                  <th {...column.getHeaderProps()} className={cn.headerCell}>
                    {column.render('Header')}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>

        {/* Table Body */}

        <tbody {...getTableBodyProps()} className={cn.body}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              /* table row */
              <tr {...row.getRowProps()} className={cn.row}>
                {row.cells.map((cell) => {
                  /* table cell */
                  // Allowing column specific class names
                  const colClassName = cell?.column?.className
                  return (
                    <td
                      className={classNameCompose(cn.cell, colClassName)}
                      {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
