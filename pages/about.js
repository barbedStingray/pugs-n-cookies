import Page from '@/components/page';
// import { FaArrowCircleRight } from "react-icons/fa";
// import { FaArrowCircleLeft } from "react-icons/fa";



// import React, { useState } from "react";
// import { motion, AnimatePresence, wrap } from "framer-motion";
// import { wrap } from "popmotion";
// import { wrap } from "framer-motion";


export default function About() {


// ! Code for slideshow
    // const images = [
    //     "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    //     "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    //     "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
    // ];
    // const variants = {
    //     enter: (direction) => {
    //         return {
    //             x: direction > 0 ? 1000 : -1000,
    //             opacity: 0,
    //         };
    //     },
    //     center: {
    //         zIndex: 1,
    //         x: 0,
    //         opacity: 1,
    //     },
    //     exit: (direction) => {
    //         return {
    //             zIndex: 0,
    //             x: direction < 0 ? 1000 : -1000,
    //             opacity: 0,
    //         };
    //     },
    // };
    // const swipeConfidenceThreshold = 10000;
    // const swipePower = (offset, velocity) => {
    //     return Math.abs(offset) * velocity;
    // };
    // const [[page, direction], setPage] = useState([0, 0]);
    // const imageIndex = wrap(0, images.length, page);
    // const paginate = (newDirection) => {
    //     setPage([page + newDirection, newDirection]);
    // };





    return (
        <Page>
            <h2>About</h2>


            <img src='https://media.licdn.com/dms/image/C5603AQHwNxUqgeBkwg/profile-displayphoto-shrink_800_800/0/1613945052543?e=1711584000&v=beta&t=LiyTP80VOvnJRGSYhpd_evKRRoEc8TWESOv1WSm36AY' alt='a photo of abby!'/>





            {/* ! SlideShow Code !!
            <div id='slide-show'>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={images[imageIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className='smooth-image'
                    />
                </AnimatePresence>
                <div className="prev arrow" onClick={() => paginate(-1)}>
                    <FaArrowCircleLeft />
                </div>
                <div className="next arrow" onClick={() => paginate(1)}>
                    <FaArrowCircleRight />
                </div>
            </div> */}

        </Page>
    )
}