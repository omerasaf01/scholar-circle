import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import {Navbar} from "@/components/navbar/navbar";
import {Toaster} from "@/components/ui/sonner";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ScholarCircle - Turkish Student Community",
  description: "ScholarCircle is a Turkish student community, that aims students being successful without any coach programs",
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
          <Toaster />
          <div className="w-full border-b border-gray-400">
            <div className="container">
              <Navbar />
            </div>
          </div>
          <main className="container h-full min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
