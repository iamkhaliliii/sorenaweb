'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Container } from '@/components/container'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import { Gradient } from './gradient'
import { Heading, Subheading } from './text'

const features = [
  {
    title: 'Product Teams',
    description: [
      'Prioritize top requests based on volume and sentiment',
      'Discover emerging themes before they escalate',
      'Monitor feature-level satisfaction and frustration',
      'Push user quotes and requests directly to Linear, Jira, or Productboard',
    ],
    image: screenshotPayroll,
  },
  {
    title: 'Support Teams',
    description: [
      'Spot trending complaints before they spike',
      'Identify FAQ candidates and doc gaps',
      'Auto-triage by tag: billing, bugs, confusion, or UX issues',
      'Quantify deflection and measure post-resolution feedback',
    ],
    image: screenshotExpenses,
  },
  {
    title: 'Marketing Teams',
    description: [
      'Pull high-sentiment quotes for campaigns',
      'Detect objections and hesitations in real time',
      'Harvest authentic user phrasing to shape messaging',
      'Track how launches land across channels and personas',
    ],
    image: screenshotVatReturns,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden px-2"
    >
      <Gradient className="relative rounded-4xl pt-20 pb-28">
        <Container>
          <div className="">
            <Subheading>Challenges & Solutions</Subheading>
            <Heading as="h3" className="mt-2 max-w-3xl">
              Role-based dashboards for every team
            </Heading>
          </div>
          <TabGroup
            className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
            vertical={tabOrientation === 'vertical'}
          >
            {({ selectedIndex }) => (
              <>
                <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                  <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                    {features.map((feature, featureIndex) => (
                      <div
                        key={feature.title}
                        className={clsx(
                          'group relative mr-0.5 rounded-l-xl rounded-r-none px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                          selectedIndex === featureIndex
                            ? 'relative overflow-hidden bg-white/15 shadow-md ring-1 ring-[#D15052]/15'
                            : 'hover:bg-white/20',
                        )}
                      >
                        <h3>
                          <Tab
                            className={clsx(
                              'font-display text-lg data-selected:not-data-focus:outline-hidden',
                              selectedIndex === featureIndex
                                ? 'text-2xl font-medium text-gray-900'
                                : 'text-2xl font-medium text-gray-900 hover:text-gray-800',
                            )}
                          >
                            <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                            {feature.title}
                          </Tab>
                        </h3>
                        <div
                          className={clsx(
                            'mt-2 hidden text-sm lg:block',
                            selectedIndex === featureIndex
                              ? 'text-gray-600'
                              : 'text-gray-600 group-hover:text-gray-700',
                          )}
                        >
                          {Array.isArray(feature.description) ? (
                            <ul className="list-inside list-disc space-y-1">
                              {feature.description.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            feature.description
                          )}
                        </div>
                      </div>
                    ))}
                  </TabList>
                </div>
                <TabPanels className="lg:col-span-7">
                  {features.map((feature) => (
                    <TabPanel key={feature.title} unmount={false}>
                      <div className="relative sm:px-6 lg:hidden">
                        <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                        <div className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                          {Array.isArray(feature.description) ? (
                            <ul className="list-inside list-disc space-y-1 text-left">
                              {feature.description.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            feature.description
                          )}
                        </div>
                      </div>
                      <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                        <Image
                          className="w-full"
                          src={feature.image}
                          alt=""
                          priority
                          sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                        />
                      </div>
                    </TabPanel>
                  ))}
                </TabPanels>
              </>
            )}
          </TabGroup>
        </Container>
      </Gradient>
    </section>
  )
}
