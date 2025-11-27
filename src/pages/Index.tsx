import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionStatement from "@/components/MissionStatement";
import Features from "@/components/Features";
import ProgramsNew from "@/components/ProgramsNew";
import Testimonials from "@/components/Testimonials";
import ExamRegistration from "@/components/ExamRegistration";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to exam section when coming from program detail page
    if (location.state?.scrollToExam) {
      const examElement = document.getElementById('exam');
      if (examElement) {
        setTimeout(() => {
          examElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    
    // Handle scroll to any section when coming from program detail page
    if (location.state?.scrollToSection) {
      const element = document.getElementById(location.state.scrollToSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background font-arabic">
      <Header />
      <main>
        <Hero />
        <About />
        <MissionStatement />
        <Features />
        <ProgramsNew />
        <ExamRegistration />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
