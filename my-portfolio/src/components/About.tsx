import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="dark:text-white md:pt-10 py-8 text-center bg-zinc-100 dark:bg-zinc-900 relative">
      <section
        className="flex flex-col items-center justify-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <section className="relative text-center">
          <h2 className="md:text-5xl text-4xl uppercase font-semibold py-4 relative z-[2]">
            Sobre Mim
          </h2>
          <h2
            className={` ${
              theme === "dark"
                ? "text-black border-text-light"
                : "text-white border-text-dark"
            } md:text-6xl text-5xl uppercase font-semibold py-4 absolute -top-6 md:-left-[11%] -left-[12%] z-[0] opacity-60  whitespace-nowrap`}
          >
            Sobre Mim
          </h2>
        </section>
        <img
          className="absolute top-0 right-0 md:w-[250px] md:h-[250px] w-[110px] h-[110px] text-center z-[-1] blur-3xl opacity-50 rounded-full"
          src="/utils/img/bg-gradient.webp"
          alt="bg-gradient"
        />
        <img
          className="absolute bottom-0 left-0 md:w-[250px] md:h-[250px] w-[110px] h-[110px] text-center z-[-1] blur-3xl opacity-50 rounded-full"
          src="/utils/img/bg-gradient.webp"
          alt="bg-gradient"
        />
        <section className="flex md:flex-row flex-col items-center">
          <div className="md:w-3/1 w-8/12 flex items-center justify-center">
            <img
              className="w-[300px] text-center z-10"
              src="/utils/img/about-me.png"
              alt="about-me"
            />
          </div>
          <div className="md:w-9/12 md:pt-0 pt-4 flex flex-col items-start justify-center">
            <p className="text-justify px-8 py-4">
              Atualmente sou aluno da plataforma de carreiras{" "}
              <a className="hover:text-zinc-300 duration-500 hover:underline" href="https://cursos.onebitcode.com/area/vitrine">
                <b>OneBitCode</b>
              </a>
              , onde venho estudando continuamente desde Jun/23 para desenvolver
              meus conhecimentos.
            </p>
            <p className="text-justify px-8 py-4">
              Se você estiver buscando por um desenvolvedor apaixonado por programação, comprometido, objetivo e motivado, que está sempre procurando obter mais conhecimento, garanto que posso ser a pessoa certa. Caso se interesse, é só entrar em contato comigo pelas redes abaixo, estarei ansioso e pronto para contribuir com o sucesso de sua empresa e em compartilhar meus conhecimentos, além de aprender com a equipe!
            </p>
          </div>
        </section>
        <section className="flex gap-4 mx-auto py-4 text-3xl text-center items-center justify-center">
          <a
            className="duration-500 rounded-full border-2 button-gradient p-2 hover:-translate-y-2 dark:hover:text-gray-400 hover:text-stone-500 "
            href="mailto:rodriguesyuri769@gmail.com"
            target="_blank"
          >
            <MdEmail />
          </a>
          <a
            className="duration-500 rounded-full border-2 button-gradient p-2 hover:-translate-y-2 dark:hover:text-gray-400 hover:text-stone-500 "
            href="https://web.whatsapp.com/send?phone=31987336364"
            target="_blank"
          >
            <BsWhatsapp />
          </a>
          <a
            className="duration-500 rounded-full border-2 button-gradient p-2 hover:-translate-y-2 dark:hover:text-gray-400 hover:text-stone-500 "
            href="https://www.instagram.com/yuri_rzz7/"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </section>
      </section>
    </section>
  );
};

export default About;
