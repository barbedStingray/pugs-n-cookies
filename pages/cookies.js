import Page from '@/components/page';
import { GiDogHouse } from "react-icons/gi";
import { BiSolidDog } from "react-icons/bi";


import Image from 'next/image'

export default function Cookies() {

    const cookiePhotos = [
        { cookieImage: '/photos/IMG_2262.jpeg' },
        { cookieImage: '/photos/IMG_2264.jpeg' },
        { cookieImage: '/photos/IMG_2267.jpeg' },
        { cookieImage: '/photos/IMG_2269.jpeg' },
        { cookieImage: '/photos/IMG_2277.jpeg' },
        { cookieImage: '/photos/IMG_2280.jpeg' },
        { cookieImage: '/photos/IMG_2284.jpeg' },
        { cookieImage: '/photos/IMG_2286.jpeg' },
        { cookieImage: '/photos/IMG_2287.jpeg' },
        { cookieImage: '/photos/IMG_2288.jpeg' },
    ];


    return (
        <Page>
            <div id='cookie-div'>

                <div>
                    <h2 className='page-title'>Cookies</h2>
                </div>

                <GiDogHouse className='homeCookie' />

                {/* <div id='cookie-map'>
                    {cookiePhotos.map((cookie) =>
                        <img className='cookieDisplay' src={cookie.cookieImage} />
                    )}
                </div> */}

                <div id='cookie-map'>
                    {cookiePhotos.map((cookie) =>
                        <Image
                            className='cookieDisplay'
                            src={cookie.cookieImage}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    )}
                </div>


                <BiSolidDog className='homeCookie' />

            </div>
        </Page>
    )
}