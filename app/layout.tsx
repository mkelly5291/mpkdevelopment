import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mpkdevelopment.com"),
  title: {
    default: "MPK Development | Maxwell Kelly – Software Engineer, Web Developer & Game Developer",
    template: "%s | MPK Development",
  },
  description:
    "MPK Development is the portfolio of Maxwell Kelly, a software engineer, web developer, and game developer based in Poinciana / Kissimmee, Florida. Explore projects and professional web design services.",
  applicationName: "MPK Development",
  openGraph: {
    siteName: "MPK Development",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/MPKdevelopment.jpg", width: 1344, height: 768, alt: "MPK Development logo" }],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
