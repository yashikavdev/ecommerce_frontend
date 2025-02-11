'use client';

import { Provider } from 'react-redux';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-zinc-200'>
          <main>{children}</main>
      </body>
    </html>
  );
}
