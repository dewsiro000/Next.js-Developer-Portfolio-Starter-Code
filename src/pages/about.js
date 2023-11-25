import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import { PhoneOutlined } from '@ant-design/icons';
import { SendOutlined } from '@ant-design/icons';
import Typewriter from 'typewriter-effect';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';
import me from '../../public/images/profile/me.png.jpg'
import coding_gif from '../../public/gif/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966.gif'


const about = () => {

    return (
        <>
            <Head>
                <title>Dewcode | About Page</title>
                <meta name="description" content='any description' />
            </Head>
            <TransitionEffect />
            <main className=''>
                <Layout className='pt-2 2xl:pt-16'>
                    <AnimatedText text="About me" className='mb-0' />
                    <p className='flex justify-center mb-16'>Get to know me</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <div className='flex flex-col mr-14 items-center justify-center grid-cols-8 gap-16'>
                            <div className='col-span-3 flex flex-col items-start justify-start'>
                                <div className='flex flex-row '>
                                    <div>
                                        <Image src={me}
                                            alt='MyImage'
                                            className='w-40 h-full border-2 border-black'
                                            style={{ objectFit: 'fit' }}
                                        />
                                    </div>
                                    <div className='px-10 flex-row flex gap-28'>
                                        <div>
                                            <p className='uppercase font-bold text-xl pb-4 pt-5 text-purple-800 shadow-orange-400 shadow-md p-3 cursor-pointer hover:text-red-400'>skills</p>
                                            <p className='font-semibold pb-2 pt-8'>Languages :</p>
                                            <p>-  JavaScript</p>
                                            <p>-  HTML/CSS</p>
                                            <p className='font-semibold pb-2 pt-14'>Frameworks:</p>
                                            <p>-  React.js</p>
                                            <p>-  Next.js</p>
                                            <p>-  Nodejs</p>
                                            <p>-  Tailwind</p>
                                            <p>-  Bootstrap</p>
                                            <p>-  Material UI</p>
                                        </div>
                                        <div>
                                            <p className='font-semibold pb-2 pt-24'>tools :</p>
                                            <p>-  Postman</p>
                                            <p>-  Github</p>
                                            <p>-  Vscode</p>
                                            <p>-  ChatGPT</p>
                                            <p className='font-semibold pb-2 pt-5'> Databases : </p>
                                            <p>-  Mongo DB</p>
                                            <p className='font-semibold pb-2 pt-5'>Otherskills:</p>
                                            <p>-  Restfull-API</p>
                                            <p>-  React Hook</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 className='mb-4 text-xl font-bold uppercase text-green-600 pt-10 underline decoration-black '>Biography</h2>
                                <p className='font-medium'>
                                    Hi, I am Norawit Paha, a junior web developer  with a passion for creating beautiful, functional,
                                    and user-centered digital experiences. With 6 month of experience in the Intelligent Automation
                                    Research CenterIntelligent Automation Research Center
                                    . I am always looking for
                                    new and innovative ways to make more website that easy to use and convinient for our users.
                                </p>
                                <p className='my-4 font-medium'>
                                    I believe that design is about more than just making things look pretty – it is about solving problems and
                                    creating intuitive, which the user really wants to that.
                                </p>

                                <p className='font-medium'>
                                    Whether I am working on a webapp, or
                                    other eccomerce product, I bring my commitment to design excellence and user-centered thinking to
                                    every project I work on. I look forward to the opportunity to bring my skills and passion to create more better and  new thing in my next project.
                                </p>
                            </div>
                        </div>
                        <div className='border-2 border-black p-4 flex flex-col items-center '>
                            <div className='text-xl pt-3'>
                                <Typewriter
                                    options={{
                                        strings: ['Hi My name is Norawit Paha'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <div className='flex flex-row gap-24 pt-14'>
                                <div className='w-full h-auto '>
                                    <p class="flex "> <b className="font-medium ">Name:</b>&nbsp;&nbsp; Norawit Paha</p>
                                    <p className='pt-12'> <b class="font-medium">Age:</b>&nbsp;&nbsp;&nbsp;22 </p>

                                </div>
                                <div className='w-full  h-auto'>
                                    <p className='flex w-64 h-auto'> <b className="font-medium ">Address:</b>&nbsp;&nbsp;nakhon si thammarat</p>
                                    <p className='pt-12'> <b class="font-medium">Nation:</b>&nbsp;&nbsp;&nbsp;Thai </p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-0 pt-14'>
                                <div className='w-full h-auto '>

                                    <p class="flex pl-36">
                                        <b className="font-medium flex ">
                                            <PhoneOutlined
                                                className=''
                                                style={{ fontSize: '26px', color: '#08c', bottom: '2px', paddingRight: '10px' }}
                                            />
                                            Phone:</b>&nbsp;&nbsp; 093-165-6128</p>
                                    <p className='flex justify-center pt-12'>
                                        <b class="font-medium">
                                            <SendOutlined
                                                style={{ fontSize: '26px', color: '#08c', bottom: '2px', paddingRight: '10px' }}
                                            />
                                            Email:
                                        </b>&nbsp;&nbsp;&nbsp;norawit1267@gmail.com
                                    </p>
                                    <div className='pt-10 flex justify-center'>
                                        <Image
                                            src={coding_gif}
                                            alt='MyImage'
                                            className='w-full h-full  border-2 border-black'
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Link href="/projects">
                    <button
                        className='bg-red-800 border-2 w-20 h-20 absolute  top-1/2 right-0  flex items-center justify-center'
                    >
                        <MdOutlineArrowForwardIos
                            className="text-white"
                            style={{ fontSize: '22px' }}
                        />
                    </button>
                </Link>

                <Link href='/'>
                    <button
                        className='bg-red-800 border-2 w-20 h-20 absolute  top-1/2 left-0  flex items-center justify-center'
                    >
                        <MdOutlineArrowBackIos
                            className="text-white"
                            style={{ fontSize: '22px' }}
                        />
                    </button>
                </Link>
            </main>
        </>
    )
}
export default about

