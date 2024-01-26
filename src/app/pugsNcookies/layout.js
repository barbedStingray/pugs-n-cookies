import Navbar from '../../components/Navbar';
 
export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div >{children}</div>
    </div>
  );
}
