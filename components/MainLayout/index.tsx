import Link from 'next/link'
import Menu from '../Menu'

const MainLayout = ({ children }) => {
  return (
    <>
      <Menu/>
      <main>
        {children}
      </main>
    </>
  )
}

export default MainLayout;
