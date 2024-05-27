import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Wrapper({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar>{children}</Sidebar>
    </>
  );
}
