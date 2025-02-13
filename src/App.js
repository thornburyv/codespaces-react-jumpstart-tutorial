import { Route, Routes } from "react-router-dom";

import ImageGallery from "./components/ImageGallery";
import Layout from "./components/Layout";

export default function App() {
  return (
    <main className="text-gray-400 bg-teal-700 body-font">
    <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="images/:id" element={<ImageGallery />} />
    </Routes>
    
    </main>
  );
}