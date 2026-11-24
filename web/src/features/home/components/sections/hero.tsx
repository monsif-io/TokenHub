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
import { ArrowRight, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { useStatus } from '@/hooks/use-status'

import { HeroTerminalDemo } from '../hero-terminal-demo'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { status } = useStatus()
  const docsUrl =
    (status?.docs_link as string | undefined) || '/about'

  const renderDocsButton = () => {
    const isExternal = docsUrl.startsWith('http')
    if (isExternal) {
      return (
        <Button
          variant='outline'
          className='group inline-flex h-11 items-center gap-2 rounded-none px-5 text-xs font-extrabold tracking-wider uppercase'
          render={
            <a href={docsUrl} target='_blank' rel='noopener noreferrer' />
          }
        >
          <BookOpen className='size-4' />
          <span>{t('Docs')}</span>
        </Button>
      )
    }
    return (
      <Button
        variant='outline'
        className='group inline-flex h-11 items-center gap-2 rounded-none px-5 text-xs font-extrabold tracking-wider uppercase'
        render={<Link to={docsUrl} />}
      >
        <BookOpen className='size-4' />
        <span>{t('Docs')}</span>
      </Button>
    )
  }

  return (
    <section className='bg-background relative z-10 overflow-hidden border-b-4 border-[#110e1b] px-6 pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 dark:border-[#3a3454]'>
      {/* Subtle architectural grid matching Neo-Brutalist blueprint aesthetic */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#110e1b12_1px,transparent_1px),linear-gradient(to_bottom,#110e1b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] dark:bg-[linear-gradient(to_right,#54b08c14_1px,transparent_1px),linear-gradient(to_bottom,#54b08c14_1px,transparent_1px)]'
      />

      <div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10'>
        {/* Left Column: Title, description, action buttons */}
        <div className='flex flex-col items-start text-left lg:col-span-6'>
          {/* YedAgent-style Brutalist Pill Badge */}
          <div
            className='landing-animate-fade-up brutalist-shadow-sm mb-6 inline-flex items-center gap-2 border-2 border-[#110e1b] bg-[#72ebbb]/30 px-3 py-1.5 font-mono text-[11px] font-bold tracking-wider text-[#110e1b] uppercase opacity-0 dark:border-[#54b08c] dark:bg-[#54b08c]/20 dark:text-[#72ebbb]'
            style={{ animationDelay: '0ms' }}
          >
            <span className='relative flex size-2'>
              <span className='absolute inline-flex h-full w-full animate-ping bg-[#54b08c] opacity-75' />
              <span className='relative inline-flex size-2 bg-[#54b08c]' />
            </span>
            <span>{t('AI Application Infrastructure Foundation')}</span>
          </div>

          <h1
            className='landing-animate-fade-up text-[clamp(2.2rem,4.5vw,3.35rem)] leading-[1.08] font-black tracking-tight uppercase'
            style={{ animationDelay: '60ms' }}
          >
            {t('Unified API Gateway for')}
            <br />
            <span className='mt-2 inline-block border-2 border-[#110e1b] bg-[#54b08c] px-3 py-1 text-[#110e1b] shadow-[4px_4px_0px_0px_#110e1b] dark:border-[#72ebbb]'>
              {t('Vast Range of AI Models')}
            </span>
          </h1>
          <p
            className='landing-animate-fade-up text-muted-foreground mt-6 max-w-xl text-sm leading-relaxed font-medium opacity-0 md:text-base'
            style={{ animationDelay: '120ms' }}
          >
            {t(
              'Access a vast selection of models via a standard, unified API protocol. Power AI applications, manage digital assets, and connect the Future.'
            )}
          </p>

          <div
            className='landing-animate-fade-up mt-8 flex flex-wrap items-center gap-3 opacity-0'
            style={{ animationDelay: '180ms' }}
          >
            {props.isAuthenticated ? (
              <>
                <Button
                  className='group h-11 rounded-none px-6 text-xs font-extrabold tracking-wider uppercase'
                  render={<Link to='/dashboard' />}
                >
                  {t('Go to Dashboard')}
                  <ArrowRight className='ml-1.5 size-4 transition-transform duration-150 group-hover:translate-x-1' />
                </Button>
                {renderDocsButton()}
              </>
            ) : (
              <>
                <Button
                  className='group h-11 rounded-none px-6 text-xs font-extrabold tracking-wider uppercase'
                  render={<Link to='/sign-up' />}
                >
                  {t('Get Started')}
                  <ArrowRight className='ml-1.5 size-4 transition-transform duration-150 group-hover:translate-x-1' />
                </Button>
                <Button
                  variant='outline'
                  className='h-11 rounded-none px-5 text-xs font-extrabold tracking-wider uppercase'
                  render={<Link to='/pricing' />}
                >
                  {t('View Pricing')}
                </Button>
                {renderDocsButton()}
              </>
            )}
          </div>
        </div>

        {/* Right Column: Hero Terminal API Demo */}
        <div
          className='landing-animate-fade-up flex w-full justify-center opacity-0 lg:col-span-6'
          style={{ animationDelay: '260ms' }}
        >
          <div className='w-full border-4 border-[#110e1b] shadow-[6px_6px_0px_0px_#54b08c] dark:border-[#54b08c]'>
            <HeroTerminalDemo className='mt-0' />
          </div>
        </div>
      </div>
    </section>
  )
}
