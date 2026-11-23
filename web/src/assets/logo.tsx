import { type SVGProps } from 'react'

import { cn } from '@/lib/utils'

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      id='tokenhub-logo'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 104 104'
      fill='none'
      role='img'
      aria-label='TokenHub'
      className={cn('size-6', className)}
      {...props}
    >
      <title>TokenHub</title>
      <g strokeLinecap='round' strokeLinejoin='round'>
        <path d='M16 31H40' stroke='#FF785E' strokeWidth='14' />
        <path d='M64 31H88' stroke='#FF785E' strokeWidth='14' />
        <path d='M52 43V88' stroke='#FF785E' strokeWidth='14' />
        <rect
          x='42.5'
          y='21.5'
          width='19'
          height='19'
          rx='4.5'
          transform='rotate(45 52 31)'
          fill='#C6F36A'
        />
      </g>
    </svg>
  )
}
