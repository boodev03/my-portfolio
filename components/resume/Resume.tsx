"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGit,
  FaBitbucket,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I am a passionate and responsible programmer dedicated to creating effective and engaging web solutions. Below is a snapshot of my personal and professional details.",
  info: [
    { fieldName: "Name", fieldValue: "Ngoc Thang" },
    { fieldName: "Phone", fieldValue: "(+84) 704 462 651" },
    { fieldName: "Experience", fieldValue: "1 year" },
    { fieldName: "Nationality", fieldValue: "Viet Nam" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "Vietnamese, English" },
    { fieldName: "Email", fieldValue: "ngocthang.devweb@gmail.com" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: `I specialize in front-end development, creating responsive and engaging user interfaces with modern web technologies.`,
  items: [
    {
      company: "TestGenAI",
      position: "Front End Developer",
      duration: "03/2025 - Current",
    },
    {
      company: "Yoshida Corporate Ltd",
      position: "Front End Developer",
      duration: "02/2025 - 06/2025",
    },
    {
      company: "The Black Artichoke",
      position: "Front End Developer",
      duration: "11/2024 - 04/2025",
    },
    {
      company: "TMA Solutions",
      position: "Frontend Developer Intern",
      duration: "06/2024 - 09/2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Here is a summary of my educational background and the relevant courses I've completed.",
  items: [
    {
      company: "IUH",
      position: "Software Engineering",
      duration: "2021 - Present",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I have developed expertise in a range of technologies and tools essential for modern web development. Below is a list of skills and technologies I am proficient in.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "Javascript" },
    { icon: <SiTypescript />, name: "Typescript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNestjs />, name: "Nest.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaBitbucket />, name: "Bitbucket" },
    { icon: <SiDocker />, name: "Docker" },
  ],
};

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ScrollArea } from "../ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Image from "next/image";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="container mx-auto min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px] w-full"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/* Content */}
        <div className="min-h-[70vh] w-full">
          {/* Experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold flex items-center gap-3">
                {experience.title}
                <Image src={experience.icon} alt="" width={41} height={60} />
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {item.position}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="size-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* Education */}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold flex items-center gap-3">
                {education.title}

                <Image src={education.icon} alt="" width={41} height={60} />
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {item.position}
                      </h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="size-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* Skills */}
          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill) => (
                  <li key={skill.name}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          {/* About me */}
          <TabsContent
            value="about"
            className="w-full text-center xl:text-left"
          >
            <div className="flex flex-col gap-[30px] ">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                {about.info.map((item) => (
                  <li
                    key={item.fieldName}
                    className="flex items-center justify-center xl:justify-start gap-4"
                  >
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
}
