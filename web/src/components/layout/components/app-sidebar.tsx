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
import { LogOut } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'

import { SignOutDialog } from '@/components/sign-out-dialog'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { useLayout } from '@/context/layout-provider'
import useDialogState from '@/hooks/use-dialog'
import { useSidebarView } from '@/hooks/use-sidebar-view'
import { useSystemConfig } from '@/hooks/use-system-config'
import { useUserDisplay } from '@/hooks/use-user-display'
import { getUserAvatarFallback } from '@/lib/avatar'
import { MOTION_TRANSITION, MOTION_VARIANTS } from '@/lib/motion'
import { useAuthStore } from '@/stores/auth-store'

import { NavGroup } from './nav-group'
import { SidebarViewHeader } from './sidebar-view-header'

export function AppSidebar() {
  const { t } = useTranslation()
  const { collapsible, variant } = useLayout()
  const { key, view, navGroups } = useSidebarView()
  const shouldReduce = useReducedMotion()
  const { systemName } = useSystemConfig()
  const user = useAuthStore((s) => s.auth.user)
  const { displayName, roleLabel } = useUserDisplay(user)
  const [signOutOpen, setSignOutOpen] = useDialogState()
  const initials = getUserAvatarFallback(user?.username || displayName || 'TH')
  const brandTitle = (systemName || 'TokenHub').toUpperCase()

  return (
    <>
      <Sidebar collapsible={collapsible} variant={variant}>
        {/* YedAgent-style Brand Header Block */}
        <SidebarHeader className='border-b-2 border-slate-800 bg-[#171424] px-4 py-4'>
          <Link
            to='/'
            className='flex items-center gap-3 outline-none group-data-[collapsible=icon]:justify-center'
          >
            <div className='flex size-9 shrink-0 items-center justify-center border border-white bg-[#54b08c] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.25)]'>
              <img
                src='/favicon.svg'
                alt={brandTitle}
                className='size-6 object-contain'
              />
            </div>
            <div className='min-w-0 group-data-[collapsible=icon]:hidden'>
              <h1 className='truncate text-base leading-none font-extrabold tracking-wider text-white uppercase'>
                {brandTitle}
              </h1>
              <span className='mt-1 block font-mono text-[10px] font-semibold tracking-widest text-[#72ebbb] uppercase'>
                AI GATEWAY
              </span>
            </div>
          </Link>
        </SidebarHeader>

        {view && <SidebarViewHeader view={view} />}

        <SidebarContent className='px-1 py-3'>
          <AnimatePresence mode='wait' initial={false}>
            <motion.div
              key={key}
              initial={
                shouldReduce ? false : MOTION_VARIANTS.sidebarSlide.initial
              }
              animate={MOTION_VARIANTS.sidebarSlide.animate}
              exit={
                shouldReduce ? undefined : MOTION_VARIANTS.sidebarSlide.exit
              }
              transition={MOTION_TRANSITION.fast}
              className='flex flex-col'
            >
              {navGroups.map((props) => (
                <NavGroup key={props.id || props.title} {...props} />
              ))}
            </motion.div>
          </AnimatePresence>
        </SidebarContent>

        {/* YedAgent-style Sidebar Footer with User Badge + Bold Crimson Sign Out */}
        <SidebarFooter className='border-t-2 border-slate-800 bg-[#171424] p-3'>
          <div className='flex items-center gap-2.5 group-data-[collapsible=icon]:justify-center'>
            <div className='flex size-9 shrink-0 items-center justify-center border-2 border-white bg-[#110e1b] font-mono text-xs font-extrabold text-white uppercase'>
              {initials}
            </div>
            <div className='min-w-0 flex-1 group-data-[collapsible=icon]:hidden'>
              <p className='truncate text-xs font-bold text-white'>
                {displayName}
              </p>
              <span className='mt-0.5 inline-block border border-[#54b08c]/50 bg-[#54b08c]/15 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider text-[#72ebbb] uppercase'>
                {roleLabel}
              </span>
            </div>
          </div>
          <button
            type='button'
            onClick={() => setSignOutOpen(true)}
            className='mt-2 flex w-full items-center justify-center gap-2 border-2 border-[#110e1b] bg-[#b91c1c] px-3 py-2 text-xs font-bold tracking-wide text-white uppercase transition-colors hover:bg-[#991b1b] group-data-[collapsible=icon]:px-0'
            title={t('Sign out')}
          >
            <LogOut className='size-4 shrink-0' />
            <span className='group-data-[collapsible=icon]:hidden'>
              {t('Sign out')}
            </span>
          </button>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SignOutDialog open={!!signOutOpen} onOpenChange={setSignOutOpen} />
    </>
  )
}
