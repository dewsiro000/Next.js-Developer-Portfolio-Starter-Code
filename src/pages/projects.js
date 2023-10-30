import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import TransitionEffect from '@/components/TransitionEffect';

const FeatureProjects = ({ type, title, summary, img, link, github }) => {
    return (
        <artcle>
            <Link href={link} target="_blank">
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div>
                <span>{type}</span>
                <Link href={link} target='_blank'>
                    <h2>{title}</h2>
                </Link>
                <p>{summary}</p>
            </div>
        </artcle>
    )
}
const projects = () => {
    return (
        <>
            <Head>
                <title>Dewcode | Projects Page</title>
                <meta name="description" content='any description' />
            </Head>
            <TransitionEffect />
            <main>
                <Layout className='pt-16'>
                    <div className='grid grid-cols-12 gap-24'>
                        <div className='col-span-12'>
                            Project1
                        </div>
                        <div className='col-span-6'>
                            Project1
                        </div>
                        <div className='col-span-6'>
                            Project1
                        </div>
                        <div className='col-span-12'>
                            Project1
                        </div>
                        <div className='col-span-6'>
                            Project1
                        </div>
                        <div className='col-span-6'>
                            Project1
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
