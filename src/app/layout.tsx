import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import type { TLayout } from "@/lib/types";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: TLayout) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Navbar />
            <main>
              {children}
            </main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
