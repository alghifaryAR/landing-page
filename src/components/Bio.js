import { useRef } from "react";
import { useGsapBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useGsapBioReveal(bioRef, 2);
  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        A person who have good behavior, hardworking, and creative. Able to
        complete task as well as possible with discipline and carefully. Have
        desire to learns something if there is some task that can't be resolve.
        Not only that but also like to finish the task as fast as possible.
      </p>
    </div>
  );
};

export default Bio;
