import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon } from './Icons';
import { motion } from 'framer-motion';
import { SolutionOutlined, FundProjectionScreenOutlined, ScheduleOutlined, HomeOutlined } from '@ant-design/icons';

const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();

    return (
        <Link
            href={href}
            className={`${className} 
        relative group`}
        >
            {title}
            <span className={`
             h-[1px] inline-block  bg-dark 
             absolute left-0 -bottom-0.5 
             group-hover:w-full transition-[width] ease duration-300
             ${router.asPath === href ? 'w-full' : 'w-0'}
             `}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between '>
            <nav className='bg-white border-2 flex items-center justify-center flex-wrap '>
                <motion.a href="/about" className='w-6 mx-3'
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <HomeOutlined style={{ fontSize: '24px' }} />
                </motion.a>
                <motion.a href="/about" className='w-6 mx-3'
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <SolutionOutlined style={{ fontSize: '24px' }} />
                </motion.a>
                <motion.a href="/projects" className='w-6 mx-3'
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FundProjectionScreenOutlined style={{ fontSize: '24px' }} />
                </motion.a>
                <motion.a href="/activity" className='w-6 ml-3 mx-3 pb-1'
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ScheduleOutlined style={{ fontSize: '24px' }} />
                </motion.a>
            </nav>
            <nav className='bg-white border p-4 '>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
                <CustomLink href="/activity" title="Activity" className='ml-4' />
            </nav>
            {/* <div className='absolute left-[50%] top-2 translate-x-[-50%]'> */}
            <div className='flex'>
                <Logo />
            </div>

        </header>
    )
}

export default NavBar
