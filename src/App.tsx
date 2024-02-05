import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SectionOne from "./components/section-components/SectionOne";
import SectionTwo from "./components/section-components/SectionTwo";
import Loader from "./components/loader-component/Loader";

const App = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [email, setEmail] = useState<string>("");
  const [validation, setValidation] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setValidation(false);
    }

    setEmail(inputValue);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Router>
      <main className="bg-CharcoalGrey flex justify-center items-center min-h-screen ">
        {loading && <Loader />}
        <Routes>
          <Route
            path="/"
            element={
              <SectionOne
                email={email}
                validation={validation}
                setValidation={setValidation}
                widthScreen={widthScreen}
                handleInputChange={handleInputChange}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="/thank-you"
            element={<SectionTwo email={email} setLoading={setLoading} />}
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
