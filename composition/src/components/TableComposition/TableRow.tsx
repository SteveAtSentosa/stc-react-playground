import {Row} from 'react-table'

import {cn} from '@/utils'

interface Props {
  row: Row<{}>
  prepareRow: () => void
  className?: string
  colClassName?: string
}
const TableRow = ({row, prepareRow, className, colClassName}: Props) => {
  prepareRow()

  return (
    /* table row */
    <tr {...row.getRowProps()} className={cn('border-t border-zinc-800 last:border-b', className)}>
      {row.cells.map((cell) => {
        /* table cell */
        return (
          <td
            className={cn('px-6 py-4', cell?.column?.className, colClassName)}
            {...cell.getCellProps()}>
            {cell.render('Cell')}
          </td>
        )
      })}
    </tr>
  )
}

export default TableRow
