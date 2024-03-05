import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import { AboutUs, ContactUs, Home, OurServices, Vacancy } from "./_roots/pages";
import RootLayout from "./_roots/RootLayout";
const App = () => {
  return (
    <div className="">
      <Routes>
        {/* === PRIVATE ROUTES FOR THE ADMIN */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
        </Route>

        {/* === PUBLIC ROUTE */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
