import styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>David Samuel</h3>
      <button className={styles.btn}>Click</button>
    </div>
  )
}

export default Header
