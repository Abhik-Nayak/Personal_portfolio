// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#2727d9] text-xl uppercase">
            Who am i?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            My name is ABHIK NAYAK. Experienced Full-Stack Developer with 3+
            years of expertise in building high-performance web applications.
            Proficient in{" "}
            <span className="text-[#00c4ff] font-semibold">React.js</span>,{" "}
            <span className="text-[#00c4ff] font-semibold">Next.js</span>,
            <span className="text-[#00c4ff] font-semibold">Node.js</span>,{" "}
            <span className="text-[#00c4ff] font-semibold">Express</span> and
            <span className="text-[#00c4ff] font-semibold">
            {" "} Spring Boot Framework
            </span>
            . Skilled in{" "}
            <span className="text-[#00c4ff] font-semibold">JavaScript</span>,
            <span className="text-[#00c4ff] font-semibold">TypeScript</span>,{" "}
            <span className="text-[#00c4ff] font-semibold">PostgreSQL</span> and {" "}
            <span className="text-[#00c4ff] font-semibold">MongoDB</span>. Adept
            at UI development, API integration, and performance optimization. A
            proactive problem-solver, ensuring secure, scalable, and
            user-friendly solutions in agile environments.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Abu Said"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
