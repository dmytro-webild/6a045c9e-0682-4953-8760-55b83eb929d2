"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { UtensilsCrossed, Phone } from "lucide-react";

export default function MenuPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Reservation", id: "reservation" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" }
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

      <div id="full-menu" data-section="full-menu">
        <ProductCardOne
          title="Complete Menu"
          description="Explore our full collection of culinary masterpieces, carefully crafted by our award-winning chef to showcase the finest seasonal ingredients and innovative techniques."
          tag="Full Selection"
          tagIcon={UtensilsCrossed}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Reserve Your Table",
              href: "/"
            }
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
              imageSrc: "http://img.b2bpic.net/free-photo/grilled-roasted-chicken-steaks-vegetables-white-plate-with-sauce_114579-92.jpg",
              imageAlt: "Pan-Seared Scallops"
            },
            {
              id: "dish-2",
              name: "Wagyu Ribeye",
              price: "58",
              imageSrc: "http://img.b2bpic.net/free-photo/steak-with-cheese-vegetables-restaurant_501050-842.jpg",
              imageAlt: "Wagyu Ribeye"
            },
            {
              id: "dish-3",
              name: "Seasonal Vegetables",
              price: "18",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-vegetables-mushrooms-tomatoes-bell-peppers-cutting-board_140725-145783.jpg",
              imageAlt: "Seasonal Vegetables"
            },
            {
              id: "dish-4",
              name: "Lobster Thermidor",
              price: "62",
              imageSrc: "http://img.b2bpic.net/free-photo/grilled-roasted-chicken-steaks-vegetables-white-plate-with-sauce_114579-92.jpg",
              imageAlt: "Lobster Thermidor"
            },
            {
              id: "dish-5",
              name: "Duck Confit",
              price: "48",
              imageSrc: "http://img.b2bpic.net/free-photo/steak-with-cheese-vegetables-restaurant_501050-842.jpg",
              imageAlt: "Duck Confit"
            },
            {
              id: "dish-6",
              name: "Chocolate Soufflé",
              price: "14",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-vegetables-mushrooms-tomatoes-bell-peppers-cutting-board_140725-145783.jpg",
              imageAlt: "Chocolate Soufflé"
            }
          ]}
          carouselMode="buttons"
          ariaLabel="Complete menu section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Ready to Dine?"
          title="Book Your Experience"
          description="Make a reservation to experience Urban Bites and taste the artistry of our culinary team. We welcome groups and private dining inquiries."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{
            variant: "gradient-bars"
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-restaurant-table-with-pink-velvet-chairs-grey-painted-hall-with-classic-paintings_140725-8705.jpg"
          imageAlt="Urban Bites Restaurant Ambiance"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Reserve Table"
          termsText="By reserving, you agree to our Terms and Conditions."
          ariaLabel="Contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Urban Bites"
          leftLink={{
            text: "Privacy Policy",
            href: "#privacy"
          }}
          rightLink={{
            text: "hello@urbanbites.com",
            href: "mailto:hello@urbanbites.com"
          }}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}