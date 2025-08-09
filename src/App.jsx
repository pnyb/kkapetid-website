import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="font-sans bg-cream text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Header />

      {/* About Section */}
       <About />

      {/* Menu Section */}
       <Menu />

      {/* Gallery Section */}
       <Gallery />

      {/* Reviews Section */}
       <Reviews />

      {/* Contact Section */}
       <Contact />

      {/* Footer */}
       <Footer />

      {/* Back to Top button */}
       <BackToTop />
    </div>
  );
}
