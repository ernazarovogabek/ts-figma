import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Category from "./components/Category";
import Mashina from "./components/Mashina";
import Qurilish from "./components/Qurilish";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Category />} />
        <Route path="mashina" element={<Mashina />} />
        <Route path="qurilish" element={<Qurilish />} />
       
      </Route>
    </Routes>
  );
};

export default App;
