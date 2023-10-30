import Head from 'next/head'
import Layout from '@/components/Layout'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';

const activity = () => {
    return (
        <>
            <Head>
                <title>Dewcode | Activity Page</title>
                <meta name="description" content='any description' />
            </Head>
            <TransitionEffect />
            <main>
                <Layout>
                    asdad
                </Layout>
                <Link href='/projects'>
                    <button
                        className='bg-red-800 border-2 w-20 h-20 absolute  top-1/2 left-0  flex items-center justify-center'
                    >
                        <MdOutlineArrowBackIos
                            className="text-white"
                            style={{ fontSize: '22px' }}
                        />
                    </button>
                </Link>
                <Link href="/">
                    <button
                        className='bg-red-800 border-2 w-20 h-20 absolute  top-1/2 right-0  flex items-center justify-center'
                    >
                        <MdOutlineArrowForwardIos
                            className="text-white"
                            style={{ fontSize: '22px' }}
                        />
                    </button>
                </Link>
            </main>
        </>
    )
}

export default activity
