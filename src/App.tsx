import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MagnesiumDeodorant from './pages/MagnesiumDeodorant';
import BakingSodaFree from './pages/BakingSodaFree';
import SensitiveSkin from './pages/SensitiveSkin';
import Formula from './pages/Formula';
import Faq from './pages/Faq';
import About from './pages/About';
import Journal from './pages/Journal';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="magnesium-deodorant" element={<MagnesiumDeodorant />} />
          <Route path="baking-soda-free-deodorant" element={<BakingSodaFree />} />
          <Route path="sensitive-skin-deodorant" element={<SensitiveSkin />} />
          <Route path="formula" element={<Formula />} />
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<About />} />
          <Route path="journal" element={<Journal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
