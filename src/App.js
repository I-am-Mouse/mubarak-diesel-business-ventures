
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import ServicesPage from './components/Pages/ServicesPage';
import WhyChooseUsPage from './components/Pages/WhyChooseUsPage';
import ContactUs from './components/Pages/ContactUs';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/services" Component={ServicesPage}></Route>
        <Route path="/why choose us" Component={WhyChooseUsPage}></Route>
        <Route path="/contact us" Component={ContactUs}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
