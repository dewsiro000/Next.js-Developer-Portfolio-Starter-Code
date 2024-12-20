import Head from 'next/head'
import { useState } from 'react';
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import project1 from '../../public/images/projects/Screenshot 2023-10-31 001837.png'
import { GithubIcon } from '@/components/Icons';

const Project = ({ type, title, summary, img, link, github }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article className='w-full flex items-center justify-center rounded-2xl first-letter:
    border border-solid border-dark bg-light p-6 relative  '>
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    src={img}
                    alt={title}
                    className={`w-full h-auto transition-transform duration-300 transform-gpu ${isHovered ? 'hover:scale-105' : ''}`}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={link}
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
                    >Visit</Link>
                </div>
            </div>
        </article>
    )

}

const projects = () => {
    return (
        <>
            <Head>
                <title>Dewcode | Projects Page</title>
                <meta name="description" content='any description' />
            </Head>
            <main>
                <Layout className='pt-8 2xl:pt-16 '>
                    <div className='grid grid-cols-2 2xl:grid-cols-1 gap-20 2xl:gap-24'>
                        <div className='col-span-6'>
                            <Project
                                title='Hotel website management system'
                                img={project1}
                                summary='Developed a hotel website management system for hotels and hotel operators. This system consists 
                                of subsystems within the main structure which provide a wealth of information for managing the user is 
                                website data and layout.
                                 various In and update information at any time through the back office administrator website manager.'
                                link='/hotelweb_project'
                                github='https://github.com/dewsiro000'
                                type='Web App'
                            />
                        </div>
                    </div>
                </Layout>
                <Link href="/activity">
                    <button
                        className='bg-red-800 border-2 w-20 h-20 absolute  top-1/2 right-0  flex items-center justify-center'
                    >
                        <MdOutlineArrowForwardIos
                            className="text-white"
                            style={{ fontSize: '22px' }}
                        />
                    </button>
                </Link>

                <Link href='/about'>
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

export default projects
