import React, {ReactNode} from 'react'
import {TableProps} from 'react-table'

import {cn} from '@/utils'

type TableType = {
  className?: string
  children: ReactNode
  tableProps: TableProps
}

const Table = ({className, children, tableProps}: TableType) => {
  return (
    <table {...tableProps} className={cn('table-fixed', className)}>
      {children}
    </table>
  )
}

export default Table
