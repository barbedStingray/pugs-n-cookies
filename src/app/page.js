import "./home.module.css";
import Link from 'next/link';
import Phoebe from '../components/Phoebe.js';
import Chandler from '../components/Chandler.js';
import Header from '../components/Header.js';


export default function Home() {

  return (
    <main id='main-format'>

      <Header /> 

      <Link className="link-btn" href="/pugsNcookies/cookies">Lets go!</Link>

      <Phoebe />
      <Chandler /> 


    </main>
  );
}
