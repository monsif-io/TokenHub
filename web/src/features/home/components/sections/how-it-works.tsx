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
import { Settings, Zap, BarChart3 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      num: '1',
      title: t('Configure'),
      desc: t(
        'Add your API keys, set up channels and configure access permissions'
      ),
      icon: <Settings className='size-6' strokeWidth={1.5} />,
    },
    {
      num: '2',
      title: t('Connect'),
      desc: t(
        'Connect through OpenAI, Claude, Gemini, and other compatible API routes'
      ),
      icon: <Zap className='size-6' strokeWidth={1.5} />,
    },
    {
      num: '3',
      title: t('Monitor'),
      desc: t('Track usage, costs and performance with real-time analytics'),
      icon: <BarChart3 className='size-6' strokeWidth={1.5} />,
    },
  ]

  return (
    <section className='bg-card relative z-10 border-t-4 border-[#110e1b] px-6 py-20 md:py-28 dark:border-[#3a3454]'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-14 text-center'>
          <p className='mb-2 font-mono text-xs font-bold tracking-widest text-[#54b08c] uppercase'>
            {t('How It Works')}
          </p>
          <h2 className='text-2xl font-black tracking-tight uppercase md:text-4xl'>
            {t('Three steps to get started')}
          </h2>
        </AnimateInView>

        <div className='grid gap-6 md:grid-cols-3 md:gap-8'>
          {steps.map((step, i) => (
            <AnimateInView
              key={step.num}
              delay={i * 120}
              animation='fade-up'
              className='bg-background brutalist-shadow relative flex flex-col items-start border-2 border-[#110e1b] p-6 text-left dark:border-[#3a3454]'
            >
              <div className='mb-5 flex w-full items-center justify-between'>
                <div className='flex size-12 items-center justify-center border-2 border-[#110e1b] bg-[#72ebbb]/25 text-[#110e1b] dark:border-[#54b08c] dark:text-[#72ebbb]'>
                  {step.icon}
                </div>
                <div className='border-2 border-[#110e1b] bg-[#110e1b] px-2.5 py-1 font-mono text-xs font-black text-[#72ebbb]'>
                  0{step.num}
                </div>
              </div>
              <h3 className='mb-2 text-base font-extrabold tracking-wider uppercase'>
                {step.title}
              </h3>
              <p className='text-muted-foreground text-sm leading-relaxed font-medium'>
                {step.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
