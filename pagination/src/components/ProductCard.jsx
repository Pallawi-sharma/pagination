const ProductCard = ({img, title}) => {
  return (
    <div className="product-card">
      <img src={img} alt={title}></img>
      <div>{title}</div>
    </div>
  )
}

export default ProductCard;