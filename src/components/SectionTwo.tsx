import React from "react";
import ButtonComponent from "./ButtonComponent";
import IconSuccess from "./IconSuccess";
import { useNavigate } from "react-router-dom";

type SectionProps = {
  email: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const SectionTwo: React.FC<SectionProps> = ({ email, setLoading }) => {
  const navigate = useNavigate();

  const handleHome = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigate("/");
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section className="bg-white w-[375px] h-[100vh] flex flex-col justify-evenly p-6 md:w-[450px] md:h-[430px] md:rounded-3xl md:p-10">
      <article className="text-DarkSlateGrey h-full flex flex-col justify-between md:h-[400px] md:justify-between">
        <div className="h-[60%] grid place-content-end gap-10 md:gap-4 md:place-content-start">
          <IconSuccess />
          <h1 className="font-bold text-4xl">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>{" "}
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <div>
          <form onSubmit={handleHome}>
            <ButtonComponent>Dismiss message</ButtonComponent>
          </form>
        </div>
      </article>
    </section>
  );
};

export default SectionTwo;
