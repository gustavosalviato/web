import './globals.css'

export const metadata = {
  title: 'space time',
  description: 'a time capsule',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-950 text-zinc-100'>{children}</body>
    </html>
  )
}
