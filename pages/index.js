import Page from '@/components/page';
import { GiDogHouse } from "react-icons/gi";
import { BiSolidDog, BiSolidCookie } from "react-icons/bi";
import { LuDog, LuBone } from "react-icons/lu";
import { MdCookie } from "react-icons/md";
import { PiCookieBold } from "react-icons/pi";


export default function Home() {
    return (
        <Page>
            {/* THIS IS YOUR HOME PAGE */}
            <div id='home-div'>

                <div className='home-cookiePics'>
                    <BiSolidCookie className='homeCookie' />
                    <LuDog className='homeCookie' />
                    <LuBone className='homeCookie' />
                    <MdCookie className='homeCookie' />
                </div>

                <div id='title-div'>
                    <h1 className='pugsNcookies'>Pugs</h1>
                    <h1 className='pugsNcookies'>N'</h1>
                    <h1 className='pugsNcookies'>Cookies</h1>
                </div>

                <div className='home-cookiePics'>
                    <PiCookieBold className='homeCookie' />
                    <GiDogHouse className='homeCookie' />
                    <BiSolidDog className='homeCookie' />
                    <PiCookieBold className='homeCookie' />
                </div>

            </div>
        </Page>
    )
}