import Image from 'next/image'
import React from 'react'
import photographya from '../../public/service-1.jpg';
const people = [
    {
        name: 'Subrat Pradhan',
        role: 'Photographer',
        imageUrl:photographya,
    },
    {
        name: 'Abhishek Pradhan',
        role: 'Vidoghapher',
        imageUrl:photographya,
    },
    {
        name: 'Rakesh Pradhan',
        role: 'Editor',
        imageUrl:
        photographya,
    }, {
        name: 'Biswojit Pradhan',
        role: 'Assistant',
        imageUrl:photographya,
    },
]

function Team() {
    return (
        <div className=" py-14 sm:py-14">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl max-xl:max-w-full">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl text-center max-xl:text-center">Meet our Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-400 ">
                    Our team is a passionate group of individuals dedicated to bringing creativity, expertise, and a personalized touch to every photography session. With a shared love for visual storytelling, we collaborate seamlessly to capture the essence of each moment, ensuring that your memories are preserved beautifully.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 pl-8 max-md:pl-0 ">
                    {people.map((person,index) => (
                        <li key={index} >
                            <div className="flex items-center gap-x-6">
                                <Image className="h-16 w-16 rounded-full" src={person.imageUrl} width={64} height={64}  alt="Team Member" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-400">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Team 