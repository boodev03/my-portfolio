"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: " 01",
    title: "Frontend Development",
    description:
      "Building and maintaining responsive, user-friendly websites using modern technologies. Crafting interactive, visually appealing user interfaces with a focus on user experience.",
    href: "",
  },
  {
    num: " 02",
    title: "Backend Development",
    description:
      "Building and maintaining the server-side of a website. It focuses on databases, server logic, APIs, and architecture to ensure the site functions smoothly behind the scenes.",
    href: "",
  },
  {
    num: " 03",
    title: "SEO",
    description:
      "Improving a website’s visibility in search engine results to attract more organic traffic. This includes optimizing content, keywords, and site structure to enhance search engine ranking.",
    href: "",
  },
];

export default function Service() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service) => (
            <div key={service.num} className="flex-1 flex flex-col gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="size-[70px] rounded-full bg-white group-hover:bg-accent 
                transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* desc */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
