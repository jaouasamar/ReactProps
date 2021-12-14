import "./App.css";
import Footer from "./Components/Footer/Footer";

import ProductList from "./Components/ProductList/ProductList";

function App() {
  const products = [
    {
      imgSrc:
        "https://th.bing.com/th/id/R.b38f3ea1f155faaef14f344bf74b8b15?rik=ctrnYHfKX3k6zw&pid=ImgRaw&r=0",
      name: "AirPods",
      price: "6,99 $",
    },
    {
      imgSrc:
        "https://th.bing.com/th/id/R.62443f7dda859823cf5b5772396bbf09?rik=HzaWElpDeJ22fg&pid=ImgRaw&r=0",
      name: "Smart watch",
      price: "8,64 $",
    },
    {
      imgSrc:
        "https://saligon.com/wp-content/uploads/2020/09/Iphone-11-pro-max-grey-2.jpg",
      name: "Iphone 11 ",
      price: "150 $",
    },
  ];
  const handleClick = (productName) => {
    alert(`this product is ${productName}`);
  };

  return (
    <div className="App">
      <h1>Workshop React props</h1>
      <ProductList produits={products} handleClick={handleClick} />
      <Footer>
        <h1>this is props worshop</h1>
        <img
          src="https://i.pinimg.com/originals/25/16/48/251648eb9539775d46c1b8105e98a5df.jpg"
          alt=""
          width="150"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A iusto
          distinctio numquam sunt suscipit, nihil quasi possimus accusantium
          facilis magnam accusamus aliquid cum, itaque ipsa labore, praesentium
          aut nesciunt alias?
        </p>
      </Footer>
    </div>
  );
}

export default App;
