"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "../WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "TBoost",
    description:
      "TBoost is a free application designed to facilitate seamless real-time communication and collaboration among team members. It supports messaging, video calls, channels, file sharing, notifications, and task management",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "shadcn/ui",
      },
      {
        name: "SCSS",
      },
      {
        name: "Nest.js",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Cloudflare R2",
      },
      {
        name: "RabbitMQ",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://www.tboost.click/",
    github: "https://github.com/rotcivNT/t-boost",
  },
  {
    num: "02",
    category: "Front-end",
    title: "Weather app",
    description: "National And Local Weather - Weekly Weather Forecast",
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://thang-weather-app.netlify.app/",
    github: "",
  },
  {
    num: "03",
    category: "Front-end",
    title: "Travel agency",
    description:
      "A travel agency project, featuring an interactive user interface for browsing destinations, selecting vacation packages, and booking trips effortlessly.",
    stack: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
    ],
    image: "/assets/work/thumb3.jpg",
    live: "https://thang-travel.netlify.app/",
    github: "",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const onSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* project info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stacks */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={item.name} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                {/* Live project */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github */}

                <Link href={project.github} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={onSlideChange}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.num} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative size-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Navigation buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] size-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
