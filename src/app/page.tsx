"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Sparkles, Award, UtensilsCrossed, Heart, ChefHat, Phone } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Culinary Excellence Awaits"
          description="Experience elevated gastronomy in an atmosphere of refined elegance. Urban Bites brings together world-class cuisine, impeccable service, and timeless sophistication."
          tag="Premium Dining Experience"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Reserve Your Table",
              href: "/reservation",
            },
            {
              text: "Explore Menu",
              href: "#menu-preview",
            },
          ]}
          buttonAnimation="blur-reveal"
          background={{
            variant: "radial-gradient",
          }}
          testimonials={[
            {
              name: "Marcus Chen",
              handle: "@chefmarcus",
              testimonial: "Urban Bites redefined our understanding of modern fine dining.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg?_wi=1",
              imageAlt: "Marcus Chen",
            },
            {
              name: "Sophie Laurent",
              handle: "@sophieliving",
              testimonial: "An unforgettable evening of culinary artistry.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-business-woman-standing-with-crossed-arms_23-2148095676.jpg?_wi=1",
              imageAlt: "Sophie Laurent",
            },
            {
              name: "James Mitchell",
              handle: "@jmitchell",
              testimonial: "The service and atmosphere are simply impeccable.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-11786.jpg?_wi=1",
              imageAlt: "James Mitchell",
            },
          ]}
          testimonialRotationInterval={5000}
          useInvertedBackground={false}
          mediaAnimation="none"
          ariaLabel="Hero section"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Story"
          tagIcon={ChefHat}
          tagAnimation="slide-up"
          title="Crafted Moments, Unforgettable Flavors"
          buttons={[
            {
              text: "Reserve Now",
              href: "/reservation",
            },
          ]}
          buttonAnimation="blur-reveal"
          useInvertedBackground={false}
          ariaLabel="About section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardMedia
          title="The Urban Bites Experience"
          description="Three pillars define our commitment to excellence and your satisfaction."
          features={[
            {
              id: "ambiance",
              title: "Refined Ambiance",
              description: "Step into an atmosphere of understated elegance where every detail has been thoughtfully curated to create the perfect setting for meaningful moments.",
              tag: "Atmosphere",
              imageSrc: "http://img.b2bpic.net/free-photo/cafe-living-room-loft-style_1150-10725.jpg?_wi=1",
              imageAlt: "Refined ambiance",
            },
            {
              id: "cuisine",
              title: "Artisanal Cuisine",
              description: "Our chef crafts each dish with precision and passion, using only the finest seasonal ingredients sourced from trusted local purveyors.",
              tag: "Culinary",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-fried-meat-dish-with-glass-wine-table-meat-meal-food_140725-28163.jpg",
              imageAlt: "Artisanal cuisine",
            },
            {
              id: "service",
              title: "Exceptional Service",
              description: "Our dedicated team anticipates your needs with grace and professionalism, ensuring every moment of your visit is seamless and memorable.",
              tag: "Hospitality",
              imageSrc: "http://img.b2bpic.net/free-photo/grey-painted-fancy-restaurant-with-empty-dinner-table_140725-8729.jpg?_wi=1",
              imageAlt: "Exceptional service",
            },
          ]}
          animationType="slide-up"
          tag="Why Choose Us"
          tagIcon={Award}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Learn More",
              href: "/about",
            },
          ]}
          buttonAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          carouselMode="buttons"
          ariaLabel="Features section"
        />
      </div>

      <div id="menu-preview" data-section="menu-preview">
        <ProductCardOne
          title="Signature Dishes"
          description="Discover our most celebrated creations, each a masterpiece of flavor and presentation."
          tag="Menu Highlights"
          tagIcon={UtensilsCrossed}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "View Full Menu",
              href: "#menu-preview",
            },
          ]}
          buttonAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          products={[
            {
              id: "dish-1",
              name: "Pan-Seared Scallops",
              price: "32",
              imageSrc: "http://img.b2bpic.net/free-photo/grilled-roasted-chicken-steaks-vegetables-white-plate-with-sauce_114579-92.jpg?_wi=1",
              imageAlt: "Pan-Seared Scallops",
            },
            {
              id: "dish-2",
              name: "Wagyu Ribeye",
              price: "58",
              imageSrc: "http://img.b2bpic.net/free-photo/steak-with-cheese-vegetables-restaurant_501050-842.jpg?_wi=1",
              imageAlt: "Wagyu Ribeye",
            },
            {
              id: "dish-3",
              name: "Seasonal Vegetables",
              price: "18",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-vegetables-mushrooms-tomatoes-bell-peppers-cutting-board_140725-145783.jpg?_wi=1",
              imageAlt: "Seasonal Vegetables",
            },
          ]}
          carouselMode="buttons"
          ariaLabel="Menu preview section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Guest Stories"
          description="Hear from those who have experienced Urban Bites hospitality firsthand."
          tag="Guest Experiences"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Join Us Soon",
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
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg?_wi=2",
            },
            {
              id: "testimonial-2",
              name: "Elena Moretti",
              role: "Business Executive",
              company: "Moretti Enterprises",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-business-woman-standing-with-crossed-arms_23-2148095676.jpg?_wi=2",
            },
            {
              id: "testimonial-3",
              name: "David Park",
              role: "Event Planner",
              company: "Park Events",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-11786.jpg?_wi=2",
            },
            {
              id: "testimonial-4",
              name: "Catherine Stone",
              role: "Hospitality Manager",
              company: "Stone Group Hotels",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-business-woman-suit_23-2148603018.jpg",
            },
            {
              id: "testimonial-5",
              name: "Alexander Quinn",
              role: "Chef Consultant",
              company: "Culinary Institute",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5367.jpg",
            },
            {
              id: "testimonial-6",
              name: "Isabella Rossi",
              role: "Travel Writer",
              company: "Wanderlust Quarterly",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/elegant-beautiful-young-woman-dress-room_23-2148068394.jpg",
            },
          ]}
          carouselMode="auto"
          ariaLabel="Testimonials section"
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
          imageSrc="http://img.b2bpic.net/free-photo/close-up-restaurant-table-with-pink-velvet-chairs-grey-painted-hall-with-classic-paintings_140725-8705.jpg?_wi=1"
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