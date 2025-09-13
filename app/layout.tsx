import type { Metadata } from "next";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import "./globals.css";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/context/Theme";

const ubuntu = localFont({
  src: "./fonts/UbuntuRegularVF.ttf",
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

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <SessionProvider session={session}>
        <body
          suppressHydrationWarning={true}
          className={`${ubuntu.className} ${spaceGrotesk.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster position="top-center" />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
