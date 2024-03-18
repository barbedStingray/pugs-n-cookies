import Page from '@/components/page';
import Phoebe from '../components/phoebe';
import Chandler from '../components/chandler';
import Image from 'next/image'


export default function About() {



    return (
        <Page>
            <div id='about-div'>

                <div>
                    <h2 className='page-title'>About</h2>
                </div>

                <div id='photo-about'>

                    <Image
                        className='aboutPic'
                        src='/photos/abby.png'
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />

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