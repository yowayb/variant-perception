import { Metadata } from 'next'
import '../styles/global.css';

export const metadata: Metadata = {
  title: 'Variant Perception',
  description: 'Research and insights for sophisticated investors',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800 dark:text-slate-50">{children}</body>
    </html>
  )
}
