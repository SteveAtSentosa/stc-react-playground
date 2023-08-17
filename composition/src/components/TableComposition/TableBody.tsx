import {ReactNode} from 'react'
import {TableBodyProps} from 'react-table'

import {cn} from '@/utils'

interface Props {
  bodyProps: TableBodyProps
  className?: string
  children: ReactNode
}
const TableBody = ({bodyProps, className, children}: Props) => {
  return (
    <tbody {...bodyProps} className={cn('text-sm text-zinc-400', className)}>
      {children}
    </tbody>
  )
}

export default TableBody
