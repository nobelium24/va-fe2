import BestSellers from "./components/BestSellers";
import CollectionSection from "./components/Collection";
import FollowUsSection from "./components/FollowUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import VAWeeksSection from "./components/VAWeeekly";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BestSellers />
      <CollectionSection />
      <VAWeeksSection />
      <FollowUsSection />
      <Footer />
    </main>
  );
}
