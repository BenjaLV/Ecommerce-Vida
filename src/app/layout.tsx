import type { Metadata } from 'next';
import { inter } from '@/config/fonts';

import './globals.css';


export const metadata: Metadata = {
  title: '+Vida',
  description: 'Una tienda virtual de productos organicos y saludables, panes elaborados con masa madre',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
