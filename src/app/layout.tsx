import type { Metadata } from "next";
import { Volkhov } from "next/font/google";
import "./globals.css";

const volkhov = Volkhov({
  variable: "--font-volkhov",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jadoo - Best Destinations Around The World",
  description:
    "Travel, enjoy and live a new and full life with Jadoo. Discover the best destinations around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${volkhov.variable} antialiased font-google-sans`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
