import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Games from "@/components/Games";
import About from "@/components/About";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Games />
        <About />
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
