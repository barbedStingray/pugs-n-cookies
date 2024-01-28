import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import './global.css';

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    return (
        <AnimatePresence
            mode="wait"
        // initial={false}
        >
            <motion.div
                key={router.pathname}
                // initial={{ scale: 0, opacity: 0 }}
                // animate={{ rotate: 360, scale: 1, opacity: 1 }}
                // transition={{
                //   type: "spring",
                //   stiffness: 260,
                //   damping: 20
                // }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
                {/* THIS IS THE MAIN COMPONENT DISPLAYED ON THE DOM */}
                <Component {...pageProps} />
                
            </motion.div>

            <motion.div
                // className='slide-in'
                // initial={{ scaleY: 0 }}
                // animate={{ scaleY: 0.5 }}
                // exit={{ scaleY: 1 }}
                // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>

            <motion.div
                // className='slide-out'
                // initial={{ scaleY: 1 }}
                // animate={{ scaleY: 0 }}
                // exit={{ scaleY: 0 }}
                // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>

        </AnimatePresence>
    )
}

export default App;
