import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
 <HeroSection/>
 <AboutSection/>
 <SkillsSection/>
 <ProjectsSection/>
 <EducationSection/>
 <ContactSection/>

    </>
  );
}
