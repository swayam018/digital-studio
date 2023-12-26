import React from 'react'
import Team from './Team'
import prephotoshoot from '../../public/prephotoshoot.jpg';
import Image from 'next/image';

function About() {
  return (
    <div className="bg-black/80 py-8 max-md:px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8 text-slate-50 text-center">About Our Studio</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-4 md:mb-0">
              <Image
                src={prephotoshoot}
                width={500}
                height={500}
                alt="Photography Studio"
                className="w-full h-80 rounded-lg shadow-lg aspect-auto object-cover"
              />
            </div>

            <div>
              <p className="text-slate-50 leading-loose">
                Welcome to MB Digital Studio, where we capture moments and create memories.
                Our photography studio is dedicated to providing high-quality, creative, and
                personalized photography services. Whether you're looking for stunning portraits,
                captivating event coverage, or professional product photography, we've got you covered.
              </p>

              <p className="mt-4 text-slate-50 leading-loose">
                Our team of experienced photographers is passionate about their craft and
                committed to delivering exceptional results. We understand the importance of
                preserving special moments, and we take pride in our ability to capture the
                essence of every subject.
              </p>

              <p className="mt-4 text-slate-50 leading-loose">
                Explore our portfolio and discover the artistry that defines [Your Studio Name].
                We look forward to collaborating with you to create timeless images that tell
                your unique story.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team/>
    </div>
  )
}

export default About