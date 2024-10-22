import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; 
import type { Metadata } from "next";  
import localFont from "next/font/local";  
import { Poppins } from '@next/font/google';  
import "./globals.css";  


const geistSans = localFont({  
  src: "./fonts/GeistVF.woff",  
  variable: "--font-geist-sans",  
  weight: "100 900",  
});  

const geistMono = localFont({  
  src: "./fonts/GeistMonoVF.woff",  
  variable: "--font-geist-mono",  
  weight: "100 900",  
});  

  
const poppins = Poppins({  
  weight: ['400', '700'],  
  subsets: ['latin'],  
  display: 'swap',  
});  

  
export const metadata: Metadata = {  
  title: "Noor's Web",  
  description: "first website with next js, typescript and tailwindcss",  
};  


export default function RootLayout({  
  children,  
}: Readonly<{  
  children: React.ReactNode;  
}>) {  
  return (  
    <html lang="en">  
      <head>  
        <link   
          rel="stylesheet"   
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"   
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMdY9F2Rn3U8a3hFJ2G1c2Y3Z5RlRrWis8c5Wg"   
          crossOrigin="anonymous"   
        />  
      </head>  
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}>   
        <Navbar />   
        {children}   
        <Footer /> 
      </body>  
    </html>  
  );  
}