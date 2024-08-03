import styles from './ProductCard.module.css'
import shoe_1 from '../../assets/p1.svg'

const ProductCard = () => {
  return (
    <div className={styles.Card_Container} >
      <img src={shoe_1} alt="" />
      <p>Nike Airforce 1’ 07</p>
      <span><small>$80</small> <img src="" alt="" /></span>
        
    </div>
  )
}

export default ProductCard