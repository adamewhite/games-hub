import type { Metadata } from "next";
import { PrefetchCrossZoneLinks } from "@vercel/microfrontends/next/client";
import "./globals.css";

export const metadata: Metadata = {
  title: "Games",
  description: "Daily puzzle games by Adam White.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PrefetchCrossZoneLinks />
      </body>
    </html>
  );
}
