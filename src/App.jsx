
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favs from "./Pages/Favs";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import Layout from "./Components/Layout/Layout";


function App() {
  return (
      <div className="App">
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="/Favs" element={<Favs />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Details/:id" element={<Detail />} />
            </Route>
              <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
      </div>
  );
}
export default App;
