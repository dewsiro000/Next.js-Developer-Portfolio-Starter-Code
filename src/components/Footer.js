import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark
        font-medium text-lg
        '>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex flex-col items-center' >
                    <div className='text-lg'>
                        Create<span className='px-1'>by</span>Norawit Paha
                    </div>
                    <div className='text-sm'>
                        Credit <span className='text-primary text-sm px-1'>Starter</span><span className='px-1'>Template</span>
                        by&nbsp; <Link href="https://devdreaming.com" className='underline underline-offset-2'
                            target={'_blank'}
                        >CodeBucks</Link>
                    </div>
                </div>
                <div href='https://devdreaming.com' target={'_blank'} className='underline
                underline-offset-2
                '>Let<span className='px-1'>Start</span>Coding!!
                </div>
            </Layout >
        </footer >
    )
}

export default Footer
