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
import { Link } from '@tanstack/react-router'

import { Skeleton } from '@/components/ui/skeleton'
import { useSystemConfig } from '@/hooks/use-system-config'

type AuthLayoutProps = {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { systemName, loading } = useSystemConfig()
  const brandName = (systemName || 'TokenHub').toUpperCase()
  const currentYear = new Date().getFullYear()

  return (
    <div className='bg-background text-foreground flex min-h-svh flex-col items-center justify-center p-6 font-sans'>
      {/* YedAgent-style Centered Brand Header Above Card */}
      <Link
        to='/'
        className='mb-8 flex items-center gap-3 outline-none transition-transform hover:-translate-y-0.5'
      >
        {loading ? (
          <Skeleton className='h-11 w-44 rounded-none' />
        ) : (
          <>
            <div className='brutalist-shadow-sm flex size-11 shrink-0 items-center justify-center border-2 border-[#110e1b] bg-[#54b08c] dark:border-[#72ebbb]'>
              <img
                src='/favicon.svg'
                alt={brandName}
                className='size-7 object-contain'
              />
            </div>
            <div>
              <h1 className='text-2xl leading-none font-extrabold tracking-wider uppercase'>
                {brandName}
              </h1>
              <span className='mt-0.5 block text-xs font-bold tracking-widest text-[#54b08c] uppercase'>
                UNIFIED AI API GATEWAY
              </span>
            </div>
          </>
        )}
      </Link>

      {/* YedAgent-style Thick 4px Bordered Card with Hard Offset Shadow */}
      <div className='bg-card brutalist-shadow relative w-full max-w-md border-4 border-[#110e1b] p-8 dark:border-[#54b08c]'>
        {children}
      </div>

      {/* YedAgent-style Monospace Copyright Footer */}
      <div className='mt-8 text-center'>
        <p className='text-muted-foreground font-mono text-[10px] font-semibold tracking-wider uppercase'>
          {brandName} GATEWAY • © {currentYear}
        </p>
      </div>
    </div>
  )
}
