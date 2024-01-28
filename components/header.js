import Link from 'next/link';
import { MdOutlineCookie } from "react-icons/md";
import { TbCookieMan } from "react-icons/tb";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { LiaCookieSolid } from "react-icons/lia";


const Header = () => (
    <header>
        <div className='header-items'>
            <Link className='header-item' href='/'>{<LiaCookieSolid />}Home</Link>
            <Link className='header-item' href='/about'>{<TbCookieMan />}About</Link>
            <Link className='header-item' href='/contact'>{<LiaCookieBiteSolid />}Contact</Link>
            <Link className='header-item' href='/cookies'>{<MdOutlineCookie />}Cookies</Link>
        </div>
    </header>
);

export default Header;