import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import {Navbar} from "@/components/navbar/navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background place-items-center text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container grid grid-cols-12 h-full min-h-screen">
            <div className="col-span-12"><Navbar /></div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
