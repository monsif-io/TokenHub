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
import { SidebarTrigger } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

type HeaderProps = React.HTMLAttributes<HTMLElement>

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-20 h-16 w-full shrink-0 border-b-2 border-[#110e1b] bg-white dark:border-[#3a3454] dark:bg-[#171424]',
        className
      )}
      {...props}
    >
      <div className='flex h-full items-center gap-2 px-3 sm:gap-3 sm:px-6'>
        <SidebarTrigger
          variant='outline'
          className='size-9 shrink-0 rounded-none border-2 border-[#110e1b] bg-white shadow-[2px_2px_0px_0px_#110e1b] hover:bg-[#72ebbb]/20 dark:border-[#3a3454] dark:bg-[#110e1b]'
        />
        {children}
      </div>
    </header>
  )
}
