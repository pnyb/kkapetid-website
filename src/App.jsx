import Navbar    from './components/Navbar';
import Header    from './components/Header';
import Marquee   from './components/Marquee';
import About     from './components/About';
import Menu      from './components/Menu';
import Gallery   from './components/Gallery';
import Reviews   from './components/Reviews';
import Contact   from './components/Contact';
import Footer    from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="font-sans text-slate-darker" style={{ background: '#fdf6f0' }}>
      <Navbar />
      <Header />
      <Marquee />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}