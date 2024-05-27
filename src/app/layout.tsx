import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "David Marom",
  description: "Web Developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" />
      </head>
      <body>

        <div className="page-container">{children}</div>
      </body>
    </html>
  );
}
