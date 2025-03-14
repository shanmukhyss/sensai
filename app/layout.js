import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] }); // ✅ Call the font function at the top

export const metadata = {
  title: "Sensai",
  description: "The one and only AI Career Coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
    
  
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}> {/* ✅ Use the variable here */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />

            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">{children}</main>
              <Toaster richColors/>
              <Footer/>

            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
