import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Island Time Stays",
  description: "Yellowstone Vacation Rentals by Island Time Stays",
  openGraph: {
    title: "Island Time Stays",
    description:
      "Stay in Island Park, Idaho—just minutes from Yellowstone. Enjoy cabins with hot tubs, scenic views, and game rooms perfect for families and groups",
    url: "https://toppcreekindianapolis.com/",
    type: "website",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
