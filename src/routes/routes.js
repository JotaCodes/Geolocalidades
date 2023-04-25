/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeoPage from "../pages/Geo/geo.page";
import GeoPageDetail from "../pages/GeoDetail/geoDetail.page";


export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GeoPage />} />
        <Route path='/geo/:longitude/:latitude' element={<GeoPageDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
