import Page from '@/components/page';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BiSolidCookie } from "react-icons/bi";
import { LuDog, LuBone } from "react-icons/lu";
import { MdCookie } from "react-icons/md";




export default function Contact() {


    return (
        <Page>
            <div id='contact-div'>

                <div>
                    <h2 className='page-title'>Contact</h2>
                </div>

                <div id='contact-info'>
                    <div id='about-text'>
                        <div className='card2'>
                            <span className='icon-size'><MdOutlineMarkEmailRead /></span>
                            <p className='text-block'>abby.smith@fakeEmail.com</p>
                            <span className='icon-size'><FiPhone /></span>
                            <p className='text-block'>123-456-7890</p>
                        </div>
                        <div className='card1'></div>
                        <div className='card3'></div>
                    </div>

                    <div id='about-text'>
                        <div className='card5'>
                            <p>
                                I make cookies for all occasions! If you have something in mind, send a text, write an email, or feel free to call and talk
                                and make it happen!
                            </p>
                        </div>
                        <div className='card4'></div>
                        <div className='card6'></div>
                    </div>
                </div>

                <div>
                    <img className='contact-photo' src='https://media.licdn.com/dms/image/C5616AQHMqrS2th8kMA/profile-displaybackgroundimage-shrink_350_1400/0/1614456264430?e=1711584000&v=beta&t=JJeLROXazX87WGu8qQmyTHkFMjwQkmJHdncQzLZgCvE' alt='a photo of abby!' />
                </div>

                <div className='home-cookiePics'>
                    <BiSolidCookie className='homeCookie' />
                    <LuDog className='homeCookie' />
                    <LuBone className='homeCookie' />
                    <MdCookie className='homeCookie' />
                </div>

            </div>

        </Page>
    )
}