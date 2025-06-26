"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import WorkSliderBtns from "../WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "TestGenAI",
    title: "TestGenAI",
    description:
      "An AI-powered test generation platform built with modern React stack. Team of 4 members. Created reusable components to enhance efficiency in future projects. Collaborated with back-end developer to seamlessly integrate user interface elements and with tester to verify, identify, and resolve bugs and performance issues. Integrated front-end code with server-side logic to deliver dynamic web pages.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "TypeScript",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "shadcn/ui",
      },
      {
        name: "Supabase",
      },
      {
        name: "Langchain",
      },
      {
        name: "React Query",
      },
      {
        name: "Zustand",
      },
      {
        name: "Git",
      },
    ],
    image: "/assets/work/testgenai.jpg",
    live: "https://testgenai.com",
    github: "",
  },
  {
    num: "02",
    category: "Yoshida Corporate Ltd",
    title: "Yoshida Corporate Ltd",
    description:
      "Developed responsive corporate and recruitment websites using Next.js with bilingual support in Japanese and English. Solo project. Converted Figma designs into reusable, pixel-perfect components using shadcn/ui. Designed and integrated a custom CMS for dynamic content management, including case studies and recruitment information. Leveraged Firebase services for scalable database management and secure authentication. Applied on-page SEO best practices for Next.js, focusing on international SEO and performance optimization.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "shadcn/ui",
      },
      {
        name: "Zustand",
      },
      {
        name: "React Query",
      },
      {
        name: "Firebase",
      },
      {
        name: "Git",
      },
    ],
    image: "/assets/work/ysd-cor.png",
    live: "https://ysd-k.co.jp",
    github: "",
  },
  {
    num: "03",
    category: "The Black Artichoke",
    title: "The Black Artichoke",
    description:
      "Created responsive user interface with Next.js and Tailwind CSS, enhancing user experience across devices. Team of 3 members. Converted Figma designs into reusable, pixel-perfect components using shadcn/ui. Developed custom CMS utilizing Supabase, enabling client to manage blog content independently. Collaborated with team using Git for version control, ensuring code quality and efficient workflows.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "React Query",
      },
      {
        name: "Zustand",
      },
      {
        name: "shadcn/ui",
      },
      {
        name: "Supabase",
      },
      {
        name: "Git",
      },
    ],
    image: "/assets/work/theblackartichoke.png",
    live: "https://theblackartichoke.com",
    github: "",
  },
  {
    num: "04",
    category: "sGas",
    title: "sGas",
    description:
      "Frontend Developer Internship project focused on modern React development practices. Built responsive web applications using React.js and JavaScript. Gained experience in component-based architecture, state management with Redux Toolkit, and collaborative development with Git version control. Converted Figma designs into pixel-perfect user interfaces using Material UI components.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Vite",
      },
      {
        name: "Redux",
      },
      {
        name: "Redux Toolkit",
      },
      {
        name: "Material UI",
      },
      {
        name: "Figma",
      },
      {
        name: "Git",
      },
    ],
    image: "/assets/work/sGas.png",
    live: "",
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
                {project.category}
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
                        className="object-contain"
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
