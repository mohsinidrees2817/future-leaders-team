import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is the Future Leaders Team program?',
      answer:
        'The Future Leaders Team (FLT) program is designed to nurture the next generation of leaders in Pakistan by providing cutting-edge education and unparalleled opportunities for sustainable business practices.',
    },
    {
      question: 'Who can join the FLT program?',
      answer:
        'The FLT program is open to aspiring leaders who are committed to making a lasting impact on their organization and community.',
    },
    {
      question: 'What are the benefits of joining the FLT program?',
      answer:
        'Participants of the FLT program will gain essential leadership skills, learn sustainable business practices, expand their professional network, and gain access to global business insights.',
    },
  ],
  [
    {
      question: 'How do I apply for the FLT program?',
      answer:
        'You can apply for the FLT program by visiting our application page and filling out the necessary forms. Our team will review your application and get back to you with the next steps.',
    },
    {
      question: 'Are there any fees associated with the FLT program?',
      answer:
        'Yes, there are fees associated with the FLT program to cover the cost of materials, workshops, and events. Details about the fees can be found on our application page.',
    },
    {
      question: 'What is the duration of the FLT program?',
      answer:
        'The FLT program spans over a period of 12 months, during which participants will engage in various workshops, seminars, and networking events.',
    },
  ],
  [
    {
      question: 'Can I get a certificate after completing the FLT program?',
      answer:
        'Yes, participants who successfully complete the FLT program will receive a certificate of completion, recognizing their efforts and achievements.',
    },
    {
      question: 'How can I stay updated with FLT events and news?',
      answer:
        'You can stay updated with FLT events and news by subscribing to our newsletter and following us on our social media channels.',
    },
    {
      question: 'Who can I contact for more information about the FLT program?',
      answer:
        'For more information about the FLT program, you can contact our support team via email or phone. Our contact details are available on the contact page.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team and someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
