import { Reveal } from "../utils";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import {Projectmodal} from '../components'

const Projectcard = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
        className="text-white"
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className='w-full aspect-video relative overflow-hidden rounded-xl  bg-opacity-10 backdrop-filter backdrop-blur-lg bg-gray-300'
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            className="w-5/6 absolute b-0 left-1/2 -translate-x-1/2 translate-y-12 duration-300"
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className='mx-6'>
          <Reveal width="100%">
            <div className='flex items-center gap-5'>
              <h4 className="font-bold text-2xl">{title}</h4>
              <div className='w-full h-[1px] opacity-30' />

              <a href={code} target="_blank" rel="nofollow">
                <AiFillGithub size="2.8rem" />
              </a>

              <a href={projectLink} target="_blank" rel="nofollow">
                <AiOutlineExport size="2.8rem" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className='flex flex-wrap gap-5 mx-3'>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className='font-extralight'>
              {description}{" "}
              <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <Projectmodal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};

export default Projectcard