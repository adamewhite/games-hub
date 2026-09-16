import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Games",
  description: "Daily puzzle games by Adam White.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
