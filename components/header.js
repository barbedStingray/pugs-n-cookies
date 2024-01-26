import Link from 'next/link';
import { MdOutlineCookie } from "react-icons/md";
import { TbCookieMan } from "react-icons/tb";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { LiaCookieSolid } from "react-icons/lia";


const Header = () => (
    <header>
        <div className='header-items'>
            <div className='header-item'>
                <LiaCookieSolid />
                <Link href='/'>Home</Link>
            </div>
            <div className='header-item'>
                <TbCookieMan />
                <Link href='/about'>About</Link>
            </div>
            <div className='header-item'>
                <LiaCookieBiteSolid />
                <Link href='/contact'>Contact</Link>
            </div>
            <div className='header-item'>
                <MdOutlineCookie />
                <Link href='/cookies'>Cookies</Link>
            </div>
        </div>
    </header>
);

export default Header;