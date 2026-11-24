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
import { Coins } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { ConfigDrawer } from '@/components/config-drawer'
import { LanguageSwitcher } from '@/components/language-switcher'
import { NotificationPopover } from '@/components/notification-popover'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { useNotifications } from '@/hooks/use-notifications'
import { useTopNavLinks } from '@/hooks/use-top-nav-links'
import { useUserDisplay } from '@/hooks/use-user-display'
import { formatQuota } from '@/lib/format'
import { useAuthStore } from '@/stores/auth-store'

import { defaultTopNavLinks } from '../config/top-nav.config'
import type { TopNavLink } from '../types'
import { Header } from './header'
import { TopNav } from './top-nav'

/**
 * General application Header component
 * Integrates navigation bar, search, configuration and profile functions
 *
 * @example
 * // Basic usage
 * <AppHeader />
 *
 * @example
 * // Custom navigation links
 * <AppHeader navLinks={customLinks} />
 *
 * @example
 * // Hide navigation bar and search box
 * <AppHeader showTopNav={false} showSearch={false} />
 *
 * @example
 * // Fully customize left and right content
 * <AppHeader
 *   leftContent={<CustomLeft />}
 *   rightContent={<CustomRight />}
 * />
 */
type AppHeaderProps = {
  /**
   * Custom navigation links, uses default global navigation or dynamically generated from backend if not provided
   */
  navLinks?: TopNavLink[]
  /**
   * Whether to show top navigation bar
   * @default true
   */
  showTopNav?: boolean
  /**
   * Left content, overrides TopNav if provided
   */
  leftContent?: React.ReactNode
  /**
   * Whether to show search box
   * @default true
   */
  showSearch?: boolean
  /**
   * Custom right content, overrides default right content if provided
   */
  rightContent?: React.ReactNode
  /**
   * Whether to show notification button
   * @default true
   */
  showNotifications?: boolean
  /**
   * Whether to show config drawer
   * @default true
   */
  showConfigDrawer?: boolean
  /**
   * Whether to show profile dropdown
   * @default true
   */
  showProfileDropdown?: boolean
}

export function AppHeader({
  navLinks = defaultTopNavLinks,
  showTopNav = false,
  leftContent,
  showSearch = true,
  rightContent,
  showNotifications = true,
  showConfigDrawer = true,
  showProfileDropdown = true,
}: AppHeaderProps) {
  const { t } = useTranslation()
  const dynamicLinks = useTopNavLinks()
  const links = dynamicLinks.length > 0 ? dynamicLinks : navLinks
  const notifications = useNotifications()
  const user = useAuthStore((s) => s.auth.user)
  const { roleLabel } = useUserDisplay(user)
  const quotaDisplay = formatQuota(Number(user?.quota ?? 0))

  return (
    <Header>
      {/* Left: YedAgent-style Role Badge + Workspace Label */}
      <div className='flex min-w-0 flex-1 items-center gap-3'>
        <span className='brutalist-shadow-sm hidden border-2 border-[#110e1b] bg-blue-100 px-3 py-1 font-mono text-xs font-bold tracking-wider text-blue-900 uppercase sm:inline-flex dark:border-[#54b08c] dark:bg-blue-950/60 dark:text-blue-200'>
          {roleLabel}
        </span>
        {user?.group ? (
          <span className='text-muted-foreground hidden border-l border-[#110e1b]/20 pl-3 text-xs font-bold md:inline-block dark:border-slate-700'>
            TokenHub • {String(user.group)}
          </span>
        ) : null}
        {leftContent ? (
          <div className='ms-1 flex items-center'>{leftContent}</div>
        ) : null}
      </div>

      {rightContent ?? (
        <div className='ms-auto flex shrink-0 items-center gap-2 sm:gap-3'>
          {showTopNav && (
            <div className='me-1 hidden xl:block'>
              <TopNav links={links} />
            </div>
          )}

          {/* YedAgent-style Quota / Token Balance Box */}
          <Link
            to='/wallet'
            className='brutalist-shadow-sm hidden items-center gap-2 border-2 border-[#110e1b] bg-[#f7f4f4] px-3 py-1 transition-colors hover:bg-[#72ebbb]/20 sm:flex dark:border-[#3a3454] dark:bg-[#110e1b]'
          >
            <Coins className='size-4 shrink-0 text-[#54b08c]' />
            <div className='flex flex-col leading-none'>
              <span className='text-muted-foreground text-[9px] font-bold tracking-wider uppercase'>
                {t('Balance')}
              </span>
              <span className='text-foreground font-mono text-xs font-extrabold'>
                {quotaDisplay}
              </span>
            </div>
          </Link>

          {showSearch && (
            <Search className='w-9 flex-none [&>span]:hidden lg:w-44 lg:[&>span]:inline' />
          )}
          {showNotifications && (
            <NotificationPopover
              open={notifications.popoverOpen}
              onOpenChange={notifications.setPopoverOpen}
              unreadCount={notifications.unreadCount}
              activeTab={notifications.activeTab}
              onTabChange={notifications.setActiveTab}
              notice={notifications.notice}
              announcements={notifications.announcements}
              loading={notifications.loading}
            />
          )}
          <LanguageSwitcher />
          {showConfigDrawer && <ConfigDrawer />}
          {showProfileDropdown && (
            <div className='border-l border-[#110e1b]/20 pl-2 sm:pl-3 dark:border-slate-700'>
              <ProfileDropdown />
            </div>
          )}
        </div>
      )}
    </Header>
  )
}
