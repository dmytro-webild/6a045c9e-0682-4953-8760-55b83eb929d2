"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { ChefHat, Award, Heart } from "lucide-react";

export default function AboutPage() {
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
          tag="Our Heritage"
          tagIcon={ChefHat}
          tagAnimation="slide-up"
          title="Dedicated to Excellence and Innovation"
          buttons={[
            {
              text: "Reserve Your Table",
              href: "/reservation",
            },
          ]}
          buttonAnimation="blur-reveal"
          useInvertedBackground={false}
          ariaLabel="About heritage section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardMedia
          title="Our Commitment"
          description="Urban Bites stands on three foundational values that guide every aspect of our operation."
          features={[
            {
              id: "heritage",
              title: "Culinary Heritage",
              description: "Rooted in decades of gastronomic tradition, we honor classic techniques while embracing contemporary innovation to create dishes that tell stories.",
              tag: "Tradition",
              imageSrc: "http://img.b2bpic.net/free-photo/woman-with-colorful-healthy-sweet-deserts-chia-puddings-made-almond-milk-blue-spirulina-extract-chia-seeds-pappaya-mango-jam-homemade-granola-wooden-table-kitchen-home_343596-1059.jpg",
              imageAlt: "Culinary heritage",
            },
            {
              id: "sourcing",
              title: "Ethical Sourcing",
              description: "We partner exclusively with suppliers who share our values of sustainability, quality, and ethical practices. Every ingredient matters.",
              tag: "Sustainability",
              imageSrc: "http://img.b2bpic.net/free-photo/cafe-living-room-loft-style_1150-10725.jpg?_wi=2",
              imageAlt: "Ethical sourcing",
            },
            {
              id: "team",
              title: "Passionate Team",
              description: "Our chefs, sommeliers, and hospitality professionals are united by a shared passion for excellence and a commitment to your satisfaction.",
              tag: "People",
              imageSrc: "http://img.b2bpic.net/free-photo/grey-painted-fancy-restaurant-with-empty-dinner-table_140725-8729.jpg?_wi=2",
              imageAlt: "Passionate team",
            },
          ]}
          animationType="slide-up"
          tag="What Sets Us Apart"
          tagIcon={Award}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Experience It",
              href: "/reservation",
            },
          ]}
          buttonAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          carouselMode="buttons"
          ariaLabel="About commitment section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Why Guests Love Us"
          description="Discover what makes Urban Bites the destination of choice for discerning diners."
          tag="Guest Testimonials"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Join Our Community",
              href: "/reservation",
            },
          ]}
          buttonAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          gridVariant="three-columns-all-equal-width"
          animationType="opacity"
          testimonials={[
            {
              id: "testimonial-1",
              name: "Victoria Rodriguez",
              role: "Food Critic",
              company: "Gourmet Magazine",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg?_wi=3",
            },
            {
              id: "testimonial-2",
              name: "Elena Moretti",
              role: "Business Executive",
              company: "Moretti Enterprises",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-business-woman-standing-with-crossed-arms_23-2148095676.jpg?_wi=3",
            },
            {
              id: "testimonial-3",
              name: "David Park",
              role: "Event Planner",
              company: "Park Events",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-11786.jpg?_wi=3",
            },
          ]}
          carouselMode="auto"
          ariaLabel="About testimonials section"
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