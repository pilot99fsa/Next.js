import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/layouts/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // HTMLでmetaタグ内に記述するのと同じ容量でSEO対策ができる
  title: 'Thread Board by NEXT.js', // Chromeの左上に表示されるタブの名前
  description: 'Next14で掲示板を作ったよ!', // Googleでググったときに表示されるページのリンク下にある説明文
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
