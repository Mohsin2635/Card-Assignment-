import ShopingCaard from "./components/ShopingCaard";
import product from "../../public/data";

export default function Home() {
  return (
    <div className="py-5 space-y-10 sm:space-y-0 gap-5 lg:gap-0 place-items-center sm:flex flex-wrap sm:justify-around">
      {product.map(product => <ShopingCaard key={product.id} image={product.image} name={product.name} price={product.price}/>)}
    </div>
  );
};