import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

export default function Layout({ children }) {
  return (
    <div id='pugsNcookies-div'>
        <Header />
        <Navbar />
        {children}
    </div>
  );
}
