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
import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-none border border-[#110e1b] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all focus-visible:border-[#54b08c] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 dark:border-[#3a3454] [&>svg]:pointer-events-none [&>svg]:size-3!',
  {
    variants: {
      variant: {
        default: 'bg-[#54b08c] text-[#110e1b] [a]:hover:bg-[#72ebbb]',
        secondary:
          'bg-[#f7f4f4] text-[#110e1b] dark:bg-[#221c35] dark:text-[#72ebbb]',
        destructive:
          'border-red-800 bg-red-100 text-red-900 dark:bg-red-950/60 dark:text-red-300',
        warning:
          'border-amber-700 bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-300',
        outline:
          'border-[#110e1b] bg-white text-[#110e1b] dark:border-[#3a3454] dark:bg-[#171424] dark:text-[#f7f4f4]',
        ghost:
          'border-transparent hover:bg-[#72ebbb]/20 hover:text-[#110e1b]',
        link: 'border-transparent text-[#54b08c] underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function Badge({
  className,
  variant = 'default',
  render,
  ...props
}: useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: 'badge',
      variant,
    },
  })
}

export { Badge, badgeVariants }
