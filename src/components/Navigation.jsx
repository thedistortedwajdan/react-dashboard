import Settings from "../pages/Settings";
import Home from "../pages/Home";
import About from "../pages/About";
// import { BrowserRouter as Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Sidebar>
                <Home />
              </Sidebar>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <Sidebar>
                <About />
              </Sidebar>
            }
          />
          <Route
            exact
            path="/Settings"
            element={
              <Sidebar>
                <Settings />
              </Sidebar>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
