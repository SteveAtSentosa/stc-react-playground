'use client'

import Link, {LinkProps} from 'next/link'
import {usePathname} from 'next/navigation'
import {HTMLProps, memo} from 'react'
import {twMerge} from 'tailwind-merge'

import {cn} from '@/utils'

interface Props extends LinkProps<HTMLProps<HTMLAnchorElement>> {
  children: string
  textClassName?: string
}

const NavLink = ({href, className, textClassName, children, ...props}: Props) => {
  const pathname = usePathname()
  return (
    <li className="flex items-center justify-center">
      <Link href={href} className={twMerge('flex', className)} {...props}>
        <label
          className={cn(
            'cursor-pointer text-center text-sm',
            textClassName,
            pathname === href && 'text-primary-100'
          )}>
          {children}
        </label>
      </Link>
    </li>
  )
}

export default memo(NavLink)
