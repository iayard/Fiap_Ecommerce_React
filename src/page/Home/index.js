import { Link } from "react-router-dom";
import ProductAlert from "../../components/ProductAlert";
import { products } from "../../products";

function Home() {
  const handleShare = (id) => {
    alert(`O produto ${id} foi compartilhado`);
  };

  const handleNotify = () => {
    alert("Você será notificado quando este produto for vendido");
  };

  return (
    <>
      <h1>Product List</h1>

      {products.map((product) => (
        <div
          key={product.id}
          style={{ display: "flex", flexDirection: "column"}}
        >
          <h3>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>

          {product.description && <p>Description: {product.description}</p>}

          <button onClick={() => handleShare(product.id)}>Share</button>

          <ProductAlert product={product} handler={handleNotify} />
        </div>
      ))}
    </>
  );
}

export default Home;
