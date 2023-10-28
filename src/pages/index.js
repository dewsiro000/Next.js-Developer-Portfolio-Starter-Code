import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import me from '../../public/images/profile/me.png.jpg'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import Codepic from '../../public/images/projects/png-transparent-programmer-it-it-workers-computer-thumbnail.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Norawit Creative</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full main-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/3'>
              <Image src={me} alt='CodeBucks' className='w-64  h-auto border-2 border-black' />
            </div>
            <div className='pr-60 w-2/3 flex flex-col  items-center self-center'>
              <AnimatedText text="Hello" className='!text=6xl text-red-700' /><br></br>
              <AnimatedText text="I am Norawit Paha" className='!text=6xl' />
              <AnimatedText text="Frontend Developer" className='text-3xl text-green-700' />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React and Nextjs I;m web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/dummy.pdf" target='_blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light  hover:text-dark
                  border border-solid boder-transparent hover:border-dark
                  '
                  download={true}
                >Resume <LinkArrow className={"w-6 ml-1"} />

                </Link>
                <Link href="mailo:dewsiro000@gmail.com" target='_blank'
                  className='ml-4 text-lg fonr-medium capitalize text-dark underline'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute top-80 right-0 inline-block w-72'>
          <Image src={Codepic} alt="Codebucks" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
