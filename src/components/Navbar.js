import Link from 'next/link';
// import NavLinks from '@/app/ui/dashboard/nav-links';


const Navbar = () => {
  return (
    <div>

      <Link href="/">Home</Link>
      <Link href="/pugsNcookies/about">About</Link>
      <Link href="/pugsNcookies/cookies">Cookies</Link>
      <Link href="/pugsNcookies/contact">Contact</Link>

    </div>
  )
}

export default Navbar;
