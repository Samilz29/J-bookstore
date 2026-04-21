    export const metadata = {
  title: 'J Bookstore',
  description: 'Trackeo de libros para Sami',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}