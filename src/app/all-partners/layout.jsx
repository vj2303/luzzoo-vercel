
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL('https://www.luzo.app'),

    title: 'All Salons | LUZO',
    description: 'All Salons | LUZO',
}

export default function AllSalonsLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}