import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/Product";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/nosotros" element={<Home />} />
			<Route path="/productos-servicios" element={<Products />} />
			<Route path="/producto-detalle" element={<ProductDetail />} />
			<Route path="/industrias" element={<Home />} />
			<Route path="/socios" element={<Home />} />
			<Route path="/como-trabajamos" element={<Home />} />
			<Route path="/contacto" element={<Home />} />
		</Routes>
	);
}
