import '@/styles/globals.css'
import Navbar from '/components/Navbar';
import '@/styles/fonts.css';



export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );

}
