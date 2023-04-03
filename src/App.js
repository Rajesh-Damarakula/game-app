import Cart from "./components/cart/cart";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Main from "./components/main/main";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
