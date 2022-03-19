import styles from '../styles/Layout.module.css'
import Meta from './Meta'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
    <Meta />
    <Nav />
    <div className={styles.container}>
        <main className={styles.main}>
          <Header />
         {children}
        </main>
        <Footer />
    </div>
    </>
  )
}

export default Layout