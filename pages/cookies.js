import Page from '@/components/page';
import { GiDogHouse } from "react-icons/gi";
import { BiSolidDog } from "react-icons/bi";



export default function Cookies() {

    const cookiePhotos = [
        { cookieImage: '/photos/abby.png' },
        { cookieImage: '/photos/IMG_2262.jpeg' },
        { cookieImage: '/photos/abby.png' },
        { cookieImage: '/photos/abby.png' },
        { cookieImage: '/photos/abby.png' },
        { cookieImage: '/photos/abby.png' },
        { cookieImage: '/photos/abby.png' },
        { cookieImage: '/photos/abby.png' },
        { cookieImage: '/photos/abby.png' },
        { cookieImage: '/photos/abby.png' },
    ];


    return (
        <Page>
            <div id='cookie-div'>

                <div>
                    <h2 className='page-title'>Cookies</h2>
                </div>

                <GiDogHouse className='homeCookie' />

                <div id='cookie-map'>
                    {cookiePhotos.map((cookie) =>
                        <img className='cookieDisplay' src={cookie.cookieImage} />
                    )}
                </div>


                <BiSolidDog className='homeCookie' />

            </div>
        </Page>
    )
}