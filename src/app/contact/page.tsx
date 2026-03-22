"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Phone } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Reservation", id: "reservation" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="blurBottom"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={navItems}
          brandName="Urban Bites"
          bottomLeftText="Fine Dining Excellence"
          bottomRightText="hello@urbanbites.com"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready for an Experience?"
          description="Reserve your table today or reach out with any inquiries. We look forward to welcoming you."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{
            variant: "gradient-bars",
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-restaurant-table-with-pink-velvet-chairs-grey-painted-hall-with-classic-paintings_140725-8705.jpg"
          imageAlt="Urban Bites Restaurant"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Reserve Table"
          termsText="By submitting, you agree to our Terms and Conditions."
          ariaLabel="Contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Urban Bites"
          leftLink={{
            text: "Privacy Policy",
            href: "#privacy",
          }}
          rightLink={{
            text: "hello@urbanbites.com",
            href: "mailto:hello@urbanbites.com",
          }}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}