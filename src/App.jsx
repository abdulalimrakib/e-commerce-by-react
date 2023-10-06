import Shop from "./components/Shop";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Review from "./components/Review";
import Inventory from "./components/Inventory";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/order-review" element={<Review />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
