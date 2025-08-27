import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ubuntu = localFont({
  src: "./fonts/Ubuntu-Regular.ttf",
  variable: "--font-ubuntu",
  weight: "100 200 300 400 500 600 700 800 900",
});
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: " Ghilu - The Feast of Brains",
  description:
    "A community-driven platform for sharing diverse knowledge by asking and answering questions. Form tech tips and programming knowledge to nature, literature and art - get help, share knowledge, and collaborate with people from around the world. Explore topics whatever you like, in your native languages.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
