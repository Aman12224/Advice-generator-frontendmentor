import moblieImg from "../assets/images/pattern-divider-mobile.svg";
import desktopImg from "../assets/images/pattern-divider-desktop.svg";
import dice from "../assets/images/icon-dice.svg";
import { useEffect, useState } from "react";
const url = `https://api.adviceslip.com/advice`;

const Body = () => {
  const [data, setData] = useState({ id: "", advice: "" });
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData({ id: data.slip.id, advice: data.slip.advice });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <section className="relative bg-neutral-Dark-Grayish-Blue w-[22rem] min-h-[320px] rounded-2xl text-parimary-Light-Cyan px-11 py-9 flex flex-col gap-6 sm:w-[33rem]">
        <p className="uppercase text-primary-Neon-Green font-medium text-[.8rem] tracking-[.2rem] text-center ">
          Advice #{data.id}
        </p>
        <h1 className="text-3xl text-center font-semibold md:text-4xl md:mb-4">
          "{data.advice}"
        </h1>
        <picture className="h-8 w-[100%]  object-contain bg-center">
          <source media="(min-width:640px)" srcSet={desktopImg} />
          <img src={moblieImg} alt="img" />
        </picture>
        <button
          className="absolute bottom-[-1.7rem] left-[50%] translate-x-[-50%] rounded-full w-16 h-16 bg-primary-Neon-Green grid place-content-center sm:hover:shadow-neon-shadow transition-shadow ease-in-out duration-300"
          onClick={() => {
            fetchData();
          }}
        >
          <img src={dice} alt="d" />
        </button>
      </section>
    </main>
  );
};

export default Body;
