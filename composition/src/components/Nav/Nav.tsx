import {ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'

interface Props {
  children: ReactNode
  className?: string
}

const Nav = ({children, className}: Props) => {
  return (
    <nav className="hidden w-screen lg:grid">
      <ul className={twMerge('grid grid-cols-5 items-center gap-2', className)}>{children}</ul>
    </nav>
  )
}

export default Nav
