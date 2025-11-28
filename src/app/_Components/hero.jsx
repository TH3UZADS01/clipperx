import bg from "../../../public/Bg.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="text-gray-200 relative overflow-hidden h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Bg.jpg')" }}
    >
      <div>
        <article>
          <div>
            <h1
              className="
  mix-blend-color-dodge 
  mt-10 font-extrabold 
  text-6xl        /* celular */
  sm:text-7xl     /* telas pequenas */
  md:text-8xl     /* tablets */
  lg:text-[10rem] /* notebook */
  xl:text-[12rem] /* monitor grande */
  2xl:text-[14rem] /* ultrawide */
  leading-none text-center
"
            >
              ClipperX
            </h1>

            <p className="mt-20 text-base sm:text-lg lg:text-2xl font-sans text-center">
              A plataforma moderna para barbearias e clientes que buscam
              praticidade e excelência.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
