import React, { useEffect, useState } from "react";
import SectionOne from "./components/SectionOne";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigation,
} from "react-router-dom";
import SectionTwo from "./components/SectionTwo";
// import SectionTwo from "./components/SectionTwo";
//import Loader from "./components/Loader";

const App = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [email, setEmail] = useState<string>("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigation();
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setValidation(false);
    }

    setEmail(inputValue);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateEmail()) {
      navigate("/thank-you");
    } else {
      setValidation(true);
    }
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
    <main className="bg-CharcoalGrey flex justify-center items-center min-h-screen ">
      {/* <main className="bg-CharcoalGrey min-h-screen flex justify-center items-center"> */}
      {/* <Loader /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <SectionOne
                handleSubmit={handleSubmit}
                validation={validation}
                widthScreen={widthScreen}
                handleInputChange={handleInputChange}
              />
            }
          />
          <Route path="/thank-you" element={<SectionTwo email={email} />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
