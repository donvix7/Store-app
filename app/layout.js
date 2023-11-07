import Nav from '@/components/Nav'
import { Inter } from 'next/font/google'
import "@styles/style.css"
import "@styles/mystyle.css"
import Provider from '@components/Provider'
import Footer from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Store',
  description: 'Browse and Shop fashion trends',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className='gradientbg'>
              <Nav/>

              {children}
              <Footer/>
            </main>
        </Provider>
        
      </body>
    </html>
  )
}
