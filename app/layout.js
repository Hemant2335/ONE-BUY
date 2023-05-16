import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppContext } from './Context/User';

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'ONE-STORE',
  description: 'Online Shopping Platoform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContext>
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
      </AppContext>
    </html>
  )
}
