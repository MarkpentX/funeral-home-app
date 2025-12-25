import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MonumentsPage from "./pages/MonumentsPage.jsx";
import ModalWindow from "./components/ModalWindow.jsx";


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/gallery'} element={<GalleryPage/>}/>
            <Route path={'/contact'} element={<ContactPage/>}/>
            <Route path={'/monuments'} element={<MonumentsPage/>}/>
            <Route path={'/test'} element={<ModalWindow/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
