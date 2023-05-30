import Image from "next/legacy/image";
import { FaHtml5, FaNodeJs, FaAngleRight, FaGithub, FaLaravel } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";

export default function Projects() {
    let gh = "https://github.com/ravelate";
    let [projects] = useState([
      {
        name: "Jatinom Monitoring Apps",
        description:
          "Pengembangan proyek Sistem Informasi Monitoring Kandang Ayam berbasis IOT (web-based dan mobile-app)",
        isLeft: true,
        link: "/jatinom",
        icon: {
          name: FaLaravel,
          fill: clsx("group-hover:fill-[#FF2D20]"),
        },
        image: {
          src: "/img/projects/Jatinom.png",
          alt: "Jatinom",
          width: 448,
          height: 148,
        },
      },
      {
        name: "Akrab - Communication better",
        description:
          "Akrab is an android-based learning application that is intended for people who are deaf and mute, as a medium for people with disabilities as well as for the general public who care about the importance of sign language learning.",
        isLeft: false,
        link: "/akrab",
        icon: {
          name: FaHtml5,
          fill: clsx("group-hover:fill-[#E96228]"),
        },
        image: {
          src: "/img/projects/Akrab.png",
          alt: "Akrab",
          width: 500,
          height: 250,
        },
      },
      {
        name: "Teaboo - Teacher Book",
        description:
          "Teaboo application offers a convenient mobile solution for school personnel, especially educators, enabling them to access and utilize it flexibly. With this application, educators can take attendance, set reminders for assignments and classes, provide daily grades and assessments, and share materials online for evaluation purposes, benefiting both students and teachers alike. ",
        isLeft: true,
        link: "/Teaboo",
        icon: {
          name: FaHtml5,
          fill: clsx("group-hover:fill-[#E96228]"),
        },
        image: {
          src: "/img/projects/teaboo.png",
          alt: "Simple RPS",
          width: 448,
          height: 148,
        },
      },
     
    ]);
    return (
      <>
        {/* Projects Starts */}

        <div className="px-6">
          <Waypoints target={'toprojects'}>
            <section id="projects" className="pt-28">
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
                {projects.map(
                  ({ name, description, isLeft, link, icon, image }) => {
                    return (
                      <Fragment key={name}>
                        <div className="flex justify-center">
                          <a
                            className={`group hover:scale-110 ${
                              isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                            } transition delay-75`}
                            href={gh + link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="card max-w-md bg-base-100 shadow-xl image-full"
                              data-aos="fade-up"
                            >
                              <figure>
                                <Image {...image} />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">
                                  <icon.name
                                    className={`${icon.fill} transition ease-in-out delay-150`}
                                  />
                                  {name}
                                </h2>
                                <p>{description}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div></div>
                        <div></div>
                      </Fragment>
                    );
                  }
                )}
              </div>

              <div className="text-center mt-20">
                <a
                  className="btn btn-wide"
                  href="https://github.com/ravelate?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 w-5 h-5" />
                  View all my Projects. <FaAngleRight className="ml-2" />
                </a>
              </div>
            </section>
          </Waypoints>
        </div>

        {/* Projects Ends */}
      </>
    );
}