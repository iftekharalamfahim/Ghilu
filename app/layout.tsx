import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import ThemeProvider from "@/context/Theme";

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
    icon: "/images/siteLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ubuntu.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
