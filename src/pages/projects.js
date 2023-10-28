import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'


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
            </main>
        </>
    )
}

export default projects
