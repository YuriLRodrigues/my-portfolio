import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect, useRef } from "react";
import { Typewriter, Cursor } from 'react-simple-typewriter'

const InitialDisplay = () => {
  
  const { theme } = useContext(ThemeContext);
  const root = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  
  const handleBg = (e: MouseEvent) => {
    if (bg.current !== null){
      bg.current.style.left = `${e.clientX}px`
      bg.current.style.top = `${e.clientY}px`
    }
  }

  useEffect(() => {
    root.current?.addEventListener("mousemove", handleBg)
  }, [])

  return (
    <main className="overflow-x-hidden">
      <section
        className={` ${
          theme === "dark" ? "hexagon-img-dark" : "hexagon-img-light"
        } w-full overflow-hidden md:py-52 py-32 flex flex-col items-center justify-center z-[-1] h-screen dark:text-white text-center gap-3 duration-500`}
        ref={root}
      >
        <section data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-4xl font-semibold">Olá, eu sou</h2>
          <h1 className="font-semibold text-4xl">&lt; <Typewriter
            words={['Yuri L. Rodrigues']}
            loop={3}
            cursor
            cursorStyle=''
            typeSpeed={62}
            deleteSpeed={30}
            delaySpeed={800}
          /> /&gt;</h1>
          <h2 className="font-semibold text-4xl">
            Desenvolvedor{" "}
            <span className="gradientText">
              <b><Typewriter
            words={['FrontEnd']}
            loop={3}
            typeSpeed={90}
            deleteSpeed={80}
            delaySpeed={1000}
          /></b>
            </span>
            <Cursor />
          </h2>
          <section className="flex gap-6 items-center justify-center py-8">
            <a
              href="/utils/curriculo/Currículo-Yuri.pdf" target="_blank"
              className="hover:-translate-y-2 duration-500 button-gradient p-2 rounded-lg dark:text-white font-medium text-lg flex gap-2 items-center"
            >
              {" "}
              <HiOutlineNewspaper /> Baixar CV
            </a>
            <a
              className="dark:text-white text-5xl duration-500 hover:-translate-y-2 dark:hover:text-gray-400 hover:text-stone-600"
              href="https://www.linkedin.com/in/yuri-leite-rodrigues-a28920238/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="dark:text-white text-5xl duration-500 hover:-translate-y-2 dark:hover:text-gray-400 hover:text-stone-600"
              href="https://github.com/YuriLRodrigues"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </section>
        </section>
        <div className="bg" ref={bg}></div>
      </section>
    </main>
  );
};

export default InitialDisplay;
