import React from 'react'
import Image from 'next/image'
import desktop_view from '../../public/images/projects/desktop_view.png'
import mobile_view from '../../public/images/projects/mobile_view.png'
import admin_form from '../../public/videos/Back-of-house-manager.mp4'

const hotelweb = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-center pb-10 py-10 text-3xl font-medium text-black uppercase border border-black lg:mr-60 lg:ml-60  2xl:mr-80 2xl:ml-80'>
                <p><span className='text-blue-700 px-4'>hotel</span><span className='px-2 text-red-500'>web</span>
                    <span className='text-pink-800 px-2'>management</span>
                    <span className='text-yelow-800'>project</span></p>
            </div>
            <div className='pt-10 pb-12 '>
                <p className='flex justify-center pb-8 '>
                    <span className='font-semibold'>Front website:</span>
                    <a href="https://singgoldenplace.com"
                        className='px-2 cursor-pointer  hover:underline' target='_blank'>singgoldenplace.com,
                    </a>
                    <a href="https://cococat.eaccom.net/"
                        className='cursor-pointer  hover:underline' target='_blank'>cococat.eaccom.net
                    </a>
                </p>
                <p className='text-2xl font-sarif flex justify-center'> Back office administrator website</p>
            </div>
            <div className='flex justify-center pb-10'>
                <video
                    autoPlay
                    loop
                    muted
                    controls
                    className="w-full h-full object-cover lg:pr-40 lg:pl-40 2xl:pr-80 2xl:pl-80"
                >
                    <source src={admin_form} type="video/mp4" />
                </video>
            </div>
            {/* <div className='absolute left-24 top-0 w-[4px] h-full bg-dark origin-top' /> */}
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