"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 704 462 651",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ngocthang.devweb@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Binh Hung Hoa, Binh Tan District, HCM City",
  },
];

import { motion } from "framer-motion";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { EmailTemplate } from "./EmailTemplate";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface FormDataProps {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormDataProps>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const [isPending, startTransition] = useTransition();

  const onChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const onSubmit = () => {
    startTransition(async () => {
      const content = EmailTemplate(formData);
      const emailPayload = {
        email: formData.email,
        title: "Work with me",
        content,
      };
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(emailPayload),
      });
      const data = await res.json();
      if (data?.code === 1) {
        toast.success("Your message has been sent successfully.");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          role: "",
          message: "",
        });
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I’m excited to collaborate with you on creating innovative
                solutions. Let’s bring your ideas to life with passion and
                precision!
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  onChange={(e) => onChange("firstname", e.target.value)}
                  value={formData.firstname}
                  name="firstname"
                  placeholder="Firstname"
                  required
                />
                <Input
                  onChange={(e) => onChange("lastname", e.target.value)}
                  value={formData.lastname}
                  name="lastname"
                  placeholder="Lastname"
                  required
                />
                <Input
                  onChange={(e) => onChange("email", e.target.value)}
                  value={formData.email}
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                />
                <Input
                  onChange={(e) => onChange("phone", e.target.value)}
                  value={formData.phone}
                  name="phone"
                  type="phone"
                  placeholder="Phone number"
                  required
                />
              </div>
              {/* Select */}
              <Select
                onValueChange={(e) => onChange("role", e)}
                name="role"
                value={formData.role}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="fed">Front-end Development</SelectItem>
                    <SelectItem value="bed">Back-end Development</SelectItem>
                    <SelectItem value="fd">Fullstack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text-area */}
              <Textarea
                value={formData.message}
                required
                onChange={(e) => onChange("message", e.target.value)}
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* Button */}
              <Button
                disabled={isPending}
                onClick={
                  formData.email &&
                  formData.firstname &&
                  formData.lastname &&
                  formData.role &&
                  formData.phone &&
                  formData.message
                    ? onSubmit
                    : undefined
                }
                size="md"
                className="max-w-40"
                type="submit"
              >
                {isPending ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-6">
                  <div className="size-[52px] xl:size-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
