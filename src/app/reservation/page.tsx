"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import TextAbout from "@/components/sections/about/TextAbout";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Phone, ChefHat } from "lucide-react";

export default function ReservationPage() {
  const navItems = [
    { name: "Home", id: "home" },
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

      <div id="about" data-section="about">
        <TextAbout
          tag="Reservations"
          tagIcon={ChefHat}
          tagAnimation="slide-up"
          title="Secure Your Perfect Evening"
          buttons={[
            {
              text: "Back to Home",
              href: "/",
            },
          ]}
          buttonAnimation="blur-reveal"
          useInvertedBackground={false}
          ariaLabel="Reservation intro section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Your Table"
          title="Reserve at Urban Bites"
          description="Join us for an unforgettable culinary experience. Provide your email to receive reservation details and special offers."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{
            variant: "gradient-bars",
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-restaurant-table-with-pink-velvet-chairs-grey-painted-hall-with-classic-paintings_140725-8705.jpg?_wi=3"
          imageAlt="Urban Bites Restaurant"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email for reservation"
          buttonText="Confirm Reservation"
          termsText="By booking, you agree to our reservation policies and terms of service."
          ariaLabel="Reservation contact section"
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