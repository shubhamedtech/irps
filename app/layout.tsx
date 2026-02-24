
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { getSiteData } from "@/lib/data";

const outfit = Outfit({ subsets: ["latin"] });

export async function generateMetadata() {
  const data = await getSiteData();
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      images: data.seo.ogImage ? [{ url: data.seo.ogImage }] : [],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
