import './globals.css'

export const metadata = {
  title: 'Sri Academics - 1:1 Online Tuitions',
  description: 'Book a free tutoring demo at Sri Academics and unlock your academic potential with expert guidance!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 