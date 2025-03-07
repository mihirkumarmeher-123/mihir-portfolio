/**
 * @copyright 2025 Mihir kumar Meher
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Full Stack Projects done",
    number: 2,
  },
  {
    label: "Minor Projects done",
    number: 10,
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Mihir Kumar Meher, a 3rd-year B.Tech CSE student. 
            Passionate about full-stack web development, problem-solving, and database management. Skilled in Java, C, JavaScript, React.js, MongoDb, Node.js, Express.js, SQL and No-SQL. Always eager to learn and build innovative solutions.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-yellow-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img src="/images/mihir.png"
             alt="Logo"
             width={30}
             height={30}
             className="ml-auto md:w-[40px] md:h-[40px] rounded-full"
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
