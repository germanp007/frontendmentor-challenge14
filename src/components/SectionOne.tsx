import React from "react";
import IconList from "./IconList";
import SignupMobile from "./SignupMobile";
import SingupDesktop from "./SignupDesktop";
import ButtonComponent from "./ButtonComponent";

type SectionProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  validation: boolean;
  widthScreen: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SectionOne: React.FC<SectionProps> = ({
  handleSubmit,
  validation,
  widthScreen,
  handleInputChange,
}) => {
  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    " And much more!",
  ];

  return (
    <section className="flex flex-col gap-8 w-[375px] pb-8 bg-white lg:w-[950px] lg:flex-row-reverse lg:h-[650px] lg:rounded-3xl lg:items-center lg:pb-0">
      {widthScreen < 1024 ? (
        <div>
          <SignupMobile width={375} />
        </div>
      ) : (
        <div className="md:flex-1 h-[593px]">
          <SingupDesktop width="100%" height="100%" />
        </div>
      )}
      <article className="text-DarkSlateGrey px-6 flex flex-col gap-6 lg:flex-1 ">
        <h1 className="font-bold text-4xl ">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div>
          <ul className="flex flex-col gap-4 text-base">
            {list.map((ele, index) => {
              return (
                <li key={index} className="flex items-start gap-3">
                  <span>
                    <IconList />
                  </span>{" "}
                  {ele}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col ">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <strong className="text-xs mb-3">Email address</strong>
              {validation && (
                <strong className="text-xs mb-3 text-Tomato">
                  Valid email required
                </strong>
              )}
            </div>

            <input
              type="string"
              name="email"
              placeholder="email@company.com"
              className={`w-full h-14 pl-6 border rounded-md mb-6 focus:outline-none ${
                validation ? "border-Tomato" : ""
              } ${validation ? "text-Tomato" : ""} ${
                validation ? "bg-red-100" : ""
              }`}
              onChange={handleInputChange}
            />

            <ButtonComponent>Subscribe to monthly newsletter</ButtonComponent>
          </form>
        </div>
      </article>
    </section>
  );
};

export default SectionOne;
