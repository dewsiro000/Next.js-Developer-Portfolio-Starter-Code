import React, { useState } from 'react'
import Image from 'next/image'
import admin_form from '../../public/videos/Back-of-house-manager.mp4'
import activity1 from '../../public/images/projects/368179460_1044114376914378_6709878042645860710_n.jpg'
import activity2 from '../../public/images/projects/371311831_1272955856712269_1186430968471798838_n.jpg'
import activity3 from '../../public/images/projects/398034964_1402773547288571_234637160956276813_n.jpg'
import activity4 from '../../public/images/projects/398034976_319280270988996_1508350851035017677_n.jpg'
import activity5 from '../../public/images/projects/398269882_3724054204496849_4653598430689745409_n.jpg'
import activity6 from '../../public/images/projects/398269891_884467042861014_7542701744672615331_n.jpg'
import activity7 from '../../public/images/projects/398515985_1316484262350881_2084474389485168937_n.jpg'
import activity8 from '../../public/images/projects/405179275_706308724792595_7615723347910346891_n.jpg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';
import { useAnimation, motion } from "framer-motion";


const hotelweb = ({ className = "" }) => {
    const quote = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            }
        }
    }


    return (
        <div className='flex flex-col'>
            <div className='flex justify-center pb-10 py-10 text-3xl font-medium text-black uppercase border border-black lg:mr-60 lg:ml-60  2xl:mr-80 2xl:ml-80'>
                <motion.h1 className={`flex justify-center w-full font-bold  text-4xl ${className}`}
                    variants={quote}
                    initial="initial"
                    animate="animate"
                >
                    <p><span className='text-blue-700 px-4'>hotel</span><span className='px-2 text-red-500'>web</span>
                        <span className='text-pink-800 px-2'>management</span>
                        <span className='text-yelow-800'>project</span></p>
                </motion.h1>
            </div>
            <div className='pt-10 pb-12 '>
                <p className='flex justify-center pb-36 '>
                    <span className='font-semibold'>Front website:</span>
                    <a href="https://singgoldenplace.com"
                        className='px-2 cursor-pointer  hover:underline' target='_blank'>singgoldenplace.com,
                    </a>
                    <a href="https://cococat.eaccom.net/"
                        className='cursor-pointer  hover:underline' target='_blank'>cococat.eaccom.net
                    </a>
                </p>
                <p className='text-2xl font-bold underline flex justify-left pl-40'> Back office administrator website</p>
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
            <div className='flex justify-left pl-40  pb-7 pt-10'>
                <p className='font-bold text-2xl uppercase underline'>activity</p>
            </div>
            <div className='pl-36 pr-8 2xl:pl-40 2xl:pr-8 grid grid-cols-4 gap-8 justify-center items-center pb-10'>
                <Zoom >
                    <Image
                        src={activity1}
                        alt='activity1'
                        className={`w-full h-auto pr-4 pl-4 pt-2`}
                    />
                </Zoom>
                <Zoom>
                    <Image
                        src={activity2}
                        alt='activity2'
                        className={`w-full h-auto pr-4 pl-4 pt-2`}
                    />
                </Zoom>
                <Zoom>
                    <Image
                        src={activity6}
                        alt='activity6'
                        className={`w-full h-auto pr-4 pl-4 pt-2`}
                    />
                </Zoom>
                <Zoom>
                    <Image
                        src={activity8}
                        alt='activity8'
                        className={`w-full h-auto pr-4 pl-4 pt-2`}
                    />
                </Zoom>
                <Zoom>
                    <Image
                        src={activity3}
                        alt='activity3'
                        className={`w-full h-auto pr-4 pl-4 pt-2`}
                    />
                </Zoom>
                <Zoom>
                    <Image
                        src={activity4}
                        alt='activity4'
                        className={`w-full h-auto pr-4 pl-4 pt-2`}
                    />
                </Zoom>
                <Zoom>
                    <Image
                        src={activity5}
                        alt='activity5'
                        className={`w-full h-auto pr-4 pl-4 pt-2`}
                    />
                </Zoom>
                <Zoom>
                    <Image
                        src={activity7}
                        alt='activity7'
                        className={`w-full h-auto pr-4 pl-4 pt-2`}
                    />
                </Zoom>
            </div>
        </div >

    )
}

export default hotelweb