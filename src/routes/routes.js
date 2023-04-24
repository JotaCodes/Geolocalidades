/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeoPage from "../pages/Geo/geo.page";
import GeoPageDetail from "../pages/GeoDetail/geoDetail.page";


export default function Router() {

  // sempre e geralmente a palavra Home tende a ser a path vazia = '/'
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GeoPage />} />
        <Route path='/geo/:longitude/:latitude' element={<GeoPageDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
