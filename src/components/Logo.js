import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'; // คำเรียกไอคอน home จาก React Icons library
import { LaptopOutlined } from '@ant-design/icons';
import React from 'react'

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <motion.a
                href="/"
                className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold'
                whileHover={{
                    backgroundImage: 'linear-gradient(45deg, #8B5CF6, #FF7A78, #FDB854, #8B5CF6)',
                    backgroundSize: '400%',
                    transition: { backgroundPosition: '100%', duration: 2 }
                }}
            >
                <LaptopOutlined />
            </motion.a>
        </div>
    )
}

export default Logo
