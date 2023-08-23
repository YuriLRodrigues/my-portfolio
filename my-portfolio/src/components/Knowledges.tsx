import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { techs } from "../Projects/techs";
import Tilt from "react-parallax-tilt";

const Knowledges = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="knowledges"
      className="py-20 min-h-[80vh] pb-20 dark:bg-neutral-900 overflow-hidden relative flex flex-col items-center justify-center mx-auto"
    >
      <section
        className="md:absolute text-center md:top-20"
        data-aos="fade-down"
        data-aos-duration="1300"
      >
        <h2 className="md:text-5xl text-3xl uppercase font-semibold py-4 dark:text-white relative z-[2]">
          Conhecimentos
        </h2>
        <h2
          className={` ${
            theme === "dark"
              ? "text-black border-text-light"
              : "text-white border-text-dark"
          } md:text-6xl text-4xl uppercase font-semibold py-4 absolute md:-top-6 -top-4 md:-left-[11%] -left-[10%] z-[0] opacity-60  whitespace-nowrap`}
        >
          Conhecimentos
        </h2>
      </section>
      <section
        style={{ perspective: 2000 }}
        className="grid grid-cols-auto-fit-100 pt-10 gap-y-4 md:gap-4 w-11/12  md:px-4"
        data-aos="fade-right"
        data-aos-duration="1300"
      >
        {techs.map((tech, index) => (
          <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article
              className="group duration-500 hover:shadow-xl dark:hover:shadow-zinc-800 dark:hover:shadow-lg hover:scale-105 bg-white mx-auto my-0 dark:bg-zinc-800 rounded-xl flex flex-col hover:-translate-y-2 justify-center text-center items-center md:w-24 w-24 h-24 p:14 md:h-28 overflow-hidden"
              key={index}
            >
              <i
                className={`${tech.icon} group-hover:translate-y-[-10%] group-hover:scale-110 duration-500 gradientText text-4xl md:text-6xl`}
              ></i>
              <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 gradientText font-semibold text-sm">
                {tech.name}
              </p>
            </article>
          </Tilt>
        ))}
      </section>
    </section>
  );
};

export default Knowledges;
