import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { NotFoundPage } from "./NotFoundPage";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
