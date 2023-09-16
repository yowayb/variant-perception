import { Metadata } from 'next'
import Nav from './nav'
import Sidebar from './sidebar'
import '../styles/global.css';

export const metadata: Metadata = {
  title: 'Variant Perception',
  description: 'Research and insights for sophisticated investors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800 dark:text-slate-50">
        <div className="antialiased bg-slate-50 dark:bg-slate-900">
          <Nav />
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
