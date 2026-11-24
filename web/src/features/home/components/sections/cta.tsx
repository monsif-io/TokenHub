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
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'
import { Button } from '@/components/ui/button'

interface CTAProps {
  className?: string
  isAuthenticated?: boolean
}

export function CTA(props: CTAProps) {
  const { t } = useTranslation()

  if (props.isAuthenticated) {
    return null
  }

  return (
    <section className='relative z-10 border-t-4 border-[#110e1b] bg-[#110e1b] px-6 py-20 text-white md:py-24'>
      <AnimateInView
        className='mx-auto max-w-3xl border-4 border-[#54b08c] bg-[#171424] p-8 text-center shadow-[6px_6px_0px_0px_#54b08c] md:p-12'
        animation='scale-in'
      >
        <h2 className='text-2xl leading-tight font-black tracking-tight text-white uppercase md:text-4xl'>
          {t('Ready to simplify')}{' '}
          <span className='text-[#72ebbb]'>{t('your AI integration?')}</span>
        </h2>
        <p className='mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-300 md:text-base'>
          {t(
            'Deploy your own gateway and start routing requests through your configured upstream services.'
          )}
        </p>
        <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
          <Button
            className='group h-11 rounded-none border-2 border-white px-6 text-xs font-extrabold tracking-wider uppercase shadow-[3px_3px_0px_0px_#ffffff]'
            render={<Link to='/sign-up' />}
          >
            {t('Get Started')}
            <ArrowRight className='ml-1 size-4 transition-transform duration-150 group-hover:translate-x-1' />
          </Button>
          <Button
            variant='outline'
            className='h-11 rounded-none border-2 border-[#72ebbb] bg-[#110e1b] px-6 text-xs font-extrabold tracking-wider text-[#72ebbb] uppercase shadow-[3px_3px_0px_0px_#72ebbb] hover:bg-[#221c35] hover:text-white'
            render={<Link to='/pricing' />}
          >
            {t('View Pricing')}
          </Button>
        </div>
      </AnimateInView>
    </section>
  )
}
