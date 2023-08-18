
import styles from './page.module.css'
import SignUp from './signup'
import './globals.css'
export default function Home() {
  return (
    <main className={styles.main}>
      <SignUp />
    </main>
  )
}
