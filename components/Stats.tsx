"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 6,
    text: "Months of experiences",
  },
  {
    num: 10,
    text: "Project completed",
  },
  {
    num: 10,
    text: "Knowledge technologies",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat) => (
            <div
              key={stat.text}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
