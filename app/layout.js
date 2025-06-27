import './globals.css'

export const metadata = { 
  title: '1:1 Online Tuitions | Sri Academics',
  description: 'Book a free tutoring demo at Sri Academics and unlock your academic potential with expert guidance! Personalized 1:1 online tuition for CBSE, ICSE, IGCSE, IB, JEE, NEET, and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 