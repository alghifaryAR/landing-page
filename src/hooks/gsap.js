import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapHeroImgReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: "-100vw", // Mengatur posisi awal ke luar layar sebelah atas
        opacity: 0, // Mengatur opacity ke 0 agar gambar awalnya tidak terlihat
      },
      {
        y: 0, // Mengatur posisi akhir ke posisi normal
        opacity: 1, // Mengatur opacity ke 1 agar gambar muncul
        duration: 1,
        delay: 0.9,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};
export const useGsapHeadLineReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [items, delay]);
};

export const useGsapNavLinkReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

export const useGsapBioReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useGsapSocialReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        x: -500,
      },
      {
        x: 0,
        duration: 1,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useGsapSectionTitleReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 300,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el, delay]);
};

export const useGsapProjectLeftRightReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

export const useGsapInputReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

export const useGsapSkillItemReveal = (items) => {
  useEffect(() => {
    items.forEach((el) =>
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          onEnter() {
            el.classList.add("reveal");
          },
        },
      })
    );
  }, [items]);
};

export const useGsapSkillTextReveal = (el) => {
  useEffect(() => {
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [el]);
};

export const useGsapFooterReveal = (el) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: -200,
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el]);
};
