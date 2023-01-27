import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/HomeTin68/Home";
import Navbar from "pages/Navbar/Navbar";
import Footer from "pages/Footer";
import Back2Top from "pages/Back2Top/Back2Top";
import MainTemplate from "template/MainTemplate";
import Guide2InOut from "pages/GuideToInOut/Guide2InOut";
import Review from "pages/Review/Review";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />

            <Route path="/huong-dan-nap-rut" element={<Guide2InOut />} />
            <Route path="/review" element={<Review />} />

            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
