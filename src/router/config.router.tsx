import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollTop";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/Product";
import Partners from "../pages/Partners";
import Success from "../pages/Success";
import Contact from "../pages/Contact";

export const Router = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/nosotros" element={<About />} />
				<Route path="/productos-servicios" element={<Products />} />
				<Route path="/industrias" element={<ProductDetail />} />
				<Route path="/socios" element={<Partners />} />
				<Route path="/como-trabajamos" element={<Success />} />
				<Route path="/contacto" element={<Contact />} />
			</Routes>
		</>
	);
}
