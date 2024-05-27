import Settings from "../pages/Settings";
import Home from "../pages/Home";
import About from "../pages/About";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./Wrapper";

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Wrapper>
                <Home />
              </Wrapper>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <Wrapper>
                <About />
              </Wrapper>
            }
          />
          <Route
            exact
            path="/Settings"
            element={
              <Wrapper>
                <Settings />
              </Wrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
