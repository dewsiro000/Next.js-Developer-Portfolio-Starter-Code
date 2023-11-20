import React from 'react'
import Image from 'next/image'
import desktop_view from '../../public/images/projects/desktop_view.png'
import mobile_view from '../../public/images/projects/mobile_view.png'

const hotelweb = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-center pb-10 py-10 text-3xl font-medium text-black uppercase'>
                hotel<span className='px-2'>web</span><span>project</span>
            </div>
            <div className='absolute left-24 top-0 w-[4px] h-full bg-dark origin-top' />
            <div className='pl-36 pr-8 2xl:pl-40 2xl:pr-8 grid grid-cols-4 justify-center items-center '>
                <Image
                    src={desktop_view}
                    alt='hotel_web'
                    // className={`w-full h-auto pr-80 pl-80 pt-2`}
                    className={`w-full h-auto pr-4 pl-4 pt-2`}

                />
                <Image
                    src={desktop_view}
                    alt='hotel_web'
                    // className={`w-full h-auto pr-80 pl-80 pt-2`}
                    className={`w-full h-auto pr-4 pl-4 pt-2`}

                />
                <Image
                    src={desktop_view}
                    alt='hotel_web'
                    // className={`w-full h-auto pr-80 pl-80 pt-2`}
                    className={`w-full h-auto pr-4 pl-4 pt-2`}

                />
                <Image
                    src={desktop_view}
                    alt='hotel_web'
                    // className={`w-full h-auto pr-80 pl-80 pt-2`}
                    className={`w-full h-auto pr-4 pl-4 pt-2`}

                />
                <Image
                    src={desktop_view}
                    alt='hotel_web'
                    // className={`w-full h-auto pr-80 pl-80 pt-2`}
                    className={`w-full h-auto pr-4 pl-4 pt-2`}

                />
                <Image
                    src={desktop_view}
                    alt='hotel_web'
                    // className={`w-full h-auto pr-80 pl-80 pt-2`}
                    className={`w-full h-auto pr-4 pl-4 pt-2`}

                />
                <Image
                    src={desktop_view}
                    alt='hotel_web'
                    // className={`w-full h-auto pr-80 pl-80 pt-2`}
                    className={`w-full h-auto pr-4 pl-4 pt-2`}

                />
                <Image
                    src={desktop_view}
                    alt='hotel_web'
                    // className={`w-full h-auto pr-80 pl-80 pt-2`}
                    className={`w-full h-auto pr-4 pl-4 pt-2`}

                />
            </div>
            <div className='flex justify-center items-center'>
                <p className='pt-10 pb-10'>asDAWSFASFASFSDSDF</p>
            </div>
        </div >
    )
}

export default hotelweb