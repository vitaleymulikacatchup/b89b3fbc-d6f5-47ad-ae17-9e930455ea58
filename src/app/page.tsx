"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "hero", url: "https://images.pexels.com/photos/34282118/pexels-photo-34282118.png?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of a full moon against a dark sky, showcasing lunar surface details." },
  { id: "about", url: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Astronaut floating in space during a spacewalk, visible Earth in the background." },
  { id: "team", url: "https://images.pexels.com/photos/298207/pexels-photo-298207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Six military airplanes flying in formation against a clear blue sky." },
  { id: "contact", url: "https://images.pexels.com/photos/18536259/pexels-photo-18536259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Scrabble tiles spelling 'CONTACT' on a wooden surface with scattered tiles around." },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Space Crafts"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Explore the Final Frontier"
            description="Join us on an exciting journey beyond our planet."
            imageSrc={assetMap.find(a => a.id === 'hero')?.url}
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Contact Us", href: "contact" },
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our Mission is to Advance Spacecraft Technology"
            buttons={[
              { text: "Discover More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardThree
            testimonials={[
              { id: "1", name: "Sam", handle: "@spaceenthusiast", testimonial: "Incredible workmanship in spacecraft design." },
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            members={[
              { id: "1", name: "Amélie Laurent", role: "Founder & CEO", description: "Leading innovation at the intersection of technology and space.", imageSrc: assetMap.find(a => a.id === 'team')?.url },
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Contact Our Space Team"
            description="We are eager to collaborate on new and innovative projects."
            imageSrc={assetMap.find(a => a.id === 'contact')?.url}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-gray-800 text-white">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Explore", items: [
                { label: "Home", href: "home" },
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" }
              ] }
            ]}
            copyrightText="© 2025 Space Crafts"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
