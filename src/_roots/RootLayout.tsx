import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div>
      {/* === NAVBAR === */}
      <Navbar />
      <section>
        <Outlet />
      </section>
      {/* === FOOTER === */}
      <Footer />
    </div>
  );
};

export default RootLayout;
