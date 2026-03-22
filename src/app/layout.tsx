import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urban Bites - Premium Fine Dining",
  description: "Experience refined gastronomy at Urban Bites. Reserve your table at our upscale restaurant featuring artisanal cuisine and exceptional service.",
  keywords: "fine dining, restaurant, reservation, gourmet, premium cuisine, fine dining experience",
  openGraph: {
    title: "Urban Bites - Premium Fine Dining",
    description: "Experience refined gastronomy at Urban Bites. Reserve your table at our upscale restaurant featuring artisanal cuisine and exceptional service.",
    url: "https://urbanbites.com",
    siteName: "Urban Bites",
    type: "website",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/close-up-restaurant-table-with-pink-velvet-chairs-grey-painted-hall-with-classic-paintings_140725-8705.jpg",
        alt: "Urban Bites Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Bites - Premium Fine Dining",
    description: "Experience refined gastronomy at Urban Bites. Reserve your table at our upscale restaurant.",
    images: [
      "http://img.b2bpic.net/free-photo/close-up-restaurant-table-with-pink-velvet-chairs-grey-painted-hall-with-classic-paintings_140725-8705.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${openSans.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}