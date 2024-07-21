'use client'

import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { FaChalkboardTeacher, FaLeaf, FaHandshake, FaGlobe } from 'react-icons/fa'

import { Container } from '@/components/Container'
import leadershipImage from '@/images/leadership-training.jpg'
import sustainabilityImage from '@/images/sustainable-practices.jpg'
import networkingImage from '@/images/networking-opportunities.jpg'
import insightsImage from '@/images/global-insights.jpg'

interface Feature {
  name: React.ReactNode
  summary: string
  description: string
  image: ImageProps['src']
  icon: React.ComponentType<{ className?: string }>
}

const features: Array<Feature> = [
  {
    name: 'Leadership Training',
    summary: 'Build strong leadership skills.',
    description:
      'Develop essential leadership skills through our comprehensive training modules designed by industry experts.',
    image: leadershipImage,
    icon: FaChalkboardTeacher,
  },
  {
    name: 'Sustainable Practices',
    summary: 'Implement sustainable business practices.',
    description:
      'Learn and implement sustainable business practices that align with global standards and ensure long-term success.',
    image: sustainabilityImage,
    icon: FaLeaf,
  },
  {
    name: 'Networking Opportunities',
    summary: 'Expand your professional network.',
    description:
      'Connect with industry leaders, experts, and fellow participants to build a strong professional network.',
    image: networkingImage,
    icon: FaHandshake,
  },
  {
    name: 'Global Insights',
    summary: 'Gain global business insights.',
    description:
      'Gain access to cutting-edge insights and methodologies from around the world to stay ahead in your field.',
    image: insightsImage,
    icon: FaGlobe,
  },
]

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-12 rounded-lg p-1.5',
          isActive ? 'bg-blue-600' : 'bg-slate-500',
        )}
      >
        <feature.icon className="h-9 w-9 text-white" />
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full h-96 object-cover"
                src={feature.image}
                alt=""
                sizes="52.75rem"
                width={1080}
                height={720}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-4 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] h-[32rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full h-full object-cover"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                      width={1080}
                      height={920}
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features of the FLT Program"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Enhance Your Professional Skills
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Discover the comprehensive features of our program designed to help you excel in your career.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
