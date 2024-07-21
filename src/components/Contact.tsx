import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import Image from 'next/image'
import backgroundImage from '@/images/background-call-to-action.jpg'

export default function Contact() {
    return (
        <section id="contact" className="relative isolate bg-blue-600 ">
            <Container>
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
                            <p className="mt-6 text-lg leading-8 text-white">
                                Have any questions or want to learn more about the Future Leaders Team program? Reach out to us, and we will get back to you as soon as possible.
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-white">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-white" />
                                    </dt>
                                    <dd>
                                        Future Leaders Team
                                        <br />
                                        Islamabad, Pakistan
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Telephone</span>
                                        <PhoneIcon aria-hidden="true" className="h-7 w-6 text-white" />
                                    </dt>
                                    <dd>
                                        <a href="tel:+92 (51) 123-4567" className="hover:text-white">
                                            +92 (51) 123-4567
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-white" />
                                    </dt>
                                    <dd>
                                        <a href="mailto:info@futureleaders.pk" className="hover:text-white">
                                            info@futureleaders.pk
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="phone-number"
                                            name="phone-number"
                                            type="tel"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    )
}
