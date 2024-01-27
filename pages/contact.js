import Page from '@/components/page';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhone } from "react-icons/fi";



export default function Contact() {


    return (
        <Page>
            <div id='contact-div'>
                <h2>Contact</h2>

                <div className='contact-cards'>
                    <div className='card-div'>
                        <div className='contact-info'>
                            <MdOutlineMarkEmailRead />
                            <p>abby.smith@fakeEmail.com</p>
                            <FiPhone />
                            <p>123-456-7890</p>
                        </div>
                        <div className='card1'></div>
                        <div className='card2' ></div>
                        <div className='card3' ></div>
                    </div>

                    <div className='card-div'>
                        <div className='contact-description'>
                            <p>
                                I make cookies for all occasions! If you have something in mind, send a text, write an email, or feel free to call and talk
                                and make it happen!
                            </p>
                        </div>
                        <div className='card4'></div>
                        <div className='card5' ></div>
                        <div className='card6' ></div>
                    </div>
                </div>


                <img className='contact-photo' src='https://media.licdn.com/dms/image/C5616AQHMqrS2th8kMA/profile-displaybackgroundimage-shrink_350_1400/0/1614456264430?e=1711584000&v=beta&t=JJeLROXazX87WGu8qQmyTHkFMjwQkmJHdncQzLZgCvE' alt='a photo of abby!' />
            </div>

        </Page>
    )
}