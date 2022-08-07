import ProductCard from "./ProductCard";

function Shop() {
  return (
    <>
      <h3 style={{ textAlign: "center", margin: "2rem 0 0" }}>Shop</h3>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProductCard />
      </div>
    </>
  );
}

export default Shop;
