import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepin - Premium Enterprise Tools for Finance and Research",
  description: "Two independent products built for clarity, rigor, and long-term thinking. Deepin Finance for professional financial analysis and Deepin Research for methodology-driven research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
