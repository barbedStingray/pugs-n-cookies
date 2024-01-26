import styles from "./page.module.css";
import Link from 'next/link';
import Phoebe from '../components/Phoebe.js';
import Chandler from '../components/Chandler.js';


export default function Home() {
  return (
    <main className={styles.main}>

      <h1>Pugs and Cookies</h1>

      <Link href="/pugsNcookies/cookies">Lets go!</Link>


      <Phoebe />
      
      <Chandler /> 


    </main>
  );
}
