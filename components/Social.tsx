import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/boodev03" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/boodev/" },
];

interface IProps {
  containerStyles: string;
  iconStyles: string;
}
export default function Social({ containerStyles, iconStyles }: IProps) {
  return (
    <div className={containerStyles}>
      {socials.map((social) => (
        <Link
          href={social.path}
          key={social.path}
          target="_blank"
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
