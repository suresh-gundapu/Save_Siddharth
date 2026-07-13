import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Save Siddharth",
  description: "Crowdfunding campaign for Siddharth's medical emergency.",
};

// మొబైల్ లో జూమ్/స్కేల్ ఇష్యూస్ రాకుండా ఇది సెట్ చేస్తుంది
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="te" translate="no" className="notranslate">
      {/* ఇక్కడే అసలు మ్యాజిక్: overflow-x-hidden వేశాం! */}
      <body className="bg-gray-50 text-gray-900 antialiased overflow-x-hidden w-full relative">
        {children}
      </body>
    </html>
  );
}