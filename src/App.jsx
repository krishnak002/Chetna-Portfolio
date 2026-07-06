import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TopMarquee from "./components/TopMarquee.jsx";
import LittleThings from "./components/LittleThings.jsx";
import PickFlavor from "./components/PickFlavor.jsx";
import SocialMarquee from "./components/SocialMarquee.jsx";
import SecretSauce from "./components/SecretSauce.jsx";
import Bloom from "./components/Bloom.jsx";
import KindWords from "./components/KindWords.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import SocialMedia from "./components/SocialMedia.jsx";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TopMarquee />
      <LittleThings />
      <SocialMarquee />
      <SocialMedia/>
      <SecretSauce />
      <Bloom />
      <FAQ />
      <Footer />
    </main>
  );
}
