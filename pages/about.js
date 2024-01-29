import Page from '@/components/page';
import Phoebe from '../components/phoebe';
import Chandler from '../components/chandler';


export default function About() {



    return (
        <Page>
            <div id='about-div'>

                <div>
                    <h2 className='page-title'>About</h2>
                </div>

                <div id='photo-about'>
                    <img className='aboutPic' src='https://media.licdn.com/dms/image/C5603AQHwNxUqgeBkwg/profile-displayphoto-shrink_800_800/0/1613945052543?e=1711584000&v=beta&t=LiyTP80VOvnJRGSYhpd_evKRRoEc8TWESOv1WSm36AY' alt='a photo of abby!' />

                    <div id='about-text'>
                        <div className='card2'>
                            <p className='text-block'>
                                Hello, I'm Abby! I am a Teacher, a baker, a wife, and most of all, a mother
                                to my little one, Elena. And of course, these two wonderful pugs!
                            </p>
                        </div>
                        <div className='card1'></div>
                        <div className='card3'></div>
                    </div>
                </div>

                <div id='pug-div'>
                    <Phoebe />
                    <Chandler />
                </div>

            </div>
        </Page>
    )
}