import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KINJO — Find your kind. | Real Events. Real Connections.",
  description:
    "Kinjo is a curated networking platform designed to transform accidental encounters into intentional connections. Meet purpose-matched founders, designers, investors, and collaborators at live events.",
  keywords: [
    "networking",
    "founders",
    "investors",
    "designers",
    "meetups",
    "The Room",
    "Mumbai events",
    "Bengaluru tech",
    "curated networking",
  ],
  icons: {
    icon: "/kinjo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-[#6D28D9] selection:text-white">
        {children}
      </body>
    </html>
  );
}
