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
'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function Table({
  className,
  withContainer = true,
  ...props
}: React.ComponentProps<'table'> & { withContainer?: boolean }) {
  const table = (
    <table
      data-slot='table'
      className={cn(
        'w-full caption-bottom text-sm tabular-nums [font-family:var(--font-body)] [&_td]:text-sm [&_td]:font-medium [&_th]:text-sm [&_:is(th,td)_*]:[font-family:inherit] [&_:is(th,td)_*]:[font-size:inherit] [&_:is(th,td)_*]:[font-weight:inherit]',
        '[&_[data-table-text=secondary]]:text-xs [&_[data-table-text=secondary]]:font-normal',
        className
      )}
      {...props}
    />
  )

  if (!withContainer) return table

  return (
    <div
      data-slot='table-container'
      className='brutalist-shadow relative w-full overflow-x-auto overflow-y-hidden border-2 border-[#110e1b] bg-white dark:border-[#3a3454] dark:bg-[#171424]'
    >
      {table}
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot='table-header'
      className={cn(
        'bg-[#f7f4f4] dark:bg-[#110e1b] [&_tr]:border-b-2 [&_tr]:border-[#110e1b] dark:[&_tr]:border-[#3a3454]',
        className
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot='table-body'
      className={cn('[&>tr]:h-14 [&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot='table-footer'
      className={cn(
        'bg-[#f7f4f4] border-t-2 border-[#110e1b] font-bold dark:border-[#3a3454] dark:bg-[#110e1b] [&>tr]:last:border-b-0',
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot='table-row'
      className={cn(
        'group data-[state=selected]:bg-[#72ebbb]/20 border-b border-[#110e1b]/15 transition-colors hover:bg-[#f7f4f4]/80 dark:border-[#3a3454]/60 dark:hover:bg-[#1e1b2e]/70',
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot='table-head'
      className={cn(
        'text-muted-foreground h-11 px-3 text-left align-middle font-mono text-[11px] font-bold tracking-wider uppercase whitespace-nowrap [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot='table-cell'
      className={cn(
        'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot='table-caption'
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
