import Image from "next/legacy/image";
import { FaHtml5, FaNodeJs, FaAngleRight, FaGithub, FaLaravel } from "react-icons/fa";

export default function Projects() {
    return (
      <>
        {/* Projects Starts */}

        <div className="px-6 pt-28">
          <section id="projects">
            <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
              Some of My Projects
            </h1>
            <div className="flex justify-center">
              <span
                className="bg-[#6C63FF] w-[150px] h-[5px]"
                data-aos="fade-up"
                data-aos-delay="400"
              ></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
              <div className="flex justify-center">
                <a
                  className="group hover:scale-110 hover:rotate-6 transition delay-75"
                  href="https://github.com/JastinXyz/data-siswa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card max-w-md bg-base-100 shadow-xl image-full"
                    data-aos="fade-up"
                  >
                    <figure>
                      <Image
                        src="/img/projects/siswa-crud.webp"
                        alt="Siswa CRUD"
                        layout="fill"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        <FaLaravel className="group-hover:fill-[#FF2D20] transition ease-in-out delay-150" />
                        {` Data Siswa`}
                      </h2>
                      <p>{`Sebuah project Laravel pertama saya yang menerapkan sistem CRUD di dalamnya.`}</p>
                    </div>
                  </div>
                </a>
              </div>
              <div></div>
              <div></div>
              <div className="flex justify-center">
                <a
                  className="group hover:scale-110 hover:-rotate-6 transition delay-75"
                  href="https://github.com/JastinXyz/discord-bot-landing-page-web/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card max-w-md bg-base-100 shadow-xl image-full"
                    data-aos="fade-up"
                  >
                    <figure>
                      <Image
                        src="/img/projects/dcweb.webp"
                        alt="dcweb"
                        width={500}
                        height={230}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        <FaHtml5 className="group-hover:fill-[#E96228] transition ease-in-out delay-150" />{" "}
                        Discord Bot Landing Page Template
                      </h2>
                      <p>{`A landing page source code for the Discord bot (but you can use it for any kind of landing page)`}</p>
                    </div>
                  </div>
                </a>
              </div>
              <div></div>
              <div></div>
              <div className="flex justify-center">
                <a
                  className="group hover:scale-110 hover:rotate-6 transition delay-75"
                  href="https://github.com/JastinXyz/simple-rps/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card max-w-md bg-base-100 shadow-xl image-full"
                    data-aos="fade-up"
                  >
                    <figure>
                      <Image
                        src="/img/projects/rps.webp"
                        alt="Simple RPS"
                        layout="fill"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        <FaHtml5 className="group-hover:fill-[#E96228] transition ease-in-out delay-150" />
                        {` Simple RPS`}
                      </h2>
                      <p>{`A website-based Rock Paper Scissors game with a simple design.`}</p>
                    </div>
                  </div>
                </a>
              </div>
              <div></div>
              <div></div>
              <div className="flex justify-center">
                <a
                  className="group hover:scale-110 hover:-rotate-6 transition delay-75"
                  href="https://github.com/JastinXyz/whatscode.js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card max-w-md bg-base-100 shadow-xl image-full"
                    data-aos="fade-up"
                  >
                    <figure>
                      <Image
                        src="/img/projects/wcode.webp"
                        alt="whatscode logo"
                        layout="fill"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        <FaNodeJs className="group-hover:fill-[#689F63] transition ease-in-out delay-150" />
                        {` Whatscode.js`}
                      </h2>
                      <p>
                        whatscode.js is a package to create Whatsapp bots easily
                        and quickly, even coding experience is not really
                        needed...{" "}
                        <span className="text-error font-bold">
                          [NO LONGER MAINTAINED]
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div></div>
              <div></div>
              <div className="flex justify-center">
                <a
                  className="group hover:scale-110 hover:rotate-6 transition delay-75"
                  href="https://github.com/JastinXyz/gempa-bot/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card max-w-md bg-base-100 shadow-xl image-full"
                    data-aos="fade-up"
                  >
                    <figure>
                      <Image
                        src="/img/projects/gempabot.webp"
                        alt="Gempa Bot"
                        width={448}
                        height={148}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        <FaNodeJs className="group-hover:fill-[#689F63] transition ease-in-out delay-150" />
                        Gempa Bot
                      </h2>
                      <p>{`A Discord Bot to detect the latest earthquake in Indonesia.`}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="text-center mt-20">
              <a
                className="btn btn-wide"
                href="https://github.com/JastinXyz?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 w-5 h-5" />
                View all my Porjects. <FaAngleRight className="ml-2" />
              </a>
            </div>
          </section>
        </div>

        {/* Projects Ends */}
      </>
    );
}