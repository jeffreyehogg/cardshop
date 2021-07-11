import { Spinner } from 'react-bootstrap'
import styles from '../styles/Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Spinner
        animation="border"
        role="status"
        style={{
          height: '100px',
          width: '100px',
          margin: 'auto',
          display: 'block',
        }}
      />
      <div className={styles.text}>Loading...</div>
    </div>
  )
}

export default Loader
