import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./scss/styles.css";

// My Pages
import Home from './pages/HomePage';
import ProductsPage from './pages/ProductPage';
import Contact from './pages/ContactPage';
import Requests from './pages/RequestPage';


const queryClient = new QueryClient();



function App() {

  return (
    <BrowserRouter>
      <div>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<ProductsPage />} />
            <Route path="/Requests" element={<Requests />} />
            <Route path="/Contact" element={<Contact />} />
            {/* <Route path="*" element={<NotFound />} />needed for Front-End*/}
          </Routes>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;