function ProductAlert({ product, handler }) {
  if (product.price <= 700) return null;

  return <button onClick={handler}>Notify Me</button>;
}

export default ProductAlert;
