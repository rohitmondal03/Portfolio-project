import { IntroSection } from "@/components/intro-section";
import { ProjectSection } from "@/components/project-section";
import { SkillsDescription } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <IntroSection />
      <SkillsDescription />
      <ProjectSection />
      <ContactSection />
    </section>
  );
}
