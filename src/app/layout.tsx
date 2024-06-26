import '../styles/globals.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactQueryClientProvider } from '@/lib/reactQueryProvider';
import Header from '@/components/header';
import CartContextWrapper from '@/context/cartContext';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Challenge',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartContextWrapper>
        <body className={inter.className}>
          <Header />
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
          <Footer />
        </body>
      </CartContextWrapper>
    </html>
  );
}
