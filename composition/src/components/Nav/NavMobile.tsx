'use client'

import {useState, ReactNode} from 'react'
import {twMerge} from 'tailwind-merge'

import {cn} from '@/utils'

interface Props {
  title: ReactNode
  children: ReactNode
  className?: string
}

const NavMobile = ({title, className, children}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={cn(
          'absolute right-0 top-0 z-0 h-screen w-screen opacity-0 lg:hidden',
          !isOpen && 'hidden'
        )}
        onClick={() => setIsOpen(false)}
      />
      <nav className={twMerge('z-10 mx-5 flex items-center lg:hidden', className)}>
        <button className="px-2 active:bg-transparent" onClick={() => setIsOpen((prev) => !prev)}>
          {typeof title === 'string' ? <span className="text-center">{title}</span> : title}
        </button>
        <ul
          onClick={() => setIsOpen(false)}
          className={cn(
            'absolute right-4 top-16 flex flex-col gap-3 overflow-hidden rounded-lg transition-all duration-300 ',
            isOpen ? 'right-1 top-16 max-h-max bg-zinc-700 p-4 opacity-95' : 'max-h-0'
          )}>
          {children}
        </ul>
      </nav>
    </>
  )
}

export default NavMobile
