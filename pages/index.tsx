import { Features } from "../components/Features";
import { FeaturesBlocks } from "../components/FeaturesBlocks";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroHome } from "../components/HeroHome";
import { Newsletter } from "../components/Newsletter";
import { Testimonials } from "../components/Testimonials";

const Home = ({ isDarkMode, toggle }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header isDarkMode={isDarkMode} toggle={toggle} />
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Home;
