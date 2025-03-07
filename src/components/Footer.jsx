/**
 * @copyright 2025 Mihir kumar Meher
 * @license Apache-2.0
 */

/**
 * Components
 */

import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "Github",
    href: "https://github.com/mihirkumarmeher-123",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mihir-kumar-meher",
  },
  {
    label: "Twitter",
    href: "https://x.com/mihir50911?t=whDNZ5_LztMhzpTEnjul2g&s=08",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mmihir9?utm_source=qr&igsh=MXJzdXluc3Qzbndp",
  },
];

function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up font-bold">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up font-bold">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img
              src="/images/logo.jpg"
              width={30}
              height={25}
              alt="Logo"
              className="rounded-lg"
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">mihirkumarmeher</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
