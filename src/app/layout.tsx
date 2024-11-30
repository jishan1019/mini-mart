import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getBaseURL } from "@/utils";
import { Config } from "@/config";
import NextTopLoader from "nextjs-toploader";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const BASE_URL = await getBaseURL();

  return {
    metadataBase: new URL(BASE_URL),
    title: Config.fullTitle,
    description: Config.description,
    openGraph: {
      images: [
        {
          url: new URL("/home.jpg", BASE_URL),
          width: 800,
          height: 600,
          alt: Config.title,
        },
        {
          url: new URL("/home.jpg", BASE_URL),
          width: 1200,
          height: 900,
          alt: Config.title,
        },
        {
          url: new URL("/home.jpg", BASE_URL),
          width: 1920,
          height: 1440,
          alt: Config.title,
        },
        {
          url: new URL("/home.jpg", BASE_URL),
          width: 4000,
          height: 3000,
          alt: Config.title,
        },
      ],
    },
    keywords: Config.keywords,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <NextTopLoader />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
