import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Consultant from "@/app/components/Consultant";
import About from "@/app/components/About";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import StickyApplyBtn from "@/app/components/StickyApplyBtn";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Consultant />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <StickyApplyBtn />
    </>
  );
}
