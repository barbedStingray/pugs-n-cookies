import Link from 'next/link';
// import NavLinks from '@/app/ui/dashboard/nav-links';


const Navbar = () => {
  return (
    <div id='nav-bar'>
      <Link className='link-btn' href="/">Home</Link>
      <Link className='link-btn' href="/pugsNcookies/about">About</Link>
      <Link className='link-btn' href="/pugsNcookies/cookies">Cookies</Link>
      <Link className='link-btn' href="/pugsNcookies/contact">Contact</Link>
    </div>
  )
}

export default Navbar;
