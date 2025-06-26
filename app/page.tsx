import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiDownload, FiEye } from "react-icons/fi";
export default function HomePage() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Ngoc Thang</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a full-stack developer passionate about building intuitive and
              responsive web applications. I specialize in React, Next.js,
              TypeScript, and Tailwind CSS on the frontend, with experience in
              Node.js and NestJS for backend development.
              <br />
              <br />
              Recently, I've also been exploring the world of Web3 and
              blockchain development to expand my knowledge and stay updated
              with modern tech trends.
            </p>

            {/* Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1Z8GvXWFYqX4KGF_Ww2wigiYLY82l8IQ3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>My Resume</span>
                  <FiArrowRight className="text-xl" />
                </a>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
