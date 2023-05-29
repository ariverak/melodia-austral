import React, { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'



const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {/* xl */}
      <main className='mx-auto max-w-screen-lg p-4'>{children}</main>

      <Footer />

    </div>
  )
}

export default Layout
