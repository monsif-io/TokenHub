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
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { isValidElement } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border-2 border-transparent bg-clip-padding text-sm font-bold whitespace-nowrap transition-all duration-100 outline-none select-none focus-visible:border-[#54b08c] focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'border-[#110e1b] bg-[#54b08c] text-[#110e1b] shadow-[3px_3px_0px_0px_#110e1b] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:bg-[#72ebbb] hover:shadow-[4px_4px_0px_0px_#110e1b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#110e1b] dark:border-[#72ebbb] dark:shadow-[3px_3px_0px_0px_#000]',
        outline:
          'border-[#110e1b] bg-white text-[#110e1b] shadow-[2px_2px_0px_0px_#110e1b] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:bg-[#f7f4f4] hover:shadow-[3px_3px_0px_0px_#110e1b] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none aria-expanded:bg-[#f7f4f4] dark:border-[#3a3454] dark:bg-[#171424] dark:text-[#f7f4f4] dark:shadow-[2px_2px_0px_0px_#000] dark:hover:bg-[#1e1b2e]',
        secondary:
          'border-[#110e1b] bg-[#110e1b] text-white shadow-[3px_3px_0px_0px_#72ebbb] hover:bg-[#221c35] hover:text-[#72ebbb] aria-expanded:bg-[#221c35] dark:border-[#54b08c]',
        ghost:
          'border-transparent shadow-none hover:bg-[#72ebbb]/20 hover:text-[#110e1b] aria-expanded:bg-[#72ebbb]/20 dark:hover:bg-[#221c35] dark:hover:text-[#72ebbb]',
        destructive:
          'border-[#110e1b] bg-[#b91c1c] text-white shadow-[3px_3px_0px_0px_#110e1b] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:bg-[#991b1b] hover:shadow-[4px_4px_0px_0px_#110e1b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#110e1b]',
        link: 'border-transparent text-[#54b08c] font-bold underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-9 gap-1.5 px-3.5 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5',
        xs: "h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-none px-2.5 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-11 gap-2 px-5 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5',
        icon: 'size-9',
        'icon-xs': "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8 rounded-none',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function isNativeButtonRender(render: ButtonPrimitive.Props['render']) {
  if (!render || !isValidElement(render)) {
    return true
  }

  return render.type === 'button'
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  nativeButton,
  render,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      nativeButton={nativeButton ?? isNativeButtonRender(render)}
      render={render}
      {...props}
    />
  )
}

export { Button, buttonVariants }
