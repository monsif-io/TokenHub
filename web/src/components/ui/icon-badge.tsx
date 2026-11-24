/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const iconBadgeVariants = cva(
  'flex shrink-0 items-center justify-center rounded-none border-2 border-[#110e1b] dark:border-[#3a3454] [&>svg]:shrink-0',
  {
    variants: {
      tone: {
        neutral: 'bg-[#f7f4f4] text-[#110e1b] dark:bg-[#1e1b2e] dark:text-[#f7f4f4]',
        primary: 'bg-[#72ebbb]/25 text-[#110e1b] dark:bg-[#54b08c]/20 dark:text-[#72ebbb]',
        success: 'bg-[#54b08c]/20 text-[#110e1b] dark:text-[#72ebbb]',
        warning: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
        info: 'bg-blue-100 text-blue-900 dark:bg-blue-950/60 dark:text-blue-300',
        destructive: 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300',
        'chart-1': 'bg-[#72ebbb]/25 text-[#110e1b] dark:bg-[#54b08c]/20 dark:text-[#72ebbb]',
        'chart-2': 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
        'chart-3': 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300',
        'chart-4': 'bg-[#eadeae]/60 text-[#110e1b]',
        'chart-5': 'bg-[#54b08c]/20 text-[#54b08c]',
      },
      size: {
        xs: 'size-6 rounded-none [&>svg]:size-3',
        sm: 'size-8 rounded-none [&>svg]:size-3.5',
        md: 'size-9 rounded-none [&>svg]:size-4',
        title: 'size-9 rounded-none sm:size-10 [&>svg]:size-4',
        lg: 'size-11 rounded-none [&>svg]:size-5',
        stat: 'size-7 rounded-none sm:size-9 [&>svg]:size-3.5 sm:[&>svg]:size-4',
      },
    },
    defaultVariants: {
      tone: 'neutral',
      size: 'md',
    },
  }
)

export type IconBadgeTone = NonNullable<
  VariantProps<typeof iconBadgeVariants>['tone']
>

export type IconBadgeSize = NonNullable<
  VariantProps<typeof iconBadgeVariants>['size']
>

interface IconBadgeProps {
  children?: ReactNode
  tone?: IconBadgeTone
  size?: IconBadgeSize
  className?: string
  decorative?: boolean
}

export function IconBadge(props: IconBadgeProps) {
  return (
    <span
      className={cn(
        iconBadgeVariants({ tone: props.tone, size: props.size }),
        props.className
      )}
      aria-hidden={props.decorative ?? true}
    >
      {props.children}
    </span>
  )
}
