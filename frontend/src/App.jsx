import { Routes, Route, Link } from "react-router-dom";


import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFoundPage } from './pages/NotFoundPage';
import { SinglePage } from './pages/SinglePage';
import { Posts } from './pages/Posts';

import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts" element={<Posts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
