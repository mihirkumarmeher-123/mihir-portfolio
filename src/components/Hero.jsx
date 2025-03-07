/**
 * @copyright 2025 Mihir kumar Meher
 * @license Apache-2.0
 */

/**
 *  Components
*/

import { ButtonPrimary,ButtonOutline } from "./Button";

function Hero() {
  return (
    <section id="home" className="pt-12 lg:pt-16">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/logo.jpg"
                width={40}
                height={40}
                alt="Mihir"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for Work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3">
        <ButtonPrimary
          href="https://drive.google.com/file/d/1ACBhsR9MDF8M5A78aZ8TpNuQ1xBpouf8/view?usp=drive_link" 
          label="Download CV"
          icon="download"
          /> 
          <ButtonOutline
          href="#about"
          label="Scroll down"
          icon="arrow_downward"
          />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-[25rem] h-[25rem] bg-linear-65 from-purple-500 to-pink-500 ml-auto rounded-full overflow-hidden">
            <img
              src="/images/mihir.png"
              width={300}
              height={300}
              alt="Mihir"
              className="img-cover p-1 rounded-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
