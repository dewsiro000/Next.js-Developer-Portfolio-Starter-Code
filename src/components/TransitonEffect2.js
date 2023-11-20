import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const SlideAnimation = ({ isVisible, delay, duration, ease, from }) => {
    const variants = {
        hidden: { y: '-5vh', opacity: 0 },
        visible: { y: '0vh', opacity: 1 }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ delay, duration, ease }}
                    style={from}
                    className='fixed top-0 bottom-0 right-0 left-0 z-30 bg-primary'
                />
            )}
        </AnimatePresence>
    );
};

const TransitionEffect2 = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        setShowAnimation(true);
    }, []);

    return (
        <div>
            <SlideAnimation isVisible={showAnimation} delay={0} duration={0.6} ease="easeInOut" from={{ zIndex: 30 }} />
            <SlideAnimation isVisible={showAnimation} delay={0.6} duration={0.6} ease="easeInOut" from={{ zIndex: 20 }} />
            <SlideAnimation isVisible={showAnimation} delay={1.2} duration={0.6} ease="easeInOut" from={{ zIndex: 10 }} />
        </div>
    );
};

export default TransitionEffect2;
