import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl xl:6xl">
            Join the Future Leaders Team
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Take the first step towards becoming a leader of tomorrow. Enroll in our program and start your journey today.
          </p>
          <Button href="/#" color="white" className="mt-10">
            Apply Now
          </Button>
        </div>
      </Container>
    </section>
  )
}
