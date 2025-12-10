export const metadata = {
  title: 'Next.js App',
  description: 'Application Next.js minimale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

