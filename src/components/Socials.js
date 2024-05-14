import { useRef } from "react";
import { useGsapSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/alghifaryrh.alghifaryrh/",
  },
  { id: 2, title: "GitHub", url: "https://github.com/alghifaryAR" },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/alghifary-rachman-hakim-75780b248/",
  },
  { id: 4, title: "Twitter", url: "" },
  { id: 5, title: "Instagram", url: "https://www.instagram.com/a_rchk/" },
];
const Socials = () => {
  const socialRef = useRef(null);

  useGsapSocialReveal(socialRef, 2);

  return (
    <div
      className="socials flex gap-3 uppercase text-sm fixed left-5 top-[80%] -rotate-90 origin-left text-white/75 bg-black/50 p-3 backdrop-blur-lg z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
