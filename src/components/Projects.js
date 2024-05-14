import Project from "./Project";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "e-commerce website",
    img1: "https://res.cloudinary.com/dh2bsxesy/image/upload/v1715622247/pbvnlcatabgw14djzvjp.png",
    img2: "https://res.cloudinary.com/dh2bsxesy/image/upload/v1715622298/owgggu27atrbn9f141hg.png",
    description:
      "Welcome to Euphoria E-commerce, a one-stop destination for all your online shopping needs. Our platform is built on a sophisticated and simple technology stack, including using only BootStarp PHP and MySQL",
    tools: ["BOOTSTRAP", "PHP", "MYSQL"],
    liveLink: "",
    frontEndLink: "",
  },
  {
    /* Welcome to Course-demy, the ultimate online destination for unlocking your full potential through the power of education. Our platform is built on a powerful technology stack, including Next.js, React, Prisma, Tailwind, Nest-Auth, and Stripe  */
    id: 2,
    title: "Welcome to My Project destination",
    img1: "https://res.cloudinary.com/dh2bsxesy/image/upload/v1715622671/hndxu8jqs2gwfbkd5fuz.png",
    img2: "https://res.cloudinary.com/dh2bsxesy/image/upload/v1715622677/xj2kr9wugu6k3whhxzpl.png",
    description:
      "Welcome to Course-demy, the best online destination to unlock your full potential through the power of personal branding for you. Our platform is built on a stack of advanced and simple technology, namely just HTML",
    tools: ["HTML"],
    liveLink: "https://alghifaryar.github.io/portofolio/",
    frontEndLink: "https://github.com/alghifaryAR/portofolio",
  },
  {
    id: 3,
    title: "Welcome to tech-Polaroid",
    img1: "https://res.cloudinary.com/dh2bsxesy/image/upload/v1715621628/whl7eko1jwugwggd18uv.png",
    img2: "https://res.cloudinary.com/dh2bsxesy/image/upload/v1715621764/npgdv9npgdhlacoi3rux.png",
    description:
      "Welcome to Tech-Polaroid, which changes your photo experience to be more aesthetic. Combining the power of HTML CSS and simple JAVASCRIPT, Tech-Polaroid is formed offering a dynamic and feature-rich environment for customers.",
    tools: ["HTML", "CSS", "JAVASCRIPT"],
    liveLink: "https://alghifaryar.github.io/polaroid-flash/",
    frontEndLink: "https://github.com/alghifaryAR/polaroid-flash",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"My Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
