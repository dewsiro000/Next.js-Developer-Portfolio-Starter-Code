import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
// import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { PhoneOutlined } from '@ant-design/icons';
import { SendOutlined } from '@ant-design/icons';
import Typewriter from 'typewriter-effect';

const about = () => {

    return (
        <>
            <Head>
                <title>Dewcode | About Page</title>
                <meta name="description" content='any description' />
            </Head>
            <main className=''>
                <Layout className='pt-16'>
                    <AnimatedText text="About me" className='mb-0' />
                    <p className='flex justify-center mb-16'>Get to know me</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <div className='flex flex-col mr-14 items-center justify-center grid-cols-8 gap-16'>
                            <div className='col-span-3 flex flex-col items-start justify-start'>
                                <h2 className='mb-4 text-lg fonr-bold uppercase text-dark/75'>Biography</h2>
                                <p className='font-medium'>
                                    Hi, I'm Norawit Paha, a junior web developer  with a passion for creating beautiful, functional,
                                    and user-centered digital experiences. With 6 month of experience in the Intelligent Automation
                                    Research CenterIntelligent Automation Research Center
                                    . I am always looking for
                                    new and innovative ways to bring my clients' visions to life.
                                </p>
                                <p className='my-4 font-medium'>
                                    I believe that design is about more than just making things look pretty – it's about solving problems and
                                    creating intuitive, enjoyable experiences for users.
                                </p>

                                <p className='font-medium'>
                                    Whether I'm working on a webapp, or
                                    other digital product, I bring my commitment to design excellence and user-centered thinking to
                                    every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.

                                </p>
                                {/* <div>
                                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                                bg-light p-8
                                '>
                                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'>
                                        <Image src={profilePic} alt="Codebucks" className='w-full h-auto rounded-2xl' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>
                                        50+
                                    </span>
                                    <h2>satisfield clients</h2>
                                </div>

                                <div>
                                    <span>
                                        50+
                                    </span>
                                    <h2>satisfield clients</h2>
                                </div>

                                <div>
                                    <span>
                                        50+
                                    </span>
                                    <h2>satisfield clients</h2>
                                </div>
                            </div> */}


                            </div>
                        </div>
                        <div className='border-2 border-black p-4 flex flex-col items-center  '>
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

                                    <p class="flex ">
                                        <b className="font-medium flex ">
                                            <PhoneOutlined
                                                className=''
                                                style={{ fontSize: '26px', color: '#08c', bottom: '2px', paddingRight: '10px' }}
                                            />
                                            Phone:</b>&nbsp;&nbsp; 093-165-6128</p>
                                    <p className='pt-12'>
                                        <b class="font-medium">
                                            <SendOutlined
                                                style={{ fontSize: '26px', color: '#08c', bottom: '2px', paddingRight: '10px' }}
                                            />
                                            Email:</b>&nbsp;&nbsp;&nbsp;norawit1267@gmail.com </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default about