import {HeaderGroup} from 'react-table'

import {cn} from '@/utils'

interface Props {
  headerGroups: HeaderGroup<{}>[]
  className?: string
  headerCellClassName?: string
}

const TableHead = ({headerGroups, className, headerCellClassName}: Props) => {
  return (
    <thead className={cn('text-left text-xs font-semibold text-zinc-500', className)}>
      {/* May be multiple headers */}
      {headerGroups.map((headerGroup) => (
        /* Current header row */
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => {
            return (
              /* Current header cell */
              <th {...column.getHeaderProps()} className={cn('pb-4 pl-6', headerCellClassName)}>
                {column.render('Header')}
              </th>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

export default TableHead
