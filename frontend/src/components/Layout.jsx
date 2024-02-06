import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2024</footer>
    </>
  );
};

export { Layout };
