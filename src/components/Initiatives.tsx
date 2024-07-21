'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import leadershipTraining from '@/images/leadership-training.jpg'
import sustainablePractices from '@/images/sustainable-practices.jpg'
import networkingOpportunities from '@/images/networking-opportunities.jpg'
import globalInsights from '@/images/global-insights.jpg'

const features = [
    {
        title: 'Leadership Training',
        description:
            'Develop essential leadership skills through our comprehensive training modules designed by industry experts.',
        image: leadershipTraining,
    },
    {
        title: 'Sustainable Business Practices',
        description:
            'Learn and implement sustainable business practices that align with global standards and ensure long-term success.',
        image: sustainablePractices,
    },
    {
        title: 'Networking Opportunities',
        description:
            'Connect with industry leaders, experts, and fellow participants to build a strong professional network.',
        image: networkingOpportunities,
    },
    {
        title: 'Global Insights',
        description:
            'Gain access to cutting-edge insights and methodologies from around the world to stay ahead in your field.',
        image: globalInsights,
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
            aria-label="Features of the FLT Program"
            className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
        >
            <Image
                className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] overflow-hidden"
                src={backgroundImage}
                alt=""
                width={2245}
                height={1636}
                unoptimized
            />
            <Container className="relative">
                <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                        Explore Our Program Features                    </h2>
                    <p className="mt-6 text-lg tracking-tight text-blue-100">
                        Discover the key components of our program designed to help you achieve sustainable success.
                    </p>
                </div>
                <TabGroup
                    className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
                    vertical={tabOrientation === 'vertical'}
                >
                    {({ selectedIndex }) => (
                        <>
                            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                                    {features.map((feature, featureIndex) => (
                                        <div
                                            key={feature.title}
                                            className={clsx(
                                                'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                                                selectedIndex === featureIndex
                                                    ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                                                    : 'hover:bg-white/10 lg:hover:bg-white/5',
                                            )}
                                        >
                                            <h3>
                                                <Tab
                                                    className={clsx(
                                                        'font-display text-lg ui-not-focus-visible:outline-none',
                                                        selectedIndex === featureIndex
                                                            ? 'text-blue-600 lg:text-white'
                                                            : 'text-blue-100 hover:text-white lg:text-white',
                                                    )}
                                                >
                                                    <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                                                    {feature.title}
                                                </Tab>
                                            </h3>
                                            <p
                                                className={clsx(
                                                    'mt-2 hidden text-sm lg:block',
                                                    selectedIndex === featureIndex
                                                        ? 'text-white'
                                                        : 'text-blue-100 group-hover:text-white',
                                                )}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels className="lg:col-span-7">
                                {features.map((feature) => (
                                    <TabPanel key={feature.title} unmount={false}>
                                        <div className="relative sm:px-6 lg:hidden">
                                            <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                                            <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                                                {feature.description}
                                            </p>
                                        </div>
                                        {/* <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                                            <Image
                                                className="w-full"
                                                src={feature.image}
                                                alt={feature.title}
                                                priority
                                                sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem overflow-hidden"
                                                width={1080}
                                                height={720}
                                            />
                                        </div> */}

                                        <div className="mt-10 w-[45rem] h-[40rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                                            <Image
                                                className="object-cover w-full h-full"
                                                src={feature.image}
                                                alt={feature.title}
                                                priority
                                                sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                                width={1080}
                                                height={920}
                                            />
                                        </div>
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </>
                    )}
                </TabGroup>
            </Container>
        </section>
    )
}
