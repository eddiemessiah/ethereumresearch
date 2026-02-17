import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "ETH Research Village | Lagos 2026",
  description: "A 2-week Ethereum research pop-up city in Lagos, Nigeria. Bridging the gap from consumers to core protocol contributors at Africa's first dedicated Ethereum hub.",
  keywords: ["Ethereum", "Research", "Lagos", "Africa", "Blockchain", "Web3", "Crypto"],
  icons: {
    icon: "/ethereum-icon.svg",
  },
  openGraph: {
    title: "ETH Research Village | Lagos 2026",
    description: "Scaling the Infinite Garden in Africa - A 2-week Ethereum research pop-up city.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/ethereum-icon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-sans infinite-garden-gradient dark:bg-[#0a0a0c] text-slate-900 dark:text-white selection:bg-[#13ec5b] selection:text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

