import Image from 'next/image'
import { Container } from '@/components/Container'

import eventImage1 from '@/images/leadership-training.jpg'
import eventImage2 from '@/images/sustainable-practices.jpg'
import eventImage3 from '@/images/networking-opportunities.jpg'
import eventImage4 from '@/images/global-insights.jpg'
import eventImage6 from '@/images/women-leadership.jpg'
import eventImage5 from '@/images/global-insights.png'

const events = [
    {
        title: 'Leadership Workshop',
        date: 'July 30, 2024',
        description: 'A workshop focused on developing essential leadership skills for future leaders.',
        image: eventImage1,
    },
    {
        title: 'Sustainable Business Practices Seminar',
        date: 'August 15, 2024',
        description: 'Learn about sustainable business practices from industry experts.',
        image: eventImage2,
    },
    {
        title: 'Networking Event',
        date: 'September 10, 2024',
        description: 'Connect with industry leaders, experts, and fellow participants.',
        image: eventImage3,
    },
    {
        title: 'Global Business Insights Conference',
        date: 'October 5, 2024',
        description: 'Gain access to global business insights and methodologies from industry leaders worldwide.',
        image: eventImage4,
    },
    {
        title: 'Innovation and Entrepreneurship Summit',
        date: 'November 20, 2024',
        description: 'Join us to explore innovative ideas and entrepreneurial opportunities.',
        image: eventImage5,
    },
    {
        title: 'Women in Leadership Forum',
        date: 'December 12, 2024',
        description: 'A forum dedicated to empowering women in leadership roles.',
        image: eventImage6,
    },
]


export default function Events() {
    return (
        <section id="events" className="py-20 bg-white">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-display text-3xl tracking-tight text-gray-900 sm:text-4xl">
                        Upcoming Events
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-gray-700">
                        Join our upcoming events and stay engaged with the Future Leaders Team community.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                            <Image
                                className="w-full h-48 object-cover"
                                src={event.image}
                                alt={event.title}
                                width={400}
                                height={300}
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">{event.date}</p>
                                <p className="mt-4 text-gray-700">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
