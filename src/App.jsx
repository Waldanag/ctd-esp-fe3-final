
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Layout from "./Components/Layout";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>

            <Route element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="/Favs" element={<Favs />} />
              <Route path="/Contact" element={<Contact />} />
            </Route>
              <Route path="*" element={<h1>404 not found</h1>} />

          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
