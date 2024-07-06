import React from 'react'
import gameplay1 from '../../data/gameplay1.jpg'
import gameplay2 from '../../data/gameplay2.png'
import gameplay3 from '../../data/gameplay3.jpg'

const featureData = [ 
    {
        image:gameplay1,
        desc:'Explore large, destructible environments where no two games are ever the same.'
    },
    {
        image:gameplay2,
        desc:'Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale'
    },
    {
        image:gameplay3,
        desc:'Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres'
    },
]


function Features() {
  return (
    <section className='flex justify-center items-center w-full mt-20'>
        <div  className='grid w-9/12 sm:grid-cols-3 gap-8 md:gap-16'>
            {
                featureData.map((data)=>(
                    <div className='w-full h-fit flex justify-center flex-col items-center'>
                        <img src={data.image} alt=""  className='w-full object-cover object-center sm:h-30vh md:h-40vh lg:h-50vh'/>
                        <p className='font-roboto text-sm sm:text-base md:text-lg lg:text-xl font-light text-white text-center py-5'>{data.desc}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Features
