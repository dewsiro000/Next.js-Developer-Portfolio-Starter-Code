import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';
import critical_thinking from '../../public/images/certificate/e-Certificate.jpg'
import Startup_Business from '../../public/images/certificate/Certificate-ESD1003s-TH-1.png'
// import activity3 from '../../public/images/projects/398034964_1402773547288571_234637160956276813_n.jpg'
// import activity4 from '../../public/images/projects/398034976_319280270988996_1508350851035017677_n.jpg'
// import activity5 from '../../public/images/projects/398269882_3724054204496849_4653598430689745409_n.jpg'
// import activity6 from '../../public/images/projects/398269891_884467042861014_7542701744672615331_n.jpg'
// import activity7 from '../../public/images/projects/398515985_1316484262350881_2084474389485168937_n.jpg'
// import activity8 from '../../public/images/projects/405179275_706308724792595_7615723347910346891_n.jpg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';

const activity = () => {
    return (
        <>
            <Head>
                <title>Dewcode | Activity Page</title>
                <meta name="description" content='any description' />
            </Head>
            <TransitionEffect />
            <main>
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
                <div className='pl-36 pr-36 2xl:pl-40 2xl:pr-8 grid grid-cols-2 gap-8 justify-center items-center pb-10 '>
                    <Zoom >
                        <Image
                            src={critical_thinking}
                            alt='critical-thinking'
                            className={`w-full h-auto pr-4 pl-4 pt-2`}
                        />
                    </Zoom>
                    <Zoom>
                        <Image
                            src={Startup_Business}
                            alt='Startup_Business'
                            className={`w-full h-auto pr-4 pl-4 pt-2`}
                        />
                    </Zoom>
                    {/* <Zoom>
                        <Image
                            src={activity6}
                            alt='activity6'
                            className={`w-full h-auto pr-4 pl-4 pt-2`}
                        />
                    </Zoom> */}
                    {/* <Zoom>
                        <Image
                            src={activity8}
                            alt='activity8'
                            className={`w-full h-auto pr-4 pl-4 pt-2`}
                        />
                    </Zoom> */}
                    {/* <Zoom>
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
                    </Zoom> */}
                </div>
            </main>
        </>
    )
}

export default activity
