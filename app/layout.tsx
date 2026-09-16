import type { Metadata } from "next";
import { Stack_Sans_Headline } from "next/font/google";
import "./globals.css";

const stackSans = Stack_Sans_Headline({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export const metadata: Metadata = {
  title: "Games",
  description: "Daily puzzle games by Adam White.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={stackSans.className}>
      <body>{children}</body>
    </html>
  );
}
