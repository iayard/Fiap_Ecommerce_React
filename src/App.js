import TopBar from "./components/TopBar";
import { GlobalStyle } from "./GlobalStyles";
import { CartProvider } from "./providers/cart";
import Routes from "./routes";

function App() {

  let title = "My Store";

  return (
    <>
      <GlobalStyle />
      <CartProvider>
        <Routes />
      </CartProvider>
    </>
  );
}

export default App;
